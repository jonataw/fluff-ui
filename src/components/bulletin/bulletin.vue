<template>
  <div v-if="show" class="bulletin" :class="{ [`bulletin--color-${color}`]: true }">
    <div class="bulletin__inner">
      <div v-if="chip" class="bulletin__chip">
        <Chip :color="chip.color" :icon="chip.icon">{{ chip.text }}</Chip>
      </div>
      <span class="bulletin__text"><slot /></span>
    </div>
    <div class="bulletin__dismiss">
      <Icon i="cross" @click="onDismiss" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Chip from '@/components/chip/chip.vue';
import Icon from '@/components/icon/icon.vue';

@Component({
  name: 'FLBulletin',
  components: { Chip, Icon }
})
export default class extends Vue {
  @Prop({ type: Object }) readonly chip?: { color: string; text: string; icon: string };
  @Prop({ type: String, default: 'default' }) readonly color?: string;
  @Prop({ type: Boolean, default: true }) readonly dismissable?: boolean;

  cookie = 'bulletin-dismissed';
  show = false;

  mounted() {
    if (!this.dismissable) {
      this.show = true;
    }
    this.show = this.getCookieValue(this.cookie) === '';
  }

  onDismiss() {
    // SSR?
    this.show = false;
    if (document) {
      document.cookie = `${this.cookie}=1`;
    }
  }

  getCookieValue(name: string) {
    const c = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return c ? c.pop() : '';
  }
}
</script>
