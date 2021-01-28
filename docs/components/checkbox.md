# Checkbox

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

<br/>

<FLCheckbox name="one" id="one" v-model="one" label="Option 1" aria-label="Option 1" aria-labelledby="one" />
<FLCheckbox name="two" id="two" v-model="two" label="Option 2" />
<FLCheckbox name="three" id="three" v-model="three" label="Option 3" />

<SourceCode>
```HTML
<FLCheckbox name="one" id="one" v-model="one" label="Option 1" />
<FLCheckbox name="two" id="two" v-model="two" label="Option 2" />
<FLCheckbox name="three" id="three" v-model="three" label="Option 3" />
```
</SourceCode>

## Size

As most elements, the checkbox component allows a size prop. Fluff provides CSS rules for the small, default and large size options.

<br />

<FLCheckbox id="size_one" v-model="size_one" label="Small" size="small"/>
<FLCheckbox id="size_two" v-model="size_two" label="Default"/>
<FLCheckbox id="size_three" v-model="size_three" label="Large" size="large"/>

<SourceCode>
```HTML
<FLCheckbox label="Small" size="small"/>
<FLCheckbox label="Default"/>
<FLCheckbox label="Large" size="large"/>
```
</SourceCode>

## Disabled

<FLCheckbox id="disabled_one" v-model="disabled_one" label="Disabled unchecked" disabled />
<FLCheckbox id="disabled_two" v-model="disabled_two" label="Disabled checked" disabled />

## Props

<div class="prop_table">

| Name                       | Type                                                                    | Default          | Description                                    |
| -------------------------- | ----------------------------------------------------------------------- | ---------------- | ---------------------------------------------- |
| id<Required/>              | <T>string</T>                                                           |                  | `id` attribute. Required to allow interaction. |
| value / v-model<Required/> | <T>boolean</T>                                                          |                  | Value binding.                                 |
| aria-label                 | <T>string</T>                                                           |                  |                                                |
| aria-labelledby            | <T>string</T>                                                           |                  |                                                |
| disabled                   | <T>boolean</T>                                                          | <T>false</T>     | Disables the checkbox.                         |
| form                       | <T>Form</T>                                                             |                  | Form object from [FLForm](/components/form).   |
| label                      | <T>string</T>                                                           |                  |                                                |
| name                       | <T>string</T>                                                           |                  |                                                |
| size                       | <D>"small"</D> \| <D>"default"</D> \| <D>"default"</D> \| <T>string</T> | <D>"default"</D> | Size of the checkbox.                          |

</div>

## Events

<div class="event_table">

| Event  | Arguments                                                                                                                                                          | Description                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| change | <Arg name="value" type="boolean" description="The value the checkbox was changed to." /><Arg name="id" type="string" description="id property of the checkbox." /> | Emitted when the value is changed by the user. |

</div>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  one = true;
  two = false;
  three = true;

  size_one = false;
  size_two = false;
  size_three = false;

  disabled_one = false;
  disabled_two = true;
}
</script>
