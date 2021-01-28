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

<div class="prop_table">

| Name                       | Type                                                                    | Default          | Description                                                                                   |
| -------------------------- | ----------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| value / v-model<Required/> | <T>string</T> \| <T>number</T>                                          |                  | Value binding.                                                                                |
| aria-label                 | <T>string</T>                                                           |                  |                                                                                               |
| aria-labelledby            | <T>string</T>                                                           |                  |                                                                                               |
| autocomplete               | <T>boolean</T>                                                          |                  |                                                                                               |
| autofocus                  | <T>boolean</T>                                                          |                  | Focuses the input field automatically on render.                                              |
| delayed                    | <T>number</T>                                                           |                  | Waits for this many milliseconds after input ended before emitting the `input-delayed` event. |
| description                | <T>string</T>                                                           |                  | Alias for `description-above`.                                                                |
| description-above          | <T>string</T>                                                           |                  | Text to show above the input field.                                                           |
| description-below          | <T>string</T>                                                           |                  | Text to show below the input field.                                                           |
| disabled                   | <T>boolean</T>                                                          | <T>false</T>     | Disables the input field.                                                                     |
| error                      | <T>string</T>                                                           |                  | Error message for this field. Overrides form-inherited errors.                                |
| error-messages             | <T>Record\<string, string></T>                                          |                  | Custom error messages mapping for translations.                                               |
| form                       | <T>Form</T>                                                             |                  | Form object from [FLForm](/components/form).                                                  |
| id                         | <T>string</T>                                                           |                  | `id` attribute.                                                                               |
| inline                     | <T>boolean</T>                                                          | <T>false</T>     | Sets the input style to inline.                                                               |
| label                      | <T>string</T>                                                           |                  | Label text.                                                                                   |
| name                       | <T>string</T>                                                           |                  | `name` attribute.                                                                             |
| placeholder                | <T>string</T>                                                           |                  | `placeholder` attribute. If not specified, the `label` value will be used as placeholder.     |
| prefix                     | <T>string</T>                                                           |                  | Prefix text.                                                                                  |
| size                       | <D>"small"</D> \| <D>"default"</D> \| <D>"large"</D> \| <T>string</T>   | <D>"default"</D> | Size of the input field.                                                                      |
| suffix                     | <T>string</T>                                                           |                  | Suffix text.                                                                                  |
| type                       | <D>"text"</D> \| <D>"email"</D> \| <D>"number"</D> \| <D>"password"</D> | <D>"text"</D>    | `type` attribute.                                                                             |

</div>

## Events

<div class="event_table">

| Event         | Arguments                                                                                                                                                             | Description                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| input         | <Arg name="value" type="string \| number" description="The value the input was changed to." /><Arg name="id" type="string" description="id property of the input." /> | Emitted when the value is changed by the user.                                                                           |
| input-delayed | <Arg name="value" type="string \| number" description="The value the input was changed to." /><Arg name="id" type="string" description="id property of the input." /> | Emitted when the value has changed and there has been no futher inputs since `delayed`. Requires the `delayed` property. |

</div>

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
