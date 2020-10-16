<template>
  <form
    :ref="form.name"
    :id="form.name"
    class="form"
    v-bind="$fluff.autoBind(binds, $props)"
    v-on="$fluff.autoListen(listeners, $listeners)"
    @submit="onSubmit"
  >
    <div
      v-if="showError && form.error"
      class="form__error"
      v-text="form.error"
    />

    <slot v-if="form" name="form" :form="form" />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface Form {
  /**
   * Form identifier. If this prop is omitted on form creation,
   * a generated uuid will be used instead.
   */
  name: string;

  /**
   * Form is in loading state, awaiting server response.
   */
  loading: boolean;

  /**
   * Form has successfully been submitted.
   */
  completed: boolean;

  error: string | null;
  errors: ChildError[];
}

interface ChildError {
  field: string;
  error: string;
}

interface ScrollTopOptions {
  error: boolean;
  complete: boolean;
}

interface Callback {
  error?: {
    name: string;
    details: ChildError[];
  } | null;
}

@Component({
  name: 'FLForm'
})
export default class extends Vue {
  protected binds = ['name', 'method', 'action', 'enctype', 'target'];
  protected listeners = ['submit'];
  private form: Form | null = null;

  @Prop({ type: String, required: false }) name?: string;

  @Prop({ type: Boolean, default: false }) readonly scrollTopOptions!:
    | boolean
    | ScrollTopOptions;

  @Prop({ type: Boolean, default: true }) readonly showError?: boolean;

  @Prop({ type: String }) readonly method?: string;
  @Prop({ type: String }) readonly action?: string;
  @Prop({ type: String }) readonly enctype?: string;
  @Prop({ type: String }) readonly target?: string;

  public created(): void {
    this.form = this.createFormObject();
  }

  /**
   * Fired on submission of form.
   */
  private createFormObject(): Form {
    return {
      name: this.name || this.$fluff.uuid,
      loading: false,
      completed: false,
      error: null,
      errors: []
    };
  }

  /**
   * Fired on submission of form.
   */
  public onSubmit(event: Event): void {
    if (!this.form || this.form.loading) {
      return; // Prevent submission if the form is already being submitted.
    }

    if (!this.action) {
      event.preventDefault();
    }
    this.form.loading = true;

    // Remove main error and children errors.
    this.form.error = null;
    this.form.errors = [];

    this.$emit('submit', event, (callback: Callback) => {
      if (!this.form) {
        return;
      }
      if (callback.error) {
        this.form.error = callback.error.name; // <-- Allow change of "name" (config).
        this.form.errors = callback.error.details; // <-- Allow change of "details" (config).
      }
      this.scroll(callback);
      this.form.loading = false;
      this.form.completed = true;
    });
  }

  /**
   * Handles the scroll to top after submission if the configuration option is set.
   */
  private scroll(callback: Callback): void {
    const scroll = (): void => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, this.element.offsetTop);
      }
    };
    if (callback.error) {
      if (
        this.scrollTopOptions === true ||
        (typeof this.scrollTopOptions === 'object' &&
          this.scrollTopOptions.error)
      ) {
        scroll();
      }
    } else {
      if (
        this.scrollTopOptions === true ||
        (typeof this.scrollTopOptions === 'object' &&
          this.scrollTopOptions.complete)
      ) {
        scroll();
      }
    }
  }

  private get element(): HTMLElement {
    return document.getElementById((this.form as Form).name) as HTMLElement;
  }
}
</script>
