import Vue, { PluginFunction, VueConstructor, Component } from 'vue';

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
export const FLDatepicker: VueConstructor<Vue>;
export const FLTimepicker: VueConstructor<Vue>;
export const FLChip: VueConstructor<Vue>;
export const FLModal: VueConstructor<Vue>;

interface ModalMethods {
  open(component: Component): void;
  close(): void;
}

interface Bus {
  $emit(event: string, ...args: any[]): Vue;
  $on(event: string, ...args: any[]): Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $bus: Bus;
    $config: {};
    $modal: ModalMethods;
  }
}
