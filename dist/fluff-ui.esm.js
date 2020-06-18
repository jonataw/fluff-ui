import _Vue from 'vue';
import Datepicker from 'vue2-datepicker';
import { Component, Prop, Vue } from 'vue-property-decorator';

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var _dec, _dec2, _class2, _class3, _descriptor, _temp;

let _class = (_dec = Component({
  name: 'FLIcon'
}), _dec2 = Prop({
  type: String,
  required: true
}), _dec(_class2 = (_class3 = (_temp = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "i", _descriptor, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "i", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3)) || _class2);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = _class;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('i', {
    staticClass: "icon",
    class: "icon-" + _vm.i,
    on: {
      "click": function ($event) {
        return _vm.$emit('click');
      }
    }
  });
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var _dec$1, _dec2$1, _dec3, _class2$1, _class3$1, _descriptor$1, _descriptor2, _temp$1;

let _class$1 = (_dec$1 = Component({
  name: 'FLLoading'
}), _dec2$1 = Prop({
  type: String,
  required: false
}), _dec3 = Prop({
  type: String,
  default: 'default'
}), _dec$1(_class2$1 = (_class3$1 = (_temp$1 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "color", _descriptor$1, this);

    _initializerDefineProperty(this, "size", _descriptor2, this);
  }

}, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class3$1.prototype, "color", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class3$1.prototype, "size", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$1)) || _class2$1);

/* script */
const __vue_script__$1 = _class$1;
/* template */

var __vue_render__$1 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "loading",
    class: (_obj = {}, _obj["loading--size-" + _vm.size] = true, _obj["loading--color-" + _vm.color] = true, _obj)
  });
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var _dec$2, _dec2$2, _dec3$1, _dec4, _dec5, _dec6, _class2$2, _class3$2, _descriptor$2, _descriptor2$1, _descriptor3, _descriptor4, _descriptor5, _temp$2;

