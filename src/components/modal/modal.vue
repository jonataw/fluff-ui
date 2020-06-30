<template>
  <div class="modal">
    <transition name="anim--modal_backdrop">
      <div class="modal__backdrop" v-if="!!component"></div>
    </transition>
    <transition name="anim--modal">
      <div class="modal__outer" v-if="!!component" @click="close">
        <div class="modal__inner" :style="{ maxWidth: width }">
          <Icon
            v-if="
              typeof options.closeable === 'object'
                ? options.closeable.cross
                : options.closeable
            "
            i="cross"
            class="modal__close_icon"
            @click="close"
          />
          <component :is="component" :data="data" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModalOptions } from '../../../fluff-ui';
import Icon from '@/components/icon/icon.vue';

const defaultOptions: ModalOptions = {
  allowBodyScroll: false,
  closeable: true,
  width: 580
};

@Component({
  name: 'FLModal',
  components: { Icon }
})
export default class extends Vue {
  component: typeof Component | null = null;
  data: any | null = null;
  options: ModalOptions = defaultOptions;

  created() {
    this.$bus.$on(
      'open_modal',
      (
        component:
          | typeof Component
          | { options: ModalOptions; component: typeof Component; data: any },
        data: any,
        options: ModalOptions
      ) => {
        if (typeof component === 'object') {
          // Handle case where all arguments are passed as an object in the first argument.
          options = component.options;
          data = component.data;
          component = component.component;
        }
        // Set default options.
        options = { ...defaultOptions, ...options };

        // TODO: if (component instanceof Vue) does not work here for some reason?
        if (typeof component !== 'function') {
          console.error(
            `$modal.open expects a component, got '${typeof component}'.`
          );
        } else {
          this.options = options;
          this.component = component;
          this.data = data;
        }

        if (!this.options.allowBodyScroll) {
          // Restrict the body overflow.
          this.restrictBodyOverflow();
        }
      }
    );
    this.$bus.$on('close_modal', () => {
      this.releaseBodyOverflow();
      this.component = null;
      this.data = null;
    });
  }

  private restrictBodyOverflow(): void {
    if (!this.$isServer) {
      const body = document.querySelector('body');
      if (body) {
        body.style.overflow = 'hidden';
      }
    }
  }

  private releaseBodyOverflow(): void {
    if (!this.$isServer) {
      const body = document.querySelector('body');
      if (body) {
        body.style.removeProperty('overflow');
      }
    }
  }

  close(event: any) {
    const close = () => this.$bus.$emit('close_modal');
    const cl: DOMTokenList = event.target.classList;
    if (!cl.contains('modal__outer') && !cl.contains('modal__close_icon')) {
      return;
    }
    const closeable = this.options.closeable;
    if (typeof closeable === 'boolean' && closeable) {
      close();
    } else if (typeof closeable === 'object') {
      if (cl.contains('modal__outer') && closeable.backdrop) {
        close();
      }
      if (cl.contains('modal__close_icon') && closeable.icon) {
        close();
      }
    }
  }

  get width(): string {
    const width = this.options.width;
    if (typeof width === 'number') {
      return width + 'px';
    } else {
      return width;
    }
  }
}
</script>
