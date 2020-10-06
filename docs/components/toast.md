# Toast

<FLToast />

The Toast component is similar to a popup, but is usually used to show the user brief information.

To use the toast, add the `<FLToast />` component close to the root of your document body. Then use the `$fluff.toast.pop(ToastOptions)` function to create a toast.

<FLButton @click="$fluff.toast.pop({
title: 'You did it!',
text: 'You created a toast.',
icon: 'package'
})">Pop Toast</FLButton>

<SourceCode>
```HTML
<FLButton 
  @click="$fluff.toast.pop({
    title: 'You did it!',
    text: 'You created a toast.',
    icon: 'package'
  })"
>
  Pop Toast
</FLButton>
```
</SourceCode>

## ToastOptions

| Key                         | Type                                          | Description                                                                                                                           |
| --------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| title                       | string                                        | Toast title.                                                                                                                          |
| text                        | string                                        | Toast text.                                                                                                                           |
| icon                        | string                                        | Toast icon.                                                                                                                           |
| options.closeable\*         | boolean \| { click: boolean; icon: boolean; } | Determines if the toast can be closed by clicking it. 'click' - clicking the toast closes it. 'icon' - clicking the X icon closes it. |
| options.delay\*             | number                                        | Milliseconds until the toast automatically closes.                                                                                    |
| options.showDelayProgress\* | boolean                                       | Show the progress until the toast is automatically closed?                                                                            |

\* Overrides the [GlobalOptions.toast](#globaloptions-toast) properties.

## GlobalOptions.toast

To easily make all your toasts in your app behave or look the same, pass a toast object to `Vue.use(FluffUi)`:

<SourceCode>
```Typescript
Vue.use(FluffUi, {
  toast: {
    closeable: { icon: true },
    delay: 6000,
    showDelayProgress: false
  }
})
```
</SourceCode>
