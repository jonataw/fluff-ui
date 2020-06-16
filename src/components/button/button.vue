<template>
  <div
    class="button"
    :class="{
      'button--loading-template': loading && loading.mode === 'add' && !icon,
      'button--loading': typeof loading === 'object' ? loading.loading : loading,
      'button--no-text': hasTextContent,
      [`button--${size || 'default'}`]: true,
      [`button--icon-align-${iconAlign}`]: true
    }"
  >
    <button class="button__element" @click="$emit('click')">
      <div v-if="typeof loading === 'object' ? loading.loading : loading" class="button__loading">
        <Loading></Loading>
      </div>
      <div v-else-if="icon" class="button__icon">
        <Icon :i="icon"></Icon>
      </div>
      <span class="button__text"><slot /></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '../icon/icon.vue';
import Loading from '../loading/loading.vue';

interface LoadingOptions {
  loading: boolean;
  mode: 'replace' | 'add';
}

@Component({
  name: 'FLButton',
  components: { Icon, Loading }
})
export default class extends Vue {
  @Prop({ type: [String, Object], default: false }) readonly loading?: boolean | LoadingOptions;
  @Prop(String) readonly size?: 'default' | 'small' | 'large';
  @Prop(String) readonly icon?: string;
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
