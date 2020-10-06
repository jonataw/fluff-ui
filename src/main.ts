import { v4 as uuidv4 } from 'uuid';
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

function instance(Vue: typeof _Vue, config: any): void {
  Vue.prototype.$fluff = {
    config: config || {},
    bus: new Vue(),
    toast: {
      pop(toast: {
        title: string;
        text: string;
        icon?: string;
        chip?: { icon: string; color: string; text: string };
        options: Partial<ToastOptions>;
      }): void {
        Vue.prototype.$fluff.bus.$emit('pop_toast', toast);
      },
      close(index: number): void {
        Vue.prototype.$fluff.bus.$emit('close_toast', index);
      }
    },
    modal: {
      open(
        component: Component,
        data: any,
        options: Partial<ModalOptions>
      ): void {
        Vue.prototype.$fluff.bus.$emit('open_modal', component, data, options);
      },
      close(): void {
        Vue.prototype.$fluff.bus.$emit('close_modal');
      }
    },
    get uuid(): string {
      return uuidv4().substring(0, 8);
    },
    autoBind(binds: string[] | undefined, props: any): Record<string, any> {
      const toCamel = (s: string): string => {
        return s.replace(/([-_][a-z])/gi, $1 => {
          return $1
            .toUpperCase()
            .replace('-', '')
            .replace('_', '');
        });
      };
      const obj: Record<string, any> = {};
      if (typeof binds !== 'undefined') {
        binds.forEach(bind => {
          obj[bind] = props[toCamel(bind)];
        });
      }
      return obj;
    },
    autoListen(
      binds: string[],
      listeners: Record<string, any>
    ): Record<string, any> {
      const obj: Record<string, any> = {};
      Object.entries(listeners).forEach(([key, value]) => {
        if (!binds.includes(key)) {
          obj[key] = value;
        }
      });
      return obj;
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
if (typeof process !== 'undefined' && 'false' === process.env.ES_BUILD) {
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
