# Modal

<FLModal />

<FLButton @click="$fluff.modal.open({ component: modal })">Open Modal</FLButton>

## Props

W.I.P

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalTest from '../help-components/modal.vue';

@Component({})
export default class extends Vue {
  private modal = ModalTest;
}
</script>
