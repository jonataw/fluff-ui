<template>
  <div class="chip" :class="{ [`chip--color-${color}`]: true }">
    <div v-if="icon" class="chip__icon">
      <Icon :i="icon" />
    </div>
    <span v-if="hasTextContent" class="chip__text"><slot /></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Icon from '@/components/icon/icon.vue';

@Component({
  name: 'FLChip',
  components: { Icon }
})
export default class extends Vue {
  @Prop({ type: String, required: false }) readonly icon?: string;
  @Prop({ type: String, default: 'default' }) readonly color?: string;

  /**
   * Returns true if the chip has text content.
   *
   * @returns {boolean}
   */
  get hasTextContent(): boolean {
    return !!this.$slots.default;
  }
}
</script>
