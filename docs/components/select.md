# Select

The Select component represents an input control that provides a menu of options.

<br />

<FLSelect v-model="selected" :description-below="`You have selected option ${selected}.`" :options="[
  {
    text: 'Option 1', value: 1
  },
  {
    text: 'Option 2', value: 2
  },
  {
    text: 'Option 3', value: 3
  }
]"/>

<SourceCode>
```HTML
<FLSelect
  v-model="selected"
  :description-below="`You have selected option ${selected}.`"
  :options="[
  {
    text: 'Option 1', value: 1
  },
  {
    text: 'Option 2', value: 2
  },
  {
    text: 'Option 3', value: 3
  }
]"/>
```
</SourceCode>

## Placeholder

<FLSelect v-model="color" :description-below="`You have selected '${color}'.`" :options="[
  {
    text: 'Select one...', value: null, disabled: true
  },
  {
    text: 'Red', value: 'Red'
  },
  {
    text: 'Green', value: 'Green'
  },
  {
    text: 'Blue', value: 'Blue'
  }
]"/>

<SourceCode>
```HTML
<FLSelect 
  v-model="color"
  :description-below="`You have selected '${color}'.`"
  :options="[
  {
    text: 'Select one...', value: null, disabled: true
  },
  {
    text: 'Red', value: 'Red'
  },
  {
    text: 'Green', value: 'Green'
  },
  {
    text: 'Blue', value: 'Blue'
  }
]"/>
```
</SourceCode>

## Props

<div class="prop_table">

| Name                       | Type                                                                  | Default          | Description                                                    |
| -------------------------- | --------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------- |
| value / v-model<Required/> | <T>string</T> \| <T>number</T>                                        |                  | Value binding.                                                 |
| aria-label                 | <T>string</T>                                                         |                  |                                                                |
| aria-labelledby            | <T>string</T>                                                         |                  |                                                                |
| autofocus                  | <T>boleaan</T>                                                        |                  | Focuses the input field automatically on render.               |
| description                | <T>string</T>                                                         |                  | Alias for `description-above`.                                 |
| description-above          | <T>string</T>                                                         |                  | Text to show above the input field.                            |
| description-below          | <T>string</T>                                                         |                  | Text to show below the input field.                            |
| disabled                   | <T>boleaan</T>                                                        | <T>false</T>     | Disables the input field.                                      |
| error                      | <T>string</T>                                                         |                  | Error message for this field. Overrides form-inherited errors. |
| error-messages             | <T>Record\<string, string></T>                                        |                  | Custom error messages mapping for translations etc.            |
| form                       | <T>Form</T>                                                           |                  | Form object from [FLForm](/components/form).                   |
| id                         | <T>string</T>                                                         |                  | `id` attribute.                                                |
| label                      | <T>string</T>                                                         |                  | Label text.                                                    |
| name                       | <T>string</T>                                                         |                  | `name` attribute.                                              |
| options                    | <T>Array<{ text: string; value: any; disabled: boolean }></T>         |                  | Options of the select element.                                 |
| size                       | <D>"small"</D> \| <D>"default"</D> \| <D>"large"</D> \| <T>string</T> | <D>"default"</D> | Size of the input field.                                       |

</div>

## Events

<div class="event_table">

| Event | Arguments                                                                                                                                                             | Description                                    |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| input | <Arg name="value" type="string \| number" description="The value the input was changed to." /><Arg name="id" type="string" description="id property of the input." /> | Emitted when the value is changed by the user. |

</div>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  selected = 1;
  color = null;
}
</script>
