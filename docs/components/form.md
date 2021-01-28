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

<div class="prop_table">

| Name               | Type                                                                                              | Default      | Description                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| action             | <D>"string"</D>                                                                                   |              | The URL that processes the form submission.                                                                 |
| enctype            | <D>"application/x-www-form-urlencoded"</D> \| <D>"multipart/form-data"</D> \| <D>"text/plain"</D> |              | MIME type of form submission. Requires method to be <D>"post"</D>.                                          |
| method             | <D>"get"</D> \| <D>"post"</D>                                                                     |              | The HTTP method to submit the form with.                                                                    |
| name               | <D>"string"</D>                                                                                   |              | Used as 'id' attribute. If this property is omitted, a generated uuid will be assigned to the form instead. |
| scroll-top-options | <T>ScrollTopOptions</T> \| <T>boolean</T>                                                         | <T>false</T> | Controls the scroll to top behaviour.                                                                       |
| show-error         | <T>boolean</T>                                                                                    | <T>true</T>  | If true, the form error will be shown above the form.                                                       |
| target             | <D>"string"</D>                                                                                   |              | Indicates where to display the response after submitting the form.                                          |

</div>

## Events

<div class="event_table">

| Event  | Arguments                                                                                                                                 | Description                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| submit | <Arg description="Form submit event." name="event" type="Event" /><Arg description="Callback trigger." name="callback" type="Function" /> | Emitted when the form is submitted. |

</div>

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
