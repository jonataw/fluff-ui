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

<div class="props_table">

| Name                       | Type                                                                    | Default          | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| value / v-model<Required/> | <T>string</T>                                                           |                  | Value binding.                                                                            |
| aria-label                 | <T>string</T>                                                           |                  |                                                                                           |
| aria-labelledby            | <T>string</T>                                                           |                  |                                                                                           |
| autocomplete               | <T>boolean</T>                                                          |                  |                                                                                           |
| autofocus                  | <T>boolean</T>                                                          |                  | Focuses the input field automatically on render.                                          |
| description                | <T>string</T>                                                           |                  | Alias for `description-above`.                                                            |
| description-above          | <T>string</T>                                                           |                  | Text to show above the input field.                                                       |
| description-below          | <T>string</T>                                                           |                  | Text to show below the input field.                                                       |
| disabled                   | <T>boolean</T>                                                          | <T>false</T>     | Disables the input field.                                                                 |
| error                      | <T>string</T>                                                           |                  | Error message for this field. Overrides form-inherited errors.                            |
| error-messages             | <T>Record\<string, string></T>                                          |                  | Custom error messages mapping for translations.                                           |
| form                       | <T>Form</T>                                                             |                  | Form object from [FLForm](/components/form).                                              |
| id                         | <T>string</T>                                                           |                  | `id` attribute.                                                                           |
| label                      | <T>string</T>                                                           |                  | Label text.                                                                               |
| name                       | <T>string</T>                                                           |                  | `name` attribute.                                                                         |
| placeholder                | <T>string</T>                                                           |                  | `placeholder` attribute. If not specified, the `label` value will be used as placeholder. |
| prefix                     | <T>string</T>                                                           |                  | Prefix text.                                                                              |
| size                       | <D>"small"</D> \| <D>"default"</D> \| <D>"large"</D> \| <T>string</T>   | <D>"default"</D> | Size of the input field.                                                                  |
| suffix                     | <T>string</T>                                                           |                  | Suffix text.                                                                              |
| type                       | <D>"text"</D> \| <D>"email"</D> \| <D>"number"</D> \| <D>"password"</D> | <D>"text"</D>    | `type` attribute.                                                                         |

</div>

## Events

<div class="event_table">

| Event | Arguments                                                                                                                                                   | Description                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| input | <Arg name="value" type="string" description="The value the input was changed to." /><Arg name="id" type="string" description="id property of the input." /> | Emitted when the value is changed by the user. |

</div>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  feedback = '';
}
</script>
