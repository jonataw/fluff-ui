import Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const FluffUi: { install: InstallFunction };
export default FluffUi;

export const FLButton: VueConstructor<Vue>;
export const FLCheckbox: VueConstructor<Vue>;
export const FLDivider: VueConstructor<Vue>;
export const FLForm: VueConstructor<Vue>;
export const FLIcon: VueConstructor<Vue>;
export const FLInput: VueConstructor<Vue>;
export const FLLoading: VueConstructor<Vue>;
export const FLSelect: VueConstructor<Vue>;
export const FLTextarea: VueConstructor<Vue>;
