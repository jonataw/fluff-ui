import Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const FluffUi: { install: InstallFunction };
export default FluffUi;

export const FluffUiSample: VueConstructor<Vue>;
