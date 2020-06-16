import Vue, { VNode } from 'vue';
import Dev from './serve.vue';

import Fluff from '@/entry';
Vue.use(Fluff);

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev)
}).$mount('#app');
