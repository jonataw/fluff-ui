import Vue, { VNode } from 'vue';
import Main from './main.vue';

import Fluff from '@/entry';
Vue.use(Fluff, {
  toast: { showDelayProgress: false, delay: 100000, closeable: { icon: true } }
});

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Main)
}).$mount('#app');
