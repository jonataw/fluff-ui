# Installation

To start using Fluff UI in your project, run the following commands in your project directory:

```Bash
npm i fluff-ui
# yarn add fluff-ui
```

Import Fluff UI in your Vue `main.js` file:

```JavaScript
import Vue from 'vue';

import FluffUI from 'fluff-ui';
import 'fluff-ui/dist/main.css';

Vue.use(FluffUI);

new Vue({
  render: h => h(App)
}).$mount('app');
```

## Nuxt

Fluff UI also works with [Nuxt](https://nuxtjs.org). Import Fluff UI by creating a `fluff-ui.js/ts` file in your [plugins](https://nuxtjs.org/guide/plugins) folder:

```JavaScript
import Vue from 'vue';
import FluffUI from 'fluff-ui';

Vue.use(FluffUI);
```

Then add `fluff-ui` to the plugins list in your `nuxt.config.js`:

```JavaScript
export default {
  plugins: [
    '~/plugins/fluff-ui'
  ]
}
```
