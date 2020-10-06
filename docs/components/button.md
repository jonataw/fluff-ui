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

| Name       | Type                                           | Default   | Description                                                                                                                               |
| ---------- | ---------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| color      | `string`                                       | `default` | Custom color. Requires the `button--color-{color}` CSS rule.                                                                              |
| disabled   | `boolean`                                      | `false`   | If true, adds the disabled attribute to the button.                                                                                       |
| href       | `string`                                       |           | `<a>`-element [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute. Requires type to be `a`.           |
| icon       | `string`                                       |           | Icon to show in button.                                                                                                                   |
| icon-align | `left | right`                                 | `left`    | Aligns the icon. Requires the `icon` attribute.                                                                                           |
| inline     | `boolean`                                      | `false`   | Sets the button style to inline.                                                                                                          |
| loading    | `boolean`                                      | `false`   | If true, shows the loading spinner in place of button content.                                                                            |
| rel        | `string`                                       |           | `<a>`-element [rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) attribute. Requires type to be `a`.             |
| size       | `small | default | large`                      | `default` | Size of button.                                                                                                                           |
| tag        | `a | button | input | router-link | nuxt-link` | `button`  | Tag that will be used for button element.                                                                                                 |
| target     | `string`                                       |           | `<a>`-element [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) attribute. Requires type to be `a`.       |
| to         | `string | Location`                            |           | router-link [to](https://router.vuejs.org/api/#to) prop. Required if tag is `router-link`.                                                |
| type       | `submit | button | reset`                      | `button`  | Button element [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute.                              |
| value      | `string`                                       |           | Input element [value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-value) attribute. Requires type to be `input`. |

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  loading = false;
}
</script>
