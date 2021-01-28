# Icon

An icon from the fluff-icons library. Requires the [fluff-icons](/get-started/icon-font) css file to be loaded.

<br />

<div class="example-icons">
  <FLIcon i="arrow-right"/>
  <FLIcon i="package"/>
  <FLIcon i="gift"/>
  <FLIcon i="information"/>
</div>

<SourceCode>
```HTML
<FLIcon i="arrow-right"/>
<FLIcon i="package"/>
<FLIcon i="gift"/>
<FLIcon i="information"/>
```
</SourceCode>

## Props

<div class="prop_table">

| Name | Type          | Default | Description               |
| ---- | ------------- | ------- | ------------------------- |
| i    | <T>string</T> |         | The icon to be displayed. |

</div>

# Events

<div class="event_table">

| Event | Arguments | Description                       |
| ----- | --------- | --------------------------------- |
| click |           | Emitted when the icon is clicked. |

</div>

## Icon List

<IconList/>

<style lang="scss" scoped>
.example-icons > .icon {
  font-size: 32px !important;
}
</style>
