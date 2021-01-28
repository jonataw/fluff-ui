# Bulletin

The bulletin is a static banner. It can be used to show news or warnings or any information.

<br/>

<FLBulletin>Dismissable.</FLBulletin>
<FLBulletin :dismissable="false" color="green">Not dismissable.</FLBulletin>

<SourceCode>
```HTML
<FLBulletin>Dismissable.</FLBulletin>
<FLBulletin :dismissable="false" color="green">Not dismissable.</FLBulletin>
```
</SourceCode>

## Cookie

Provide the `dismissable-cookie` prop and a cookie will be saved with that name when the bulletin is dismissed (if cookies are allowed in the browser). The next time you refresh the page, the bulletin will not appear.
<FLBulletin color="green" dismissable-cookie="my-cookie">Dismissable with cookie.</FLBulletin>

<SourceCode>
```HTML
<FLBulletin
  color="green"
  dismissable-cookie="my-cookie"
>
  Dismissable with cookie.
</FLBulletin>
```
</SourceCode>

## Props

<div class="prop_table">

| Name               | Type           | Default          | Description                                                                               |
| ------------------ | -------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| color              | <T>string</T>  | <D>"default"</D> | Sets the `button--color-{color}` class on element.                                        |
| dismissable        | <T>boolean</T> | <T>true</T>      | Allows the bulletin to be dismissed.                                                      |
| dismissable-cookie | <T>string</T>  |                  | Name of cookie to remember bulletin dismission. Requires `dismissable` to be <T>true</T>. |

</div>

## Events

<div class="event_table">

| Event   | Arguments | Description                             |
| ------- | --------- | --------------------------------------- |
| dismiss |           | Emitted when the bulletin is dismissed. |

</div>

<style lang="scss" scoped>
.bulletin {
  margin-top: 8px;
  &.bulletin--color-green {
    background-color: #10b877;
  }
}
</style>
