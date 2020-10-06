<template>
  <div
    class="loading"
    :class="{
      [`loading--size-${size}`]: true,
      [`loading--color-${color}`]: true
    }"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'FLLoading'
})
export default class extends Vue {
  @Prop({ type: String, default: 'default' }) readonly color?: string;
  @Prop({ type: String, default: 'default' }) readonly size?:
    | 'default'
    | 'small'
    | 'large';
}
</script>
