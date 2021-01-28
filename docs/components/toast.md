# Toast

<FLToast />

The Toast component is similar to a popup, but is usually used to show the user brief information.

<br />

To use the toast, add the <D>\<FLToast /></D> component close to the root of your document body. Then use the <T>\$fluff.toast.pop(ToastOptions)</T> function to create a toast.

<FLButton @click="pop">Pop Toast</FLButton>

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

<div class="props_table">

| Key                         | Type                                                        | Description                                                                                                                           |
| --------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| title                       | <T>string</T>                                               | Toast title.                                                                                                                          |
| text                        | <T>string</T>                                               | Toast text.                                                                                                                           |
| icon                        | <T>string</T>                                               | Toast icon.                                                                                                                           |
| options.closeable\*         | <T>boolean</T> \| <T>{ click: boolean; icon: boolean; }</T> | Determines if the toast can be closed by clicking it. 'click' - clicking the toast closes it. 'icon' - clicking the X icon closes it. |
| options.delay\*             | <T>number</T>                                               | Milliseconds until the toast automatically closes.                                                                                    |
| options.showDelayProgress\* | <T>boolean</T>                                              | Show the progress until the toast is automatically closed?                                                                            |

</div>

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

<script>
export default {
  methods: {
    pop() {
      this.$fluff.toast.pop({
        title: 'You did it!',
        text: 'You created a toast.',
        icon: 'package'
      });
    }
  }
}
</script>
