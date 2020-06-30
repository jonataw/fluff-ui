<template>
  <div class="toast_container">
    <transition-group name="player">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toast"
        :class="{
          'toast--closeable':
            typeof options.closeable === 'object'
              ? options.closeable.click
              : options.closeable
        }"
        @click="e => close(e, toast.id)"
      >
        <Chip v-if="toast.chip" :icon="toast.chip.icon" class="toast__chip">{{
          toast.chip.text
        }}</Chip>
        <Icon
          v-if="toast.icon && !toast.chip"
          :i="toast.icon"
          class="toast__icon"
        />
        <div class="toast__middle">
          <h4 v-if="toast.title" class="toast__title" v-text="toast.title" />
          <p class="toast__text" v-text="toast.text" />
        </div>
        <Icon
          v-if="
            typeof options.closeable === 'object'
              ? options.closeable.cross
              : options.closeable
          "
          i="cross"
          class="toast__close_icon"
          @click="e => close(e, toast.id)"
        />
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
  options: ToastOptions = defaultOptions;
  toasts: ToastWithId[] = [];
  id = 0;

  created() {
    this.$bus.$on('pop_toast', (toast: Toast) => {
      const id = this.id++;
      toast.options = { ...defaultOptions, ...toast.options };
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
    const close = () => this.$bus.$emit('close_toast', id);
    const cl: DOMTokenList = event.target.classList;
    const closeable = this.options.closeable;
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
