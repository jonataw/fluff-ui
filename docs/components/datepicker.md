# Datepicker

A datepicker integrated into a standard input field. Uses [vue2-datepicker](https://www.npmjs.com/package/vue2-datepicker) under the hood.

<br />

<FLDatePicker v-model="date" label="Date" placeholder="Pick a date" format="MMM D YYYY" />

<SourceCode>
```HTML
<FLDatePicker
  v-model="date"
  label="Date"
  placeholder="Pick a date"
  format="MMM D YYYY"
/>
```
</SourceCode>

## Range

<FLDatePicker v-model="date" label="Range" :range="true" format="MMM D YYYY" />

<SourceCode>
```HTML
<FLDatePicker v-model="date" label="Range" :range="true" format="MMM D YYYY" />
```
</SourceCode>

## Props

| Name              | Type                                                             | Default      | Description                                                                                                                      |
| ----------------- | ---------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| aria-label        | `string`                                                         |              | 'aria-label' attribute.                                                                                                          |
| aria-labelledby   | `string`                                                         |              | 'aria-labelledby' attribute. The ID of the element that provides a label.                                                        |
| autofocus         | `boolean`                                                        | `false`      | Focuses the input field automatically on render.                                                                                 |
| confirm           | `boolean`                                                        | `false`      | Require the user to confirm their date selection.                                                                                |
| default-panel     | `year | 'month`                                                  | `month`      | Determines the view that will be shown when opening the calendar.                                                                |
| description       | `string`                                                         |              | Alias for `description-above`.                                                                                                   |
| description-above | `string`                                                         |              | Text to show above the input field.                                                                                              |
| description-below | `string`                                                         |              | Text to show below the input field.                                                                                              |
| disabled          | `boolean`                                                        | `false`      | Disables the input field and disallows interaction.                                                                              |
| eager             | `boolean`                                                        | `false`      | If `true`, updates the date value when selecting the year or month.                                                              |
| error             | `string`                                                         |              | Error message for this field. Overrides form-inherited errors.                                                                   |
| error-messages    | `Record<string, string>`                                         |              | Custom error messages mapping for translations etc.                                                                              |
| form              | `Form`                                                           |              | Form object from [FLForm](/components/form) `v-slot:form="{ form }"`                                                             |
| format            | [Format](/datepicker.html#format)                                | `YYYY-MM-DD` | The format of the date to be shown in the input field.                                                                           |
| id                | `string`                                                         |              | 'id' attribute.                                                                                                                  |
| label             | `string`                                                         |              | Input label text.                                                                                                                |
| multiple          | `boolean`                                                        | `false`      | Allow selecting multiple dates.                                                                                                  |
| name              | `string`                                                         |              | 'name' attribute.                                                                                                                |
| open              | `boolean | null`                                                 | `null`       | Force calendar to be open or closed. If `null` or not defined, the input focus/blur events controls this property automatically. |
| placeholder       | `string`                                                         |              | 'placeholder' attribute. If not specified, the label will be used as placeholder.                                                |
| range             | `boolean`                                                        | `false`      | Sets the calendar in range mode, allowing selection of a start and end date.                                                     |
| range-separator   | `string`                                                         | `—`          | String to separate the two selected dates in range mode.                                                                         |
| show-week-numbers | `boolean`                                                        | `false`      | Shows the week numbers in calendar.                                                                                              |
| size              | `small | default | large | string`                               | `default`    | Size of the input field.                                                                                                         |
| value / v-model   | `small | default | large | string`                               |              | Value binding.                                                                                                                   |
| value-type        | `date | timestamp | format` \| [Format](/datepicker.html#format) | `date`       | Data type of the binding value. If the value-type is `format`, it will inherit the format of the `format` property.              |

## Events

| Event | Arguments                                                                              | Description                                    |
| ----- | -------------------------------------------------------------------------------------- | ---------------------------------------------- |
| input | `value` - The value the input was changed to.<br/>`id` - The id property of the input. | Emitted when the value is changed by the user. |

## Format

| Description                | Token | Output                                 |
| -------------------------- | ----- | -------------------------------------- |
| Year                       | YY    | 70 71 ... 10 11                        |
|                            | YYYY  | 1970 1971 ... 2010 2011                |
|                            | Y     | -1000 ...20 ... 1970 ... 9999 +10000   |
| Month                      | M     | 1 2 ... 11 12                          |
|                            | MM    | 01 02 ... 11 12                        |
|                            | MMM   | Jan Feb ... Nov Dec                    |
|                            | MMMM  | January February ... November December |
| Day of Month               | D     | 1 2 ... 30 31                          |
|                            | DD    | 01 02 ... 30 31                        |
| Day of Week                | d     | 0 1 ... 5 6                            |
|                            | dd    | Su Mo ... Fr Sa                        |
|                            | ddd   | Sun Mon ... Fri Sat                    |
|                            | dddd  | Sunday Monday ... Friday Saturday      |
| AM/PM                      | A     | AM PM                                  |
|                            | a     | am pm                                  |
| Hour                       | H     | 0 1 ... 22 23                          |
|                            | HH    | 00 01 ... 22 23                        |
|                            | h     | 1 2 ... 12                             |
|                            | hh    | 01 02 ... 12                           |
| Minute                     | m     | 0 1 ... 58 59                          |
|                            | mm    | 00 01 ... 58 59                        |
| Second                     | s     | 0 1 ... 58 59                          |
|                            | ss    | 00 01 ... 58 59                        |
| Fractional Second          | S     | 0 1 ... 8 9                            |
|                            | SS    | 00 01 ... 98 99                        |
|                            | SSS   | 000 001 ... 998 999                    |
| Time Zone                  | Z     | -07:00 -06:00 ... +06:00 +07:00        |
|                            | ZZ    | -0700 -0600 ... +0600 +0700            |
| Week of Year               | w     | 1 2 ... 52 53                          |
|                            | ww    | 01 02 ... 52 53                        |
| Unix Timestamp             | X     | 1360013296                             |
| Unix Millisecond Timestamp | x     | 1360013296123                          |

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  date = null;
}
</script>
