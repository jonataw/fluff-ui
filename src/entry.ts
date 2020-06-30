import _Vue, { PluginFunction, Component } from 'vue';

import Datepicker from 'vue2-datepicker';
_Vue.use(Datepicker as any);

// Import vue components
import * as components from '@/components/index';
import { ModalOptions, ToastOptions } from 'fluff-ui';

// Define typescript interfaces for autoinstaller
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}
// install function executed by Vue.use()
const install: InstallFunction = function installFluffUi(
  Vue: typeof _Vue,
  config: any
) {
  if (install.installed) return;
  install.installed = true;
  instance(Vue, config);

  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

function instance(Vue: typeof _Vue, config: any) {
  const EventBus = new Vue();
  Vue.prototype.$config = config || {};
  Vue.prototype.$bus = EventBus;
  Vue.prototype.$toast = {
    pop(toast: {
      title: string;
      text: string;
      icon?: string;
      chip?: { icon: string; color: string; text: string };
      options: Partial<ToastOptions>;
    }) {
      Vue.prototype.$bus.$emit('pop_toast', toast);
    },
    close(index: number) {
      Vue.prototype.$bus.$emit('close_toast', index);
    }
  };
  Vue.prototype.$modal = {
    open(component: Component, data: any, options: Partial<ModalOptions>) {
      Vue.prototype.$bus.$emit('open_modal', component, data, options);
    },
    close() {
      Vue.prototype.$bus.$emit('close_modal');
    }
  };
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = (global as any).Vue;
  }
  if (GlobalVue) {
    (GlobalVue as typeof _Vue).use(plugin);
  }
}
// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/components/index';
