# Loading

The loading component represents a spinning loading icon.

<br />

<FLLoading />

<SourceCode>
```HTML
<FLLoading />
```
</SourceCode>

## Size

<div style="display: flex; column-gap: 16px;">
  <FLLoading size="small" />
  <FLLoading />
  <FLLoading size="large" />
</div>

<SourceCode>
```HTML
<FLLoading size="small" />
<FLLoading />
<FLLoading size="large" />
```
</SourceCode>

## Props

## Props

| Name  | Type                                      | Default   | Description                                                   |
| ----- | ----------------------------------------- | --------- | ------------------------------------------------------------- |
| color | string                                    | 'default' | Custom color. Requires the `loading--color-{color}` CSS rule. |
| size  | 'small' \| 'default' \| 'large' \| string | 'default' | Loading icon size.                                            |
