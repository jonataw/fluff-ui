// we need our modal component
import FLModal from './modal.vue';
import _Vue from 'vue';

export default {
  install(Vue: typeof _Vue) {
    Vue.component('FLModal', FLModal);
    Vue.mixin({
      // Add component lifecycle hooks or properties.
      created() {
        console.log('Hello from created hook!');
      }
    });
  }
};