let _class$2 = (_dec$2 = Component({
  name: 'FLButton',
  components: {
    Icon: __vue_component__,
    Loading: __vue_component__$1
  }
}), _dec2$2 = Prop({
  type: Boolean,
  default: false
}), _dec3$1 = Prop({
  type: String,
  default: 'default'
}), _dec4 = Prop(String), _dec5 = Prop(Boolean), _dec6 = Prop({
  type: String,
  default: 'left'
}), _dec$2(_class2$2 = (_class3$2 = (_temp$2 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "loading", _descriptor$2, this);

    _initializerDefineProperty(this, "size", _descriptor2$1, this);

    _initializerDefineProperty(this, "icon", _descriptor3, this);

    _initializerDefineProperty(this, "disabled", _descriptor4, this);

    _initializerDefineProperty(this, "iconAlign", _descriptor5, this);
  }

  /**
   * Returns true if the button has text content.
   *
   * @returns {boolean}
   */
  get hasTextContent() {
    return !!this.$slots.default;
  }

}, _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class3$2.prototype, "loading", [_dec2$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$1 = _applyDecoratedDescriptor(_class3$2.prototype, "size", [_dec3$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class3$2.prototype, "icon", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class3$2.prototype, "disabled", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class3$2.prototype, "iconAlign", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$2)) || _class2$2);

/* script */
const __vue_script__$2 = _class$2;
/* template */

var __vue_render__$2 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "button",
    class: (_obj = {
      'button--disabled': _vm.disabled,
      'button--loading': _vm.loading,
      'button--icon': !!_vm.icon,
      'button--text': _vm.hasTextContent
    }, _obj["button--size-" + _vm.size] = true, _obj["button--icon-align-" + _vm.iconAlign] = !!_vm.icon, _obj)
  }, [_c('button', {
    staticClass: "button__element",
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click');
      }
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_vm.loading ? _c('div', {
    staticClass: "button__loading"
  }, [_c('Loading', {
    attrs: {
      "size": 'button-' + _vm.size
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.icon ? _c('div', {
    staticClass: "button__icon"
  }, [_c('Icon', {
    attrs: {
      "i": _vm.icon
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.hasTextContent ? _c('span', {
    staticClass: "button__text"
  }, [_vm._t("default")], 2) : _vm._e()], 1)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var _dec$3, _dec2$3, _dec3$2, _dec4$1, _dec5$1, _dec6$1, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class2$3, _class3$3, _descriptor$3, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _temp$3;

let _class$3 = (_dec$3 = Component({
  name: 'FLInput',
  components: {}
}), _dec2$3 = Prop(), _dec3$2 = Prop(), _dec4$1 = Prop({
  required: true
}), _dec5$1 = Prop({
  default: 'text'
}), _dec6$1 = Prop({
  type: String,
  default: 'default'
}), _dec7 = Prop(), _dec8 = Prop(), _dec9 = Prop(), _dec10 = Prop(), _dec11 = Prop(), _dec12 = Prop(), _dec13 = Prop(), _dec14 = Prop({
  default: false
}), _dec15 = Prop(), _dec16 = Prop(), _dec17 = Prop(), _dec18 = Prop(), _dec19 = Prop(), _dec20 = Prop(), _dec21 = Prop(), _dec22 = Prop(Number), _dec$3(_class2$3 = (_class3$3 = (_temp$3 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor$3, this);

    _initializerDefineProperty(this, "form", _descriptor2$2, this);

    _initializerDefineProperty(this, "value", _descriptor3$1, this);

    this.locError = null;

    _initializerDefineProperty(this, "type", _descriptor4$1, this);

    _initializerDefineProperty(this, "size", _descriptor5$1, this);

    _initializerDefineProperty(this, "label", _descriptor6, this);

    _initializerDefineProperty(this, "description", _descriptor7, this);

    _initializerDefineProperty(this, "descriptionAbove", _descriptor8, this);

    _initializerDefineProperty(this, "descriptionBelow", _descriptor9, this);

    _initializerDefineProperty(this, "placeholder", _descriptor10, this);

    _initializerDefineProperty(this, "prefix", _descriptor11, this);

    _initializerDefineProperty(this, "suffix", _descriptor12, this);

    _initializerDefineProperty(this, "inline", _descriptor13, this);

    _initializerDefineProperty(this, "errors", _descriptor14, this);

    _initializerDefineProperty(this, "min", _descriptor15, this);

    _initializerDefineProperty(this, "max", _descriptor16, this);

    _initializerDefineProperty(this, "autocomplete", _descriptor17, this);

    _initializerDefineProperty(this, "disabled", _descriptor18, this);

    _initializerDefineProperty(this, "autofocus", _descriptor19, this);

    _initializerDefineProperty(this, "readonly", _descriptor20, this);

    _initializerDefineProperty(this, "stagger", _descriptor21, this);

    this.timeout = setTimeout(() => {}, 0);
  }

  get upperDescription() {
    return this.description || this.descriptionAbove;
  }

  get lowerDescription() {
    return this.descriptionBelow;
  }

  onInput(value) {
    if (this.disabled) {
      /* Do not allow input if input should be disabled */
      return;
    }

    if (this.type === 'number') {
      if (!isNaN(parseInt(value))) {
        value = parseInt(value);
      }
    }

    if (this.stagger) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$emit('staggered-input', value, this.id);
      }, this.stagger);
    }

    this.$emit('input', value, this.id);
  }

  onBlur() {
    if (this.type === 'email') {
      if (this.value.length && !this.validateEmail(this.value)) {
        this.locError = 'invalid_email_address';
      } else {
        this.locError = null;
      }
    } else if (this.type === 'number') {
      if (!this.validateNumber(this.value)) {
        this.locError = 'invalid_number';
      } else {
        if (this.max && this.value > this.max) ;

        if (this.max && this.value > this.max) ;

        this.locError = null;
      }
    }

    this.$emit('blur');
  }

  get error() {
    let error = null;

    if (this.locError) {
      error = this.locError;
    } else if (this.form && this.form.childErrors) {
      const e = this.form.childErrors.find(error => error.path === this.id);

      if (e) {
        error = e.error;
      }
    }

    if (error) {
      if (this.errors && this.errors[error]) {
        return this.errors[error];
      } else {
        return error;
      }
    }

    return null;
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateNumber(number) {
    return /^\d+$/.test(number);
  }

}, _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class3$3.prototype, "id", [_dec2$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$2 = _applyDecoratedDescriptor(_class3$3.prototype, "form", [_dec3$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$1 = _applyDecoratedDescriptor(_class3$3.prototype, "value", [_dec4$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$1 = _applyDecoratedDescriptor(_class3$3.prototype, "type", [_dec5$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5$1 = _applyDecoratedDescriptor(_class3$3.prototype, "size", [_dec6$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class3$3.prototype, "label", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class3$3.prototype, "description", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class3$3.prototype, "descriptionAbove", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class3$3.prototype, "descriptionBelow", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class3$3.prototype, "placeholder", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class3$3.prototype, "prefix", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class3$3.prototype, "suffix", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class3$3.prototype, "inline", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class3$3.prototype, "errors", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class3$3.prototype, "min", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class3$3.prototype, "max", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class3$3.prototype, "autocomplete", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class3$3.prototype, "disabled", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class3$3.prototype, "autofocus", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class3$3.prototype, "readonly", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class3$3.prototype, "stagger", [_dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$3)) || _class2$3);

/* script */
const __vue_script__$3 = _class$3;
/* template */

var __vue_render__$3 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "input",
    class: (_obj = {
      'input--error': !!_vm.error,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm.label ? _c('label', {
    staticClass: "input__label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "input__description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "input__outer"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input__prefix",
    domProps: {
      "innerHTML": _vm._s(_vm.prefix)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "input__inner"
  }, [_c('input', {
    staticClass: "input__element",
    attrs: {
      "id": _vm.id,
      "type": _vm.type || 'text',
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder === undefined ? _vm.label : _vm.placeholder,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function ($event) {
        $event.preventDefault();
        return _vm.onInput($event.target.value);
      },
      "blur": _vm.onBlur,
      "focus": function ($event) {
        return _vm.$emit('focus');
      },
      "keydown": function ($event) {
        return _vm.$emit('keydown');
      },
      "keyup": function ($event) {
        return _vm.$emit('keyup');
      },
      "keypress": function ($event) {
        return _vm.$emit('keypress');
      }
    }
  }), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input__error_icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
    }
  })])]) : _vm._e()]), _vm._v(" "), _vm.suffix ? _c('span', {
    staticClass: "input__suffix",
    domProps: {
      "innerHTML": _vm._s(_vm.suffix)
    }
  }) : _vm._e()]), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input__error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input__description_below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var _dec$4, _class2$4;

let _class$4 = (_dec$4 = Component({
  name: 'FLCheckbox',
  components: {
    Icon: __vue_component__
  }
}), _dec$4(_class2$4 = class extends __vue_component__$3 {}) || _class2$4);

/* script */
const __vue_script__$4 = _class$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkbox",
    class: {
      'checkbox--error': !!_vm.error,
      'checkbox--checked': _vm.value
    }
  }, [_vm.upperDescription ? _c('p', {
    staticClass: "input__description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "checkbox__inner"
  }, [_c('input', {
    staticClass: "checkbox__element",
    attrs: {
      "id": _vm.id,
      "disabled": _vm.disabled,
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function ($event) {
        return _vm.onInput($event.target.checked);
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "checkbox__fill_box",
    attrs: {
      "for": _vm.id
    }
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 64 64"
    }
  }, [_c('path', {
    attrs: {
      "d": "M60.6,12.4c-1.3-1.3-3.3-1.3-4.6,0L24.2,44.2c-0.8,0.8-2.3,0.8-3.2,0l-13-13c-1.3-1.3-3.3-1.3-4.6,0c-1.3,1.3-1.3,3.3,0,4.6\nL18,50.4l0,0l0.4,0.4c1.2,1.2,2.7,1.7,4.2,1.7c1.5,0,3.1-0.6,4.2-1.7l0.4-0.4l0,0L60.6,17C61.8,15.8,61.8,13.7,60.6,12.4z"
    }
  })])]), _vm._v(" "), _vm.label ? _c('label', {
    staticClass: "checkbox__label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e()]), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input__description_below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var _dec$5, _dec2$4, _dec3$3, _class2$5, _class3$4, _descriptor$4, _descriptor2$3, _temp$4;

let _class$5 = (_dec$5 = Component({
  name: 'FLChip',
  components: {
    Icon: __vue_component__
  }
}), _dec2$4 = Prop({
  type: String,
  required: false
}), _dec3$3 = Prop({
  type: String,
  default: 'default'
}), _dec$5(_class2$5 = (_class3$4 = (_temp$4 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "icon", _descriptor$4, this);

    _initializerDefineProperty(this, "color", _descriptor2$3, this);
  }

  /**
   * Returns true if the chip has text content.
   *
   * @returns {boolean}
   */
  get hasTextContent() {
    return !!this.$slots.default;
  }

}, _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class3$4.prototype, "icon", [_dec2$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$3 = _applyDecoratedDescriptor(_class3$4.prototype, "color", [_dec3$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$4)) || _class2$5);

/* script */
const __vue_script__$5 = _class$5;
/* template */

var __vue_render__$5 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "chip",
    class: (_obj = {}, _obj["chip--color-" + _vm.color] = true, _obj)
  }, [_vm.icon ? _c('div', {
    staticClass: "chip__icon"
  }, [_c('Icon', {
    attrs: {
      "i": _vm.icon
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.hasTextContent ? _c('span', {
    staticClass: "chip__text"
  }, [_vm._t("default")], 2) : _vm._e()]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var _dec$6, _dec2$5, _class2$6, _class3$5, _descriptor$5, _temp$5;

let _class$6 = (_dec$6 = Component({
  name: 'FLDivider'
}), _dec2$5 = Prop({
  type: String,
  required: false
}), _dec$6(_class2$6 = (_class3$5 = (_temp$5 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "text", _descriptor$5, this);
  }

}, _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class3$5.prototype, "text", [_dec2$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$5)) || _class2$6);

/* script */
const __vue_script__$6 = _class$6;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.text ? _c('div', {
    staticClass: "divider divider--text"
  }, [_c('div'), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('div')]) : _c('div', {
    staticClass: "divider"
  });
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = undefined;
/* scoped */

const __vue_scope_id__$6 = undefined;
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var _dec$7, _dec2$6, _dec3$4, _dec4$2, _class2$7, _class3$6, _descriptor$6, _descriptor2$4, _descriptor3$2, _temp$6;

let _class$7 = (_dec$7 = Component({
  name: 'FLForm',
  components: {
    FLIcon: __vue_component__
  }
}), _dec2$6 = Prop({
  type: String,
  required: true
}), _dec3$4 = Prop({
  type: Boolean,
  default: false
}), _dec4$2 = Prop({
  type: Boolean,
  default: false
}), _dec$7(_class2$7 = (_class3$6 = (_temp$6 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "name", _descriptor$6, this);

    _initializerDefineProperty(this, "htmlValidate", _descriptor2$4, this);

    _initializerDefineProperty(this, "showError", _descriptor3$2, this);

    this.form = null;
  }

  onSubmit() {
    if (!this.form) {
      return;
    }

    this.form.error = null;
    this.form.childErrors = [];
    this.form.loading = true;
    this.$emit('submit', callback => {
      if (this.form) {
        if (callback.error) {
          this.form.error = callback.error.type;
          this.form.childErrors = callback.error.fields;
        }

        this.form.loading = false;
      }
    });
  }

  mounted() {
    this.form = this.generateForm();
  }

  generateForm() {
    return {
      loading: false,
      done: false,
      error: null,
      childErrors: []
    };
  }

}, _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class3$6.prototype, "name", [_dec2$6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$4 = _applyDecoratedDescriptor(_class3$6.prototype, "htmlValidate", [_dec3$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$2 = _applyDecoratedDescriptor(_class3$6.prototype, "showError", [_dec4$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$6)) || _class2$7);

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$7 = _class$7;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    staticClass: "form",
    attrs: {
      "novalidate": !_vm.htmlValidate
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.onSubmit($event);
      }
    }
  }, [_vm.showError && _vm.form.error ? _c('div', {
    staticClass: "form--error",
    domProps: {
      "textContent": _vm._s(_vm.form.error)
    }
  }) : _vm._e(), _vm._v(" "), _vm.form ? _vm._t("form", null, {
    "form": _vm.form
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = function (inject) {
  if (!inject) return;
  inject("data-v-6e154ed8_0", {
    source: ".form-error[data-v-6e154ed8]{display:flex;align-items:center}.form-error .icon[data-v-6e154ed8]{font-size:20px}.form-error>span[data-v-6e154ed8]{margin-left:6px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$7 = "data-v-6e154ed8";
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, createInjector, undefined, undefined);

var _dec$8, _dec2$7, _class2$8, _class3$7, _descriptor$7, _temp$7;

let _class$8 = (_dec$8 = Component({
  name: 'FLSelect',
  components: {
    Icon: __vue_component__
  }
}), _dec2$7 = Prop({
  type: Array,
  required: true
}), _dec$8(_class2$8 = (_class3$7 = (_temp$7 = class _class3 extends __vue_component__$3 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "options", _descriptor$7, this);
  }

  onInput(value) {
    if (this.disabled) {
      return;
    }

    if (value === 'false') {
      value = false;
    }

    if (value === 'true') {
      value = true;
    }

    if (value === '') {
      value = null;
    }

    this.$emit('input', value);
  }

}, _temp$7), (_descriptor$7 = _applyDecoratedDescriptor(_class3$7.prototype, "options", [_dec2$7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$7)) || _class2$8);

/* script */
const __vue_script__$8 = _class$8;
/* template */

var __vue_render__$8 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "select",
    class: (_obj = {
      'input--error': !!_vm.error,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm.label ? _c('label', {
    staticClass: "input__label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "input__description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "select__inner"
  }, [_c('select', {
    staticClass: "select__element",
    attrs: {
      "id": _vm.id,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "change": function ($event) {
        return _vm.onInput($event.target.value);
      },
      "blur": function ($event) {
        return _vm.$emit('blur');
      },
      "focus": function ($event) {
        return _vm.$emit('focus');
      }
    }
  }, _vm._l(_vm.options, function (option, i) {
    return _c('option', {
      key: i,
      staticClass: "select__option",
      class: {
        'select__option--selected': option.value === _vm.value
      },
      domProps: {
        "value": option.value,
        "textContent": _vm._s(option.text)
      }
    });
  }), 0), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "select__error_icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "select__icon"
  }, [_c('div', {
    staticStyle: {
      "height": "16px"
    }
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M11.9,10c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9,15.7c-0.4,0.4-1,0.4-1.4,0l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4\ns1-0.4,1.4,0l3.6,3.6C8.3,13.6,11.9,10,11.9,10z M11.9,6L8.3,2.4L4.7,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.3-4.3\nc0.4-0.4,1-0.4,1.4,0l4.3,4.3c0.4,0.4,0.4,1,0,1.4C12.9,6.4,12.3,6.4,11.9,6z"
    }
  })])])])]), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input__error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input__description_below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

const __vue_inject_styles__$8 = undefined;
/* scoped */

const __vue_scope_id__$8 = undefined;
/* module identifier */

const __vue_module_identifier__$8 = undefined;
/* functional template */

const __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

var _dec$9, _class2$9;

let _class$9 = (_dec$9 = Component({
  name: 'FLTextarea',
  components: {}
}), _dec$9(_class2$9 = class extends __vue_component__$3 {}) || _class2$9);

/* script */
const __vue_script__$9 = _class$9;
/* template */

var __vue_render__$9 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "textarea",
    class: (_obj = {
      'input--error': !!_vm.error
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm.label ? _c('label', {
    staticClass: "input__label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "input__description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "textarea__inner"
  }, [_c('textarea', {
    staticClass: "textarea__element",
    attrs: {
      "id": _vm.id,
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder === undefined ? _vm.label : _vm.placeholder,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function ($event) {
        return _vm.onInput($event.target.value);
      },
      "blur": _vm.onBlur,
      "focus": function ($event) {
        return _vm.$emit('focus');
      },
      "keydown": function ($event) {
        return _vm.$emit('keydown');
      },
      "keyup": function ($event) {
        return _vm.$emit('keyup');
      },
      "keypress": function ($event) {
        return _vm.$emit('keypress');
      }
    }
  })]), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input__error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input__description_below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

const __vue_inject_styles__$9 = undefined;
/* scoped */

const __vue_scope_id__$9 = undefined;
/* module identifier */

const __vue_module_identifier__$9 = undefined;
/* functional template */

const __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

var _dec$a, _dec2$8, _class2$a, _class3$8, _descriptor$8, _temp$8;

let _class$a = (_dec$a = Component({
  name: 'FLDatepicker',
  components: {
    Icon: __vue_component__
  }
}), _dec2$8 = Prop({
  default: 'D MMM, YYYY'
}), _dec$a(_class2$a = (_class3$8 = (_temp$8 = class _class3 extends __vue_component__$3 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "format", _descriptor$8, this);
  }

}, _temp$8), (_descriptor$8 = _applyDecoratedDescriptor(_class3$8.prototype, "format", [_dec2$8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$8)) || _class2$a);

/* script */
const __vue_script__$a = _class$a;
/* template */

var __vue_render__$a = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "datepicker",
    class: (_obj = {
      'input--error': !!_vm.error,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm.label ? _c('label', {
    staticClass: "input__label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "input__description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "datepicker__inner"
  }, [_c('client-only', [_c('date-picker', {
    staticClass: "datepicker__element",
    attrs: {
      "id": _vm.id,
      "value": _vm.value,
      "clearable": false,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly,
      "format": _vm.format
    },
    on: {
      "input": _vm.onInput,
      "blur": function ($event) {
        return _vm.$emit('blur');
      },
      "focus": function ($event) {
        return _vm.$emit('focus');
      }
    }
  }, [_vm._t("icon-calendar")], 2)], 1), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "datepicker__error_icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "datepicker__icon"
  }, [_c('div', {
    staticStyle: {
      "height": "16px"
    }
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M13.1,1.5h-1.5V0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v0.7H5.8V0.7C5.8,0.3,5.5,0,5.1,0C4.7,0,4.4,0.3,4.4,0.7\n\tv0.7H2.9c-1.2,0-2.2,1-2.2,2.2v10.2c0,1.2,1,2.2,2.2,2.2h10.2c1.2,0,2.2-1,2.2-2.2V3.6C15.3,2.4,14.3,1.5,13.1,1.5z M2.9,2.9h1.5\n\tv0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V2.9h4.4v0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V2.9h1.5\n\tc0.4,0,0.7,0.3,0.7,0.7v2.2H2.2V3.6C2.2,3.2,2.5,2.9,2.9,2.9z M13.1,14.5H2.9c-0.4,0-0.7-0.3-0.7-0.7V7.3h11.6v6.5\n\tC13.8,14.2,13.5,14.5,13.1,14.5z"
    }
  })])])])], 1), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input__error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input__description_below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__$a = [];
/* style */

const __vue_inject_styles__$a = undefined;
/* scoped */

const __vue_scope_id__$a = undefined;
/* module identifier */

const __vue_module_identifier__$a = undefined;
/* functional template */

const __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

var _dec$b, _dec2$9, _class2$b, _class3$9, _descriptor$9, _temp$9;

let _class$b = (_dec$b = Component({
  name: 'FLTimepicker',
  components: {
    Icon: __vue_component__
  }
}), _dec2$9 = Prop({
  default: 'HH:mm'
}), _dec$b(_class2$b = (_class3$9 = (_temp$9 = class _class3 extends __vue_component__$3 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "format", _descriptor$9, this);
  }

}, _temp$9), (_descriptor$9 = _applyDecoratedDescriptor(_class3$9.prototype, "format", [_dec2$9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$9)) || _class2$b);

/* script */
const __vue_script__$b = _class$b;
/* template */

var __vue_render__$b = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "timepicker",
    class: (_obj = {
      'input--error': !!_vm.error,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm.label ? _c('label', {
    staticClass: "input__label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "input__description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "timepicker__inner"
  }, [_c('client-only', [_c('date-picker', {
    staticClass: "timepicker__element",
    attrs: {
      "id": _vm.id,
      "value": _vm.value,
      "clearable": false,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly,
      "type": "time",
      "value-type": "timestamp",
      "minute-step": 5,
      "hour-step": 1,
      "show-second": false,
      "format": _vm.format
    },
    on: {
      "input": _vm.onInput,
      "blur": function ($event) {
        return _vm.$emit('blur');
      },
      "focus": function ($event) {
        return _vm.$emit('focus');
      }
    }
  })], 1), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "timepicker__error_icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "timepicker__icon"
  }, [_c('div', {
    staticStyle: {
      "height": "16px"
    }
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5\n\tc3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z M8.8,7.7l3,3l-1.1,1.1L7.3,8.3l0,0H7.2V3.4h1.5V7.7z"
    }
  })])])])], 1), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input__error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input__description_below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()]);
};

var __vue_staticRenderFns__$b = [];
/* style */

const __vue_inject_styles__$b = undefined;
/* scoped */

const __vue_scope_id__$b = undefined;
/* module identifier */

const __vue_module_identifier__$b = undefined;
/* functional template */

const __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

var _dec$c, _dec2$a, _dec3$5, _dec4$3, _class2$c, _class3$a, _descriptor$a, _descriptor2$5, _descriptor3$3, _temp$a;

let _class$c = (_dec$c = Component({
  name: 'FLBulletin',
  components: {
    Chip: __vue_component__$5,
    Icon: __vue_component__
  }
}), _dec2$a = Prop({
  type: Object
}), _dec3$5 = Prop({
  type: String,
  default: 'default'
}), _dec4$3 = Prop({
  type: Boolean,
  default: true
}), _dec$c(_class2$c = (_class3$a = (_temp$a = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "chip", _descriptor$a, this);

    _initializerDefineProperty(this, "color", _descriptor2$5, this);

    _initializerDefineProperty(this, "dismissable", _descriptor3$3, this);

    this.cookie = 'bulletin-dismissed';
    this.show = false;
  }

  mounted() {
    if (!this.dismissable) {
      this.show = true;
    }

    this.show = this.getCookieValue(this.cookie) === '';
  }

  onDismiss() {
    // SSR?
    this.show = false;

    if (document) {
      document.cookie = `${this.cookie}=1`;
    }
  }

  getCookieValue(name) {
    const c = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return c ? c.pop() : '';
  }

}, _temp$a), (_descriptor$a = _applyDecoratedDescriptor(_class3$a.prototype, "chip", [_dec2$a], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$5 = _applyDecoratedDescriptor(_class3$a.prototype, "color", [_dec3$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$3 = _applyDecoratedDescriptor(_class3$a.prototype, "dismissable", [_dec4$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$a)) || _class2$c);

/* script */
const __vue_script__$c = _class$c;
/* template */

var __vue_render__$c = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.show ? _c('div', {
    staticClass: "bulletin",
    class: (_obj = {}, _obj["bulletin--color-" + _vm.color] = true, _obj)
  }, [_c('div', {
    staticClass: "bulletin__inner"
  }, [_vm.chip ? _c('div', {
    staticClass: "bulletin__chip"
  }, [_c('Chip', {
    attrs: {
      "color": _vm.chip.color,
      "icon": _vm.chip.icon
    }
  }, [_vm._v(_vm._s(_vm.chip.text))])], 1) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "bulletin__text"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('div', {
    staticClass: "bulletin__dismiss"
  }, [_c('Icon', {
    attrs: {
      "i": "cross"
    },
    on: {
      "click": _vm.onDismiss
    }
  })], 1)]) : _vm._e();
};

var __vue_staticRenderFns__$c = [];
/* style */

const __vue_inject_styles__$c = undefined;
/* scoped */

const __vue_scope_id__$c = undefined;
/* module identifier */

const __vue_module_identifier__$c = undefined;
/* functional template */

const __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FLButton: __vue_component__$2,
  FLCheckbox: __vue_component__$4,
  FLChip: __vue_component__$5,
  FLDivider: __vue_component__$6,
  FLForm: __vue_component__$7,
  FLIcon: __vue_component__,
  FLInput: __vue_component__$3,
  FLLoading: __vue_component__$1,
  FLSelect: __vue_component__$8,
  FLTextarea: __vue_component__$9,
  FLDatepicker: __vue_component__$a,
  FLTimepicker: __vue_component__$b,
  FLBulletin: __vue_component__$c
});

_Vue.use(Datepicker); // Import vue components
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
const install = function installFluffUi(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__$c as FLBulletin, __vue_component__$2 as FLButton, __vue_component__$4 as FLCheckbox, __vue_component__$5 as FLChip, __vue_component__$a as FLDatepicker, __vue_component__$6 as FLDivider, __vue_component__$7 as FLForm, __vue_component__ as FLIcon, __vue_component__$3 as FLInput, __vue_component__$1 as FLLoading, __vue_component__$8 as FLSelect, __vue_component__$9 as FLTextarea, __vue_component__$b as FLTimepicker };
