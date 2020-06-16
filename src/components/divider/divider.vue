<template>
  <div class="divider--root">
    <div v-if="text" class="divider divider--with-text">
      <div></div>
      <div>{{ text }}</div>
      <div></div>
    </div>
    <div v-else class="divider" :class="{ 'divider--compact': compact }"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  @Prop({ type: String, required: false }) readonly text?: string;
  @Prop({ type: Boolean, required: false }) readonly compact?: boolean;
}
</script>
