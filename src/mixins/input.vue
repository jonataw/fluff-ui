<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Form } from '../components/form/form.vue';

@Component({
  name: 'FLInputMixin',
  components: {}
})
export default class extends Vue {
  @Prop({ type: String }) readonly id?: string;
  @Prop({ type: String }) readonly form?: Form;
  @Prop({ type: String }) readonly name?: string;
  @Prop() readonly value?: any;

  @Prop({ type: String }) readonly label?: string;
  @Prop({ type: String, default: 'default' }) readonly size?:
    | 'default'
    | 'small'
    | 'large';

  @Prop({ type: Boolean }) readonly disabled?: boolean;
  @Prop({ type: Boolean }) readonly readonly?: boolean;

  @Prop({ type: String }) readonly error?: string;
  @Prop() readonly errorMessages?: { [k: string]: string };
  @Prop({ type: Boolean, default: false }) readonly inline?: boolean;

  // Aria
  @Prop({ type: String }) readonly ariaLabel?: string;
  @Prop({ type: String }) readonly ariaLabelledby?: string;

  /**
   * Fired on change of "value"-attribute.
   */
  protected onInput(value: any): void {
    if (this.disabled || this.readonly) {
      return; // Do not allow input if the element is disabled or readonly.
    }
    if (this.$options.name === 'FLCheckbox') {
      this.$emit('change', value, this.id);
    } else {
      this.$emit('input', value, this.id);
    }
  }

  protected onBlur(): void {
    this.$emit('blur');
  }

  protected onFocus(): void {
    this.$emit('focus');
  }

  protected get hasError(): boolean {
    return !!(this.error || this.err);
  }

  private getErrorMessage(error: string): string {
    return this.errorMessages ? this.errorMessages[error] || error : error;
  }

  protected get err(): string | null {
    if (this.error) {
      return this.getErrorMessage(this.error);
    } else if (this.form) {
      const form = this.form;
      const f = form.errors.find((e: any) => e.field === this.id);
      return f ? f.error : null;
    } else {
      return null;
    }
  }

  // Exposed $ref methods.
  // Can be called by using the "ref"-attribute on the component.

  /**
   * Returns the reference to this element.
   */
  private get ref(): any {
    return this.$refs[this.id || 'input'] as any;
  }

  protected focus(): void {
    this.ref.focus();
  }

  protected blur(): void {
    this.ref.blur();
  }
}
</script>
