# Button

The button element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

<br />

<FLButton>Button</FLButton>

<SourceCode>
```HTML
<FLButton>Button</FLButton>
```
</SourceCode>

## Size

As most elements, the button component allows a size prop. Fluff provides CSS rules for the small, default and large size options.

<br />

<div style="display: flex; column-gap: 16px;">
  <FLButton size="small" inline>Small</FLButton>
  <FLButton inline>Default</FLButton>
  <FLButton size="large" inline>Large</FLButton>
</div>

<SourceCode>
```HTML
<FLButton size="small" inline>Small</FLButton>
<FLButton inline>Default</FLButton>
<FLButton size="large" inline>Large</FLButton>
```
</SourceCode>

## Inline

By default the button component spans the whole width of the container. Use the inline prop to keep it inline.

<br />

<FLButton inline>Inline</FLButton>

<SourceCode>
```HTML
<FLButton inline>Inline</FLButton>
```
</SourceCode>

## Disabled

<FLButton disabled>Disabled</FLButton>

<SourceCode>
```HTML
<FLButton disabled>Disabled</FLButton>
```
</SourceCode>

## Tags

<div style="display: flex; column-gap: 16px;">
  <FLButton inline tag="button">button</FLButton>
  <FLButton inline tag="a" href="https://github.com/jonataw/fluff-ui" target="_blank">a</FLButton>
  <FLButton inline tag="input" value="input"/>
  <FLButton inline tag="router-link" to="/components/bulletin">router-link</FLButton>
</div>

Also works with `nuxt-link`.

<SourceCode>
```HTML
<FLButton inline tag="button">button</FLButton>
<FLButton inline tag="a" href="https://github.com/jonataw/fluff-ui" target="_blank">a</FLButton>
<FLButton inline tag="input" value="input"/>
<FLButton inline tag="router-link" to="/components/bulletin">router-link</FLButton>
```
</SourceCode>

## Loading

<FLButton loading inline>I'm loading...</FLButton>
<br/>
<FLButton :loading="loading" @click="loading = !loading">Click me to start loading!</FLButton>

<SourceCode>
```HTML
<FLButton loading>I'm loading...</FLButton>
 
<FLButton :loading="loading" @click="loading = !loading">
  Click me to start loading!
</FLButton>
```
</SourceCode>

## Props

<div class="prop_table">

| Name       | Type                                                                                          | Default          | Description                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| color      | <T>string</T>                                                                                 | <D>"default"</D> | Sets the `button--color-{color}` class on element.                                                                            |
| disabled   | <T>boolean</T>                                                                                | <T>false</T>     | Disables the button.                                                                                                          |
| href       | <T>string</T>                                                                                 |                  | [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute. Requires `tag` to be <D>"a"</D>.     |
| icon       | <T>string</T>                                                                                 |                  | Button icon.                                                                                                                  |
| icon-align | <D>"left"</D> \| <D>"right"</D>                                                               | <D>"left"</D>    | Aligns the icon. Requires the `icon` attribute.                                                                               |
| inline     | <T>boolean</T>                                                                                | <T>false</T>     | Sets the button style to inline.                                                                                              |
| loading    | <T>boolean</T>                                                                                | <T>false</T>     | Shows the loading spinner in place of button content.                                                                         |
| rel        | <T>string</T>                                                                                 |                  | [rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) attribute. Requires `tag` to be <D>"a"</D>.       |
| size       | <D>"small"</D> \| <D>"default"</D> \| <D>"large"</D> \| <T>string</T>                         | <D>"default"</D> | Size of button.                                                                                                               |
| tag        | <D>"a"</D> \| <D>"button"</D> \| <D>"input"</D> \| <D>"router-link"</D> \| <D>"nuxt-link"</D> | <D>"button"</D>  | Tag that will be used for button element.                                                                                     |
| target     | <T>string</T>                                                                                 |                  | [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) attribute. Requires `tag` to be <D>"a"</D>. |
| to         | <T>string</T> \| <D>[Location](https://router.vuejs.org/api/#to)</D>                          |                  | \<router-link\> [to](https://router.vuejs.org/api/#to) prop. Required if `tag` is <D>"router-link"</D>.                       |
| type       | <D>"button"</D> \| <D>"submit"</D> \| <D>"reset"</D>                                          | <D>"button"</D>  | Button element [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute.                  |

</div>

## Events

<div class="event_table">

| Event  | Arguments                                                                                                                                 | Description                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| submit | <Arg description="Form submit event." name="event" type="Event" /><Arg description="Callback trigger." name="callback" type="Function" /> | Emitted when the form is submitted. |

</div>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  loading = false;
}
</script>
