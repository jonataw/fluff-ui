# Bulletin

The bulletin is a static banner. It can be used to show news or warnings or any information.

<br/>

<FLBulletin>Dismissable.</FLBulletin>
<FLBulletin :dismissable="false" color="green">Not dismissable.</FLBulletin>

<SourceCode>
```HTML
<FLBulletin>Hello!</FLBulletin>
<FLBulletin :dismissable="false" color="green">Hello!</FLBulletin>
```
</SourceCode>

<br/>

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

| Name               | Type    | Default | Description                                                                          |
| ------------------ | ------- | ------- | ------------------------------------------------------------------------------------ |
| color              | string  | default | Custom color. Requires the `bulletin--color-{color}` CSS rule.                       |
| dismissable        | boolean | true    | Allows the bulletin to be dismissed.                                                 |
| dismissable-cookie | string  |         | Name of cookie to remember bulletin dismission. Requires `dismissable` to be `true`. |

<style lang="scss" scoped>
.bulletin {
  margin-top: 8px;
  &.bulletin--color-green {
    background-color: #10b877;
  }
}
</style>
