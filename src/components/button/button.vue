<template>
  <div
    class="button"
    :class="{
      'button--disabled': disabled,
      'button--loading': loading,
      'button--icon': !!icon,
      'button--text': hasTextContent,
      [`button--size-${size}`]: true,
      [`button--icon-align-${iconAlign}`]: !!icon
    }"
  >
    <button class="button__element" @click="$emit('click')" :disabled="disabled">
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="button__loading">
          <Loading :size="'button-' + size"></Loading>
        </div>
      </transition>
      <div v-if="icon" class="button__icon">
        <Icon :i="icon"></Icon>
      </div>
      <span v-if="hasTextContent" class="button__text"><slot /></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '../icon/icon.vue';
import Loading from '../loading/loading.vue';

@Component({
  name: 'FLButton',
  components: { Icon, Loading }
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
  @Prop({ type: String, default: 'default' }) readonly size?: 'default' | 'small' | 'large';
  @Prop({ type: String, default: 'submit' }) readonly type?: 'submit' | 'button' | 'reset';
  @Prop(String) readonly icon?: string;
  @Prop(Boolean) readonly disabled?: boolean;
  @Prop({ type: String, default: 'left' }) readonly iconAlign?: 'left' | 'right';

  /**
   * Returns true if the button has text content.
   *
   * @returns {boolean}
   */
  get hasTextContent(): boolean {
    return !!this.$slots.default;
  }
}
</script>
