# Input

The Input element is used to create interactive controls for web-based forms in order to accept data from the user.

<br />

<FLInput label="Write something interesting!" placeholder="Hmm..." />

<SourceCode>
```HTML
<FLInput 
  label="Write something interesting!"
  placeholder="Hmm..."
/>
```
</SourceCode>

<br />
<br />

<FLInput label="Password" placeholder="Password" type="password" description-below="Your password should be over 8 characters." inline />

<SourceCode>
```HTML
<FLInput
  type="password"
  label="Password"
  placeholder="Password"
  description-below="Your password should be over 8 characters."
  inline
/>
```
</SourceCode>

## Size

<div style="display: flex; column-gap: 16px;">
  <FLInput size="small" label="Small" />
  <FLInput label="Default" />
  <FLInput size="large" label="Large" />
</div>

## Delayed

Use the `delayed` prop to delay the `input-delayed` event until the user stops typing. A `delayed` value of `1000` will wait for one second after the user stops typing before it emits the `input-delayed` event.

<FLInput v-model="actualValue" :description-below="`Actual value: ${actualValue} | Delayed value (300ms): ${delayedValue}`" :delayed="300" @input-delayed="v => delayedValue = v" />

<SourceCode>
```HTML
<FLInput
  v-model="actualValue"
  :description-below="`Actual value: ${actualValue} | Delayed value (300ms): ${delayedValue}`"
  :delayed="300"
  @input-delayed="v => delayedValue = v"
/>
```
</SourceCode>

## Error

<FLInput label="Password" placeholder="Password" type="password" error="Please enter a password." />

<SourceCode>
```HTML
<FLInput
  label="Password"
  placeholder="Password"
  type="password"
  error="Please enter a password."
/>
```
</SourceCode>

## Prefix / Suffix

<FLInput label="Value" prefix="$" inline />
<FLInput value="Fluff" suffix="UI" inline />

<SourceCode>
```HTML
<FLInput label="Value" prefix="$" inline />
<FLInput value="Fluff" suffix="UI" inline />
```
</SourceCode>

## Props

| Name              | Type                               | Default   | Description                                                                                   |
| ----------------- | ---------------------------------- | --------- | --------------------------------------------------------------------------------------------- |
| aria-label        | `string`                           |           | 'aria-label' attribute.                                                                       |
| aria-labelledby   | `string`                           |           | 'aria-labelledby' attribute. The ID of the element that provides a label.                     |
| autocomplete      | `boolean`                          |           | Sets the 'autocomplete' attribute.                                                            |
| autofocus         | `boolean`                          |           | Focuses the input field automatically on render.                                              |
| delayed           | `number`                           |           | Waits for this many milliseconds after input ended before emitting the `input-delayed` event. |
| description       | `string`                           |           | Alias for `description-above`.                                                                |
| description-above | `string`                           |           | Text to show above the input field.                                                           |
| description-below | `string`                           |           | Text to show below the input field.                                                           |
| disabled          | `boolean`                          | `false`   | Disables the input field and disallows interaction.                                           |
| error             | `string`                           |           | Error message for this field. Overrides form-inherited errors.                                |
| error-messages    | `Record<string, string>`           |           | Custom error messages mapping for translations etc.                                           |
| form              | `Form`                             |           | Form object from [FLForm](/components/form) `v-slot:form="{ form }"`                          |
| id                | `string`                           |           | 'id' attribute.                                                                               |
| inline            | `boolean`                          | `false`   | Sets the input to inline instead of spanning the whole parent container width.                |
| label             | `string`                           |           | Input label text.                                                                             |
| name              | `string`                           |           | 'name' attribute.                                                                             |
| placeholder       | `string`                           |           | 'placeholder' attribute. If not specified, the label will be used as placeholder.             |
| prefix            | `string`                           |           | Prefix text.                                                                                  |
| size              | `small | default | large | string` | `default` | Size of the input field.                                                                      |
| suffix            | `string`                           |           | Suffix text.                                                                                  |
| type              | `text | email | number | password` | `text`    | 'type' attribute.                                                                             |
| value / v-model   | `small | default | large | string` | `default` | Value binding.                                                                                |

## Events

| Event         | Arguments                                                                              | Description                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| input         | `value` - The value the input was changed to.<br/>`id` - The id property of the input. | Emitted when the value is changed by the user.                                                                           |
| input-delayed | `value` - The value the input was changed to.<br/>`id` - The id property of the input. | Emitted when the value has changed and there has been no futher inputs since `delayed`. Requires the `delayed` property. |

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  one = 'gfdgdgfdgd';
  two = '';
  three = '';

  actualValue = '';
  delayedValue = '';
}
</script>
