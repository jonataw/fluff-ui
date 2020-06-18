<template>
  <form class="form" :novalidate="!htmlValidate" @submit.prevent="onSubmit">
    <div v-if="showError && form.error" class="form--error" v-text="form.error" />

    <slot v-if="form" name="form" :form="form" />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import FLIcon from '@/components/icon/icon.vue';

@Component({
  name: 'FLForm',
  components: { FLIcon }
})
export default class extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string;
  @Prop({ type: Boolean, default: false }) readonly htmlValidate!: boolean;
  @Prop({ type: Boolean, default: false }) readonly showError?: boolean;

  private form: Form | null = null;

  public onSubmit(): void {
    if (!this.form) {
      return;
    }
    this.form.error = null;
    this.form.childErrors = [];
    this.form.loading = true;
    this.$emit('submit', (callback: any) => {
      if (this.form) {
        if (callback.error) {
          this.form.error = callback.error.type;
          this.form.childErrors = callback.error.fields;
        }
        this.form.loading = false;
      }
    });
  }

  public mounted(): void {
    this.form = this.generateForm();
  }

  private generateForm(): Form {
    return {
      loading: false,
      done: false,
      error: null,
      childErrors: []
    };
  }
}

type ChildError = {
  path: string;
  error: string | null;
  message?: string;
  value?: string;
};

/*type Error = {
  name: string;
  type: string;
  message: string | null;
  fields: Array<ChildError>;
  statusCode: number;
};*/

export interface Form {
  loading: boolean; // Form is in loading state, awaiting server response.
  done: boolean; // Form has been submitted without error.

  error: string | null;
  childErrors: Array<ChildError>;
}
</script>

<style lang="scss" scoped>
.form-error {
  display: flex;
  align-items: center;
  .icon {
    font-size: 20px;
  }
  > span {
    margin-left: 6px;
  }
}
</style>
