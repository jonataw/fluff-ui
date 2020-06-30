<template>
  <div class="modal_template modal_template--test">
    <header></header>
    Test modal
    {{ data }}
    <footer>
      Great!
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
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
