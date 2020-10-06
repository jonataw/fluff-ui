import Vue, { PluginFunction, VueConstructor, Component } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const FluffUi: { install: InstallFunction };
export default FluffUi;

export const FLBulletin: VueConstructor<Vue>;
export const FLButton: VueConstructor<Vue>;
export const FLCheckbox: VueConstructor<Vue>;
export const FLChip: VueConstructor<Vue>;
export const FLDatepicker: VueConstructor<Vue>;
export const FLDivider: VueConstructor<Vue>;
export const FLForm: VueConstructor<Vue>;
export const FLIcon: VueConstructor<Vue>;
export const FLInput: VueConstructor<Vue>;
export const FLLoading: VueConstructor<Vue>;
export const FLModal: VueConstructor<Vue>;
export const FLSelect: VueConstructor<Vue>;
export const FLTextarea: VueConstructor<Vue>;
export const FLTimepicker: VueConstructor<Vue>;
export const FLToast: VueConstructor<Vue>;

export interface FormOptions {
  /**
   * The key of the error response that contains the response error type.
   */
  errorKey: string;

  childErrorsKey: string;

  childKey: string;
}

export interface ModalOptions {
  /**
   * Allows the <body> element to scroll while the modal is visible.
   */
  allowBodyScroll: boolean;

  /**
   * Determines if the modal can be manually closed.
   * If true, the modal can be closed by clicking outside the modal or the 'x' icon.
   * If false, the modal can't be closed.
   * If { backdrop: true }, the modal can be closed by clicking outside the modal.
   * If { icon: true }, the modal can be closed by clicking the 'x' icon.
   */
  closeable: boolean | { backdrop: boolean; icon: boolean };

  /**
   * The maximum width of the modal. The modal will still resize if the viewport shrinks below this width.
   */
  width: number | string;
}

export interface ModalMethods {
  /**
   * Opens a modal.
   *
   * @param component Component to display in modal.
   * @param data Data to pass to component.
   * @param options Overwrites default modal options.
   */
  open(component: Component, data: any, options: Partial<ModalOptions>): void;

  /**
   * Opens a modal.
   *
   * @param component Component to display in modal.
   * @param data Optional data to pass to component.
   */
  open(component: Component, data?: any): void;

  /**
   * Opens a modal.
   */
  open(modal: { options: ModalOptions; component: Component; data: any }): void;

  /**
   * Closes the currently active modal.
   */
  close(): void;
}

export interface ToastOptions {
  /**
   * Determines if the toast can be manually closed.
   * If true, the toast can be closed by clicking on the toast itself or the 'x' icon.
   * If false, the toast can't be closed, and stays visible for the specified delay.
   * @see delay
   *
   * If { click: true }, the toast can be closed by clicking the toast itself, but the 'x' icon will not appear.
   * If { icon: true }, the toast can be closed by clicking the 'x' icon.
   */
  closeable: boolean | { click: boolean; icon: boolean };

  /**
   * The toast will stay visible for this long, and then automatically close.
   * Set to false to keep toast visible until manually closed.
   */
  delay: number | false;

  /**
   * Show the delay progress below the toast.
   */
  showDelayProgress: boolean;
}

export interface Toast {
  title?: string;
  text?: string;
  icon?: string;
  chip?: { icon: string; color: string; text: string };
  options?: Partial<ToastOptions>;
}

export interface ToastMethods {
  /**
   * Pops a toast.
   */
  pop(toast: Toast): void;

  /**
   * Closes a toast at the specified index.
   */
  close(index: number): void;
}

interface Bus {
  $emit(event: string, ...args: any[]): Vue;
  $on(event: string, ...args: any[]): Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $fluff: {
      bus: Bus;
      config: {
        modal: ModalOptions;
        toast: ToastOptions;
        form: FormOptions;
      };
      modal: ModalMethods;
      toast: ToastMethods;
      uuid: string;
      autoBind(binds: string[], props: any): Record<string, any>;
      autoListen(binds: string[], listeners: any): Record<string, any>;
    };
  }
}
