# Timepicker

A timepicker integrated into a standard input field. Uses [vue2-datepicker](https://www.npmjs.com/package/vue2-datepicker) under the hood.

<br />

<FLTimepicker v-model="date" label="Time" placeholder="Pick a time" format="HH:mm" :minute-step="5" />

Value: {{date}}

<SourceCode>
```HTML
<FLTimepicker
  v-model="date"
  label="Time"
  placeholder="Pick a time"
  format="HH:mm" 
  :minute-step="5" 
/>
```
</SourceCode>

## Props

<div class="props_table">

| Name                       | Type                                                                                                   | Default          | Description                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| value / v-model<Required/> | <T>string</T>                                                                                          |                  | Value binding.                                                                                                         |
| aria-label                 | <T>string</T>                                                                                          |                  |                                                                                                                        |
| aria-labelledby            | <T>string</T>                                                                                          |                  |                                                                                                                        |
| autofocus                  | <T>boleaan</T>                                                                                         | <T>false</T>     | Focuses the input field automatically on render.                                                                       |
| confirm                    | <T>boleaan</T>                                                                                         | <T>false</T>     | Require the user to confirm their time selection.                                                                      |
| description                | <T>string</T>                                                                                          |                  | Alias for `description-above`.                                                                                         |
| description-above          | <T>string</T>                                                                                          |                  | Text to show above the input field.                                                                                    |
| description-below          | <T>string</T>                                                                                          |                  | Text to show below the input field.                                                                                    |
| disabled                   | <T>boleaan</T>                                                                                         | <T>false</T>     | Disables the input field.                                                                                              |
| error                      | <T>string</T>                                                                                          |                  | Error message for this field. Overrides form-inherited errors.                                                         |
| error-messages             | <T>Record\<string, string></T>                                                                         |                  | Custom error messages mapping for translations etc.                                                                    |
| form                       | <T>Form</T>                                                                                            |                  | Form object from [FLForm](/components/form).                                                                          |
| format                     | [Format](/datepicker.html#format)                                                                      | <D>"HH:mm"</D>   | The format of the time to be shown in the input field.                                                                 |
| hour-options               | <T>number[]</T>                                                                                        |                  | Specifies which hours are selectable.                                                                                  |
| id                         | <T>string</T>                                                                                          |                  | `id` attribute.                                                                                                        |
| label                      | <T>string</T>                                                                                          |                  | Input label text.                                                                                                      |
| minute-options             | <T>number[]</T>                                                                                        |                  | Specifies which minutes are selectable.                                                                                |
| name                       | <T>string</T>                                                                                          |                  | `name` attribute.                                                                                                      |
| open                       | <T>boolean</T> \| <T>null</T>                                                                          | <T>null</T>      | Force calendar to be open or closed. If <T>null</T>, the input focus/blur events controls this property automatically. |
| placeholder                | <T>string</T>                                                                                          |                  | `placeholder` attribute. If not specified, the label will be used as placeholder.                                      |
| second-options             | <T>number[]</T>                                                                                        |                  | Specifies which seconds are selectable.                                                                                |
| show-hours                 | <T>boleaan</T>                                                                                         | <T>true</T>      | Show the hours column.                                                                                                 |
| show-minutes               | <T>boleaan</T>                                                                                         | <T>true</T>      | Show the minutes column.                                                                                               |
| show-seconds               | <T>boleaan</T>                                                                                         | <T>false</T>     | Show the seconds column.                                                                                               |
| size                       | <D>"small"</D> \| <D>"default"</D> \| <D>"large"</D> \| <T>string</T>                                  | <D>"default"</D> | Size of the input field.                                                                                               |
| time-options               | [TimeOptions](#timeoptions)                                                                            |                  | Specifies a set range of selectable times.                                                                             |
| use12h                     | <T>boleaan</T>                                                                                         | <T>false</T>     | Use 12 hour clock.                                                                                                     |
| value-type                 | <D>"date"</D> \| <D>"timestamp"</D> \| <D>"format"</D> \| [Format](/components/datepicker.html#format) | <D>"date"</D>    | Data type of the binding value. If the value-type is `format`, it will inherit the format of the `format` property.    |

</div>

## Events

<div class="event_table">

| Event | Arguments                                                                                                                                                                                                          | Description                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| input | <Arg name="value" type="?" description="The value the input was changed to. Value will be of the type specified in value-type property." /><Arg name="id" type="string" description="id property of the input." /> | Emitted when the value is changed by the user. |

</div>

## TimeOptions

The TimeOptions object specifies the following keys: `start`, `end`, `step` and `format`.

<SourceCode>
```JS
{ start: '00:00', step:'00:30', end: '23:30', format: 'HH:mm' }
```
</SourceCode>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  date = null;
}
</script>
