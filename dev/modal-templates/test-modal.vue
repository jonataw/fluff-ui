<template>
  <div class="modal_template modal_template--test">
    <header></header>
    <h2 style="margin-top: 0;">Test modal</h2>

    <p style="margin-bottom: 24px;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    {{ data }}
    <footer>
      <Button :inline="true" @click="$modal.close()">I agree</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Button from '@/components/button/button.vue';

@Component({
  components: { Button }
})
export default class extends Vue {
  @Prop(Object) readonly data: any;
}
</script>

<style lang="scss">
.modal_template--test {
  padding: 32px;
}
</style>
