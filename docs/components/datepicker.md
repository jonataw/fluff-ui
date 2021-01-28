# Datepicker

A datepicker integrated into a standard input field. Uses [vue2-datepicker](https://www.npmjs.com/package/vue2-datepicker) under the hood.

<br />

<FLDatepicker v-model="date" label="Date" placeholder="Pick a date" format="MMM D YYYY" />

<SourceCode>
```HTML
<FLDatepicker
  v-model="date"
  label="Date"
  placeholder="Pick a date"
  format="MMM D YYYY"
/>
```
</SourceCode>

## Range

<FLDatepicker v-model="date" label="Range" :range="true" format="MMM D YYYY" />

<SourceCode>
```HTML
<FLDatepicker v-model="date" label="Range" :range="true" format="MMM D YYYY" />
```
</SourceCode>

## Props

<div class="props_table">

| Name                       | Type                                                                                                   | Default             | Description                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| value / v-model<Required/> | <T>string</T>                                                                                          |                     | Value binding.                                                                                                         |
| aria-label                 | <T>string</T>                                                                                          |                     |                                                                                                                        |
| aria-labelledby            | <T>string</T>                                                                                          |                     |                                                                                                                        |
| autofocus                  | <T>boleaan</T>                                                                                         | <T>false</T>        | Focuses the input field automatically on render.                                                                       |
| confirm                    | <T>boleaan</T>                                                                                         | <T>false</T>        | Require the user to confirm their date selection.                                                                      |
| default-panel              | <D>"year"</D> \| <D>"month"</D>                                                                        | <D>"month"</D>      | Determines the view that will be shown when opening the calendar.                                                      |
| description                | <T>boleaan</T>                                                                                         |                     | Alias for `description-above`.                                                                                         |
| description-above          | <T>string</T>                                                                                          |                     | Text to show above the input field.                                                                                    |
| description-below          | <T>string</T>                                                                                          |                     | Text to show below the input field.                                                                                    |
| disabled                   | <T>boleaan</T>                                                                                         | <T>false</T>        | Disables the input field.                                                                                              |
| eager                      | <T>boleaan</T>                                                                                         | <T>false</T>        | If <T>true</T>, updates the date value when selecting the year or month.                                               |
| error                      | <T>string</T>                                                                                          |                     | Error message for this field. Overrides form-inherited errors.                                                         |
| error-messages             | <T>Record\<string, string></T>                                                                         |                     | Custom error messages mapping for translations etc.                                                                    |
| form                       | <T>Form</T>                                                                                            |                     | Form object from [FLForm](/components/form).                                                                           |
| format                     | [Format](/datepicker.html#format)                                                                      | <D>"YYYY-MM-DD"</D> | The format of the date to be shown in the input field.                                                                 |
| id                         | <T>string</T>                                                                                          |                     | `id` attribute.                                                                                                        |
| label                      | <T>string</T>                                                                                          |                     | Input label text.                                                                                                      |
| multiple                   | <T>boleaan</T>                                                                                         | <T>false</T>        | Allow selecting multiple dates.                                                                                        |
| name                       | <T>string</T>                                                                                          |                     | `name` attribute.                                                                                                      |
| open                       | <T>boleaan</T> \| <T>null</T>                                                                          | <T>null</T>         | Force calendar to be open or closed. If <T>null</T>, the input focus/blur events controls this property automatically. |
| placeholder                | <T>string</T>                                                                                          |                     | `placeholder` attribute. If not specified, the label will be used as placeholder.                                      |
| range                      | <T>boleaan</T>                                                                                         | <T>false</T>        | Sets the calendar in range mode, allowing selection of a start and end date.                                           |
| range-separator            | <T>string</T>                                                                                          | <D>"—"</D>          | String to separate the two selected dates in range mode.                                                               |
| show-week-numbers          | <T>boleaan</T>                                                                                         | <T>false</T>        | Shows the week numbers in calendar.                                                                                    |
| size                       | <D>"small"</D> \| <D>"default"</D> \| <D>"large"</D> \| <T>string</T>                                  | <D>"default"</D>    | Size of the input field.                                                                                               |
| value-type                 | <D>"date"</D> \| <D>"timestamp"</D> \| <D>"format"</D> \| [Format](/components/datepicker.html#format) | <D>"date"</D>       | Data type of the binding value. If the value-type is `format`, it will inherit the format of the `format` property.    |

</div>

## Events

<div class="event_table">

| Event | Arguments                                                                                                                                                                                                          | Description                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| input | <Arg name="value" type="?" description="The value the input was changed to. Value will be of the type specified in value-type property." /><Arg name="id" type="string" description="id property of the input." /> | Emitted when the value is changed by the user. |

</div>

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
