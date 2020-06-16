<template>
  <div
    class="loading"
    :style="{ borderColor: color }"
    :class="{
      [`loading--size-${size || 'default'}`]: true,
      [`loading--color-${color || 'default'}`]: true
    }"
  />
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

export default class extends Vue {
  @Prop({ type: String, required: false }) readonly color?: string;
  @Prop(String) readonly size?: 'default' | 'small' | 'large';
}
</script>
