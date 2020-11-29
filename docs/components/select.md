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

| Name              | Type                                  | Default   | Description                                                               |
| ----------------- | ------------------------------------- | --------- | ------------------------------------------------------------------------- |
| aria-label        | `string`                              |           | 'aria-label' attribute.                                                   |
| aria-labelledby   | `string`                              |           | 'aria-labelledby' attribute. The ID of the element that provides a label. |
| autofocus         | `boolean`                             |           | Focuses the input field automatically on render.                          |
| description       | `string`                              |           | Alias for `description-above`.                                            |
| description-above | `string`                              |           | Text to show above the input field.                                       |
| description-below | `string`                              |           | Text to show below the input field.                                       |
| disabled          | `boolean`                             | `false`   | Disables the input field and disallows interaction.                       |
| error             | `string`                              |           | Error message for this field. Overrides form-inherited errors.            |
| error-messages    | `Record<string, string>`              |           | Custom error messages mapping for translations etc.                       |
| form              | `Form`                                |           | Form object from [FLForm](/components/form) `v-slot:form="{ form }"`      |
| id                | `string`                              |           | 'id' attribute.                                                           |
| label             | `string`                              |           | Input label text.                                                         |
| name              | `string`                              |           | 'name' attribute.                                                         |
| options           | `Array<{ text: string; value: any }>` |           | Options of the select element.                                            |
| size              | `small | default | large | string`    | `default` | Size of the input field.                                                  |
| value / v-model   | `small | default | large | string`    | `default` | Value binding.                                                            |

## Events

| Event | Arguments                                                                              | Description                                    |
| ----- | -------------------------------------------------------------------------------------- | ---------------------------------------------- |
| input | `value` - The value the input was changed to.<br/>`id` - The id property of the input. | Emitted when the value is changed by the user. |

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  selected = 1;
  color = null;
}
</script>
