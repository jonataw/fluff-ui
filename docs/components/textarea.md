# Textarea

The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

<br />

<FLTextarea v-model="feedback" label="Feedback?" />

<SourceCode>
```HTML
<FLTextarea v-model="feedback" label="Feedback?" />
```
</SourceCode>

## Props

| Name              | Type                               | Default   | Description                                                                                   |
| ----------------- | ---------------------------------- | --------- | --------------------------------------------------------------------------------------------- |
| aria-label        | `string`                           |           | 'aria-label' attribute.                                                                       |
| aria-labelledby   | `string`                           |           | 'aria-labelledby' attribute. The ID of the element that provides a label.                     |
| autocomplete      | `boolean`                          |           | Sets the 'autocomplete' attribute.                                                            |
| autofocus         | `boolean`                          |           | Focuses the input field automatically on render.                                              |
| description       | `string`                           |           | Alias for `description-above`.                                                                 |
| description-above | `string`                           |           | Text to show above the input field.                                                           |
| description-below | `string`                           |           | Text to show below the input field.                                                           |
| disabled          | `boolean`                          | `false`   | Disables the input field and disallows interaction.                                           |
| error             | `string`                           |           | Error message for this field. Overrides form-inherited errors.                                |
| error-messages    | `Record<string, string>`           |           | Custom error messages mapping for translations etc.                                           |
| form              | `Form`                             |           | Form object from [FLForm](/components/form) `v-slot:form="{ form }"`                          |
| id                | `string`                           |           | 'id' attribute.                                                                               |
| label             | `string`                           |           | Input label text.                                                                             |
| name              | `string`                           |           | 'name' attribute.                                                                             |
| placeholder       | `string`                           |           | 'placeholder' attribute. If not specified, the label will be used as placeholder.             |
| size              | `small | default | large | string` | `default` | Size of the input field.                                                                      |
| value / v-model   | `small | default | large | string` | `default` | Value binding.                                                                                |

## Events

| Event         | Arguments                                                                              | Description                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| input         | `value` - The value the input was changed to.<br/>`id` - The id property of the input. | Emitted when the value is changed by the user.                                                                           |

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  feedback = '';
}
</script>
