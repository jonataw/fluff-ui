<template>
  <div class="title">
    <h1>{{ text }}</h1>
    <pre>&lt;{{ tag }}&gt;</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  @Prop() text: string;
  @Prop() tag: string;
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: flex-end;
  border-top: 1px solid rgb(204, 204, 204);
  margin-top: 16px;
  padding-top: 32px;
  margin-bottom: 16px;
  h1 {
    margin: 0;
  }
  pre {
    padding: 4px;
    margin: 0;
    font-size: 14px;
    margin-left: 16px;
    margin-bottom: 6px;
    display: inline-block;
    color: white;
    background-color: #5884ff;
    border-radius: 4px;
  }
}
</style>
