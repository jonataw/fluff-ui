# Timepicker

A timepicker integrated into a standard input field. Uses [vue2-datepicker](https://www.npmjs.com/package/vue2-datepicker) under the hood.

<br />

<FLTimePicker v-model="date" label="Time" placeholder="Pick a time" format="HH:mm" :minute-step="5" />

<SourceCode>
```HTML
<FLTimePicker
  v-model="date"
  label="Time"
  placeholder="Pick a time"
  format="HH:mm" 
  :minute-step="5" 
/>
```
</SourceCode>

## Props

| Name              | Type                                                             | Default   | Description                                                                                                                      |
| ----------------- | ---------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| aria-label        | `string`                                                         |           | 'aria-label' attribute.                                                                                                          |
| aria-labelledby   | `string`                                                         |           | 'aria-labelledby' attribute. The ID of the element that provides a label.                                                        |
| autofocus         | `boolean`                                                        | `false`   | Focuses the input field automatically on render.                                                                                 |
| confirm           | `boolean`                                                        | `false`   | Require the user to confirm their time selection.                                                                                |
| description       | `string`                                                         |           | Alias for `description-above`.                                                                                                   |
| description-above | `string`                                                         |           | Text to show above the input field.                                                                                              |
| description-below | `string`                                                         |           | Text to show below the input field.                                                                                              |
| disabled          | `boolean`                                                        | `false`   | Disables the input field and disallows interaction.                                                                              |
| error             | `string`                                                         |           | Error message for this field. Overrides form-inherited errors.                                                                   |
| error-messages    | `Record<string, string>`                                         |           | Custom error messages mapping for translations etc.                                                                              |
| form              | `Form`                                                           |           | Form object from [FLForm](/components/form) `v-slot:form="{ form }"`                                                             |
| format            | [Format](/datepicker.html#format)                                | `HH:mm`   | The format of the time to be shown in the input field.                                                                           |
| hour-options      | `number[]`                                                       |           | Specifies which hours are selectable.                                                                                            |
| id                | `string`                                                         |           | 'id' attribute.                                                                                                                  |
| label             | `string`                                                         |           | Input label text.                                                                                                                |
| minute-options    | `number[]`                                                       |           | Specifies which minutes are selectable.                                                                                          |
| name              | `string`                                                         |           | 'name' attribute.                                                                                                                |
| open              | `boolean | null`                                                 | `null`    | Force calendar to be open or closed. If `null` or not defined, the input focus/blur events controls this property automatically. |
| placeholder       | `string`                                                         |           | 'placeholder' attribute. If not specified, the label will be used as placeholder.                                                |
| second-options    | `number[]`                                                       |           | Specifies which seconds are selectable.                                                                                          |
| show-hours        | `boolean`                                                        | `true`    | Show the hours column.                                                                                                           |
| show-minutes      | `boolean`                                                        | `true`    | Show the minutes column.                                                                                                         |
| show-seconds      | `boolean`                                                        | `false`    | Show the seconds column.                                                                                                         |
| size              | `small | default | large | string`                               | `default` | Size of the input field.                                                                                                         |
| time-options      | [TimeOptions](#time-options)                                     |           | Specifies a set range of selectable times.                                                                                       |
| use12h            | `boolean`                                                        | `false`   | Use 12 hour clock.                                                                                                               |
| value / v-model   | `small | default | large | string`                               |           | Value binding.                                                                                                                   |
| value-type        | `date | timestamp | format` \| [Format](/datepicker.html#format) | `date`    | Data type of the binding value. If the value-type is `format`, it will inherit the format of the `format` property.              |

## Events

| Event | Arguments                                                                              | Description                                    |
| ----- | -------------------------------------------------------------------------------------- | ---------------------------------------------- |
| input | `value` - The value the input was changed to.<br/>`id` - The id property of the input. | Emitted when the value is changed by the user. |

## Time Options

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
