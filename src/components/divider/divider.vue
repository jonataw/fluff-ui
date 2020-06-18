<template>
  <div v-if="text" class="divider divider--text">
    <div />
    <div>{{ text }}</div>
    <div />
  </div>
  <div v-else class="divider" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'FLDivider'
})
export default class extends Vue {
  @Prop({ type: String, required: false }) readonly text?: string;
}
</script>
