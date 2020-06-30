<template>
  <div @click="$modal.close()">
    Test modal
    {{ data }}
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
