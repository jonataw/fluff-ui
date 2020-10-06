<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import Input from './input.vue';

@Component({
  name: 'FLInputFieldMixin',
  components: {}
})
export default class extends Mixins(Input) {
  @Prop({ type: String }) description?: string;
  @Prop({ type: String }) descriptionAbove?: string;
  @Prop({ type: String }) descriptionBelow?: string;
  @Prop({ type: Boolean }) autofocus?: boolean;
}
</script>
