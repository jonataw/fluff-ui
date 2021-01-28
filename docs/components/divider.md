# Divider

The divider can be used to divide content sections.

<br />

<FLDivider style="margin: 32px 0;" />

<SourceCode>
```HTML
<FLDivider />
```
</SourceCode>

## Text

An optional prop `text` can be passed to the divider component. The text will show up in the center, between the divider line.

<FLDivider text="This is some text!" style="margin: 32px 0;" />

<SourceCode>
```HTML
<FLDivider text="This is some text!" />
```
</SourceCode>

## Props

| Name | Type          | Default | Description   |
| ---- | ------------- | ------- | ------------- |
| text | <T>string</T> |         | Text to show. |

<style lang="scss" scoped>
.bulletin {
  margin-top: 8px;
  &.bulletin--color-green {
    background-color: #10b877;
  }
}
</style>
