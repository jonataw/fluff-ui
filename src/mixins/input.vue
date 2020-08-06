<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Form } from '@/components/form/form.vue';

@Component({
  name: 'FLInputMixin',
  components: {}
})
export default class extends Vue {
  /* Main */
  @Prop() id?: string;
  @Prop() form?: Form;
  @Prop({ required: true }) readonly value!: any;
  locError: string | null = null;

  /* Visuals */
  @Prop({ type: String, default: 'default' }) readonly size?:
    | 'default'
    | 'small'
    | 'large';
  @Prop() label?: string;
  @Prop() error?: any;
  @Prop() errors?: { [k: string]: string };

  /* Functional */
  @Prop() disabled?: boolean;
  @Prop() readonly?: boolean;

  protected onInput(value: any) {
    if (this.disabled) {
      /* Do not allow input if input should be disabled */
      return;
    }

    this.$emit('input', value, this.id);
  }

  protected onBlur(): void {
    this.$emit('blur');
  }

  public get parsedError() {
    let error: string | null = null;
    if (this.error) {
      error = this.error;
    }
    if (this.locError) {
      error = this.locError;
    } else if (this.form && this.form.childErrors) {
      const e = this.form.childErrors.find(
        (error: any) => error.path === this.id
      );
      if (e) {
        error = e.error;
      }
    }
    if (error) {
      if (this.errors && this.errors[error]) {
        return this.errors[error];
      } else {
        return error;
      }
    }
    return null;
  }
}
</script>
