<template>
  <div
    v-if="show"
    class="bulletin"
    :class="{ [`bulletin--color-${color}`]: true }"
  >
    <div class="bulletin__inner">
      <span class="bulletin__text"><slot /></span>
    </div>
    <div v-if="dismissable" class="bulletin__dismiss">
      <Icon i="cross" @click="onDismiss" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Chip from '../chip/chip.vue';
import Icon from '../icon/icon.vue';

@Component({
  name: 'FLBulletin',
  components: { Chip, Icon }
})
export default class extends Vue {
  /**
   * Color of the bulletin.
   * Requires the `bulletin--color-{color}` CSS rule.
   */
  @Prop({ type: String, default: 'default' }) protected readonly color?: string;

  /**
   * Determines if the bulletin can be dismissed.
   */
  @Prop({ type: Boolean, default: true })
  protected readonly dismissable?: boolean;

  /**
   * If this prop is set, a cookie with this name will be saved when the bulletin is dismissed.
   * Requires `dismissable` to be true.
   */
  @Prop({ type: String })
  protected readonly dismissableCookie?: string;

  protected show = false;

  protected mounted(): void {
    this.show = true;
    if (this.dismissableCookie) {
      this.show = !this.getCookie(this.dismissableCookie);
    }
  }

  protected onDismiss(): void {
    this.show = false;
    if (this.dismissableCookie && !this.$isServer) {
      this.setCookie(this.dismissableCookie, '1');
    }
  }

  private setCookie(name: string, value: string): void {
    document.cookie = `${name}=${value}`;
  }

  private getCookie(name: string): string | null {
    const c = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return (c ? c.pop() : null) || null;
  }
}
</script>
