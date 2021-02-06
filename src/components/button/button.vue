<template>
  <div
    class="button"
    :class="{
      'button--inline': inline,
      'button--disabled': disabled,
      'button--loading': loading,
      'button--icon': !!icon,
      'button--text': hasTextContent,
      [`button--size-${size}`]: true,
      [`button--color-${color}`]: true,
      [`button--icon-align-${iconAlign}`]: !!icon
    }"
  >
    <component
      :is="tag"
      v-bind="!tag.includes('link') ? $props : undefined"
      :to="to"
      :type="type"
      :value="value"
      class="button__element"
      @click="onClick"
      :disabled="disabled"
    >
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="button__loading">
          <Loading :size="'button-' + size" color="button" />
        </div>
      </transition>
      <div v-if="icon" class="button__icon">
        <Icon :i="icon" />
      </div>
      <span v-if="hasTextContent" class="button__text"><slot /></span>
    </component>
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
  @Prop({ type: String, default: 'default' }) readonly color?: string;

  @Prop({ type: Boolean, default: false }) readonly disabled?: boolean;

  @Prop({ type: String }) readonly href?: string;

  @Prop({ type: String }) readonly icon?: string;
  @Prop({ type: String, default: 'left' }) readonly iconAlign?:
    | 'left'
    | 'right';

  @Prop({ type: Boolean, default: false }) readonly inline?: boolean;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: String }) readonly rel?: string;

  @Prop({ type: String, default: 'default' }) readonly size?:
    | 'default'
    | 'small'
    | 'large';

  @Prop({ type: String, default: 'button' }) readonly tag?:
    | 'button'
    | 'input'
    | 'a'
    | 'router-link'
    | 'nuxt-link';

  @Prop({ type: String }) readonly target?: string;

  @Prop({ type: [String, Object] }) readonly to?:
    | { name?: string; params?: any; path?: string }
    | string;

  @Prop({ type: String, default: 'button' }) readonly type?:
    | 'submit'
    | 'button'
    | 'reset';

  @Prop({ type: String }) readonly value?: string;

  /**
   * Returns true if the button has text content.
   */
  protected get hasTextContent(): boolean {
    return !!this.$slots.default;
  }

  /**
   * Fired on click of button.
   */
  protected onClick(): void {
    if (!this.disabled) {
      this.$emit('click');
    }
  }
}
</script>
