<template>
  <div class="toast_container">
    <transition-group name="list-complete">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toast"
        :class="{
          'toast--delay': !!toast.options.delay,
          'toast--closeable':
            typeof toast.options.closeable === 'object'
              ? toast.options.closeable.click
              : toast.options.closeable
        }"
        @click="e => close(e, toast.id)"
      >
        <div class="toast__inner">
          <div v-if="toast.chip" class="toast__chip">
            <Chip :icon="toast.chip.icon" :color="toast.chip.color">{{
              toast.chip.text
            }}</Chip>
          </div>
          <div v-if="toast.icon && !toast.chip" class="toast__icon">
            <Icon :i="toast.icon" />
          </div>
          <div class="toast__middle">
            <h4 v-if="toast.title" class="toast__title" v-text="toast.title" />
            <span class="toast__text" v-text="toast.text" />
          </div>
          <Icon
            v-if="
              typeof toast.options.closeable === 'object'
                ? toast.options.closeable.icon
                : toast.options.closeable
            "
            i="cross"
            class="toast__close_icon"
            @click="e => close(e, toast.id)"
          />
          <div
            class="toast__progress_background"
            v-if="toast.options.showDelayProgress"
          >
            <div
              class="toast__progress"
              :style="{ 'animation-duration': toast.options.delay + 'ms' }"
            />
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Toast, ToastOptions } from '../../../fluff-ui';

import Chip from '@/components/chip/chip.vue';
import Icon from '@/components/icon/icon.vue';

const defaultOptions: ToastOptions = {
  closeable: true,
  delay: 5000,
  showDelayProgress: true
};

interface ToastWithId extends Toast {
  id: number;
}

@Component({
  name: 'FLToast',
  components: { Chip, Icon }
})
export default class extends Vue {
  toasts: ToastWithId[] = [];
  id = 0;

  created() {
    this.$bus.$on('pop_toast', (toast: Toast) => {
      const id = this.id++;

      toast.options = {
        ...defaultOptions,
        ...this.$config.toast,
        ...toast.options
      };

      this.toasts.push({ ...toast, id });
      if (toast.options.delay && typeof toast.options.delay === 'number') {
        setTimeout(() => {
          this.toasts = this.toasts.filter(_t => _t.id !== id);
        }, toast.options.delay);
      }
    });
    this.$bus.$on('close_toast', (id: number) => {
      this.toasts = this.toasts.filter(_ => _.id !== id);
    });
  }

  close(event: any, id: number) {
    const toast = this.toasts.find(_t => _t.id === id);
    if (!toast) {
      return;
    }
    const close = () => this.$bus.$emit('close_toast', id);
    const cl: DOMTokenList = event.target.classList;
    const closeable = toast.options.closeable;
    if (typeof closeable === 'boolean' && closeable) {
      close();
    } else if (typeof closeable === 'object') {
      if (closeable.click) {
        close();
      }
      if (cl.contains('toast__close_icon') && closeable.icon) {
        close();
      }
    }
  }
}
</script>
