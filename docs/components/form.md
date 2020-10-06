# Form

The form component represents a document section containing interactive controls for submitting information.

<br />

Simple form using the `action="form.html"` and `method="get"` attributes.

<FLForm action="form.html" method="get">
  <template v-slot:form="{ form }">
    <FLInput v-model="name" label="Name" name="name" />
    <FLSelect
      v-model="color"
      label="Color"
      :options="[
        {
          text: 'Red', value: 'Red'
        },
        {
          text: 'Green', value: 'Green'
        },
        {
          text: 'Blue', value: 'Blue'
        }
      ]" 
      name="color" />
    <FLCheckbox id="agreement" v-model="agreement" name="agreement" label="I agree to everything!" />
    <FLButton type="submit" tag="input"></FLButton>
  </template>
</FLForm>

<SourceCode>
```HTML
<FLForm action="form.html" name="my-form" method="get">
  <template v-slot:form="{ form }">
    <FLInput v-model="name" label="Name" name="name" />
    ...
  </template>
</FLForm>
```
</SourceCode>

## Props

| Name               | Type                                                                           | Default | Description                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------- |
| action             | `string`                                                                       |         | The URL that processes the form submission.                                                                 |
| enctype            | `application/x-www-form-urlencoded`<br/>`multipart/form-data`<br/>`text/plain` |         | MIME type of form submission. Requires method to be `post`.                                                 |
| method             | `get | post`                                                                   |         | The HTTP method to submit the form with.                                                                    |
| name               | `string`                                                                       |         | Used as 'id' attribute. If this property is omitted, a generated uuid will be assigned to the form instead. |
| scroll-top-options | `{ error?: boolean, completed?: boolean }`<br/>`boolean`                       | `false` | Controls the scroll to top behaviour.                                                                       |
| show-error         | `boolean`                                                                      | `true`  | If true, the form error will be shown above the form.                                                       |
| target             | `string`                                                                       |         | Indicates where to display the response after submitting the form.                                          |

## Events

| Event  | Arguments                            | Description                         |
| ------ | ------------------------------------ | ----------------------------------- |
| submit | `callback` - Form response callback. | Emitted when the form is submitted. |

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  name = '';
  color = 'Red';
  agreement = false;

  onSubmit(event: any, callback: Function): void {
    console.log(event);
    console.log(callback);
    callback({});
  }
}
</script>
