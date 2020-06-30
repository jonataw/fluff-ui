<template>
  <div class="modal">
    <transition name="anim--modal_backdrop">
      <div class="modal__backdrop" v-if="!!component"></div>
    </transition>
    <transition name="anim--modal">
      <div class="modal__outer" v-if="!!component">
        <div class="modal__inner">
          <component :is="component" :data="data" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'FLModal',
  components: {}
})
export default class extends Vue {
  component: typeof Component | null = null;
  data: any | null = null;

  created() {
    this.$bus.$on('open', (component: typeof Component, data: any) => {
      // if (component instanceof Vue) does not work here for some reason?
      if (typeof component === 'function') {
        this.component = component;
        this.data = data;
      } else {
        console.error(
          `$modal.open expects a component, got '${typeof component}'.`
        );
      }
    });
    this.$bus.$on('close', () => {
      this.component = null;
      this.data = null;
    });
  }
}
</script>
