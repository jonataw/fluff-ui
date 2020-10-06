/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import FluffUi from '../../src/main';
import '../../src/icons/fluff-icons.scss';

import './styles/override.scss';

export default ({
  Vue // the version of Vue being used in the VuePress app
}: {
  Vue: any;
}) => {
  Vue.use(FluffUi);
};
