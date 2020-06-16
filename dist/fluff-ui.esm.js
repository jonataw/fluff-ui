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
const __vue_script__ = _class;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "icon--root"
  }, [_c('i', {
    staticClass: "icon",
    class: "icon-" + _vm.i
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-18110270_0", {
    source: ".icon-root[data-v-18110270]{display:inline-block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-18110270";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var _dec$1, _dec2$1, _class2$1, _descriptor$1, _descriptor2, _temp$1;

let _class$1 = (_dec$1 = Prop({
  type: String,
  required: false
}), _dec2$1 = Prop(String), (_class2$1 = (_temp$1 = class _class2 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "color", _descriptor$1, this);

    _initializerDefineProperty(this, "size", _descriptor2, this);
  }

}, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "color", [_dec$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2$1.prototype, "size", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$1));

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
    class: (_obj = {}, _obj["loading--size-" + (_vm.size || 'default')] = true, _obj["loading--color-" + (_vm.color || 'default')] = true, _obj),
    style: {
      borderColor: _vm.color
    }
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

var _dec$2, _dec2$2, _dec3, _dec4, _dec5, _class2$2, _class3$1, _descriptor$2, _descriptor2$1, _descriptor3, _descriptor4, _temp$2;

let _class$2 = (_dec$2 = Component({
  name: 'FLButton',
  components: {
    Icon: __vue_component__,
    Loading: __vue_component__$1
  }
}), _dec2$2 = Prop({
  type: [String, Object],
  default: false
}), _dec3 = Prop(String), _dec4 = Prop(String), _dec5 = Prop({
  type: String,
  default: 'left'
}), _dec$2(_class2$2 = (_class3$1 = (_temp$2 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "loading", _descriptor$2, this);

    _initializerDefineProperty(this, "size", _descriptor2$1, this);

    _initializerDefineProperty(this, "icon", _descriptor3, this);

    _initializerDefineProperty(this, "iconAlign", _descriptor4, this);
  }

  /**
   * Returns true if the button has text content.
   *
   * @returns {boolean}
   */
  get hasTextContent() {
    return !!this.$slots.default;
  }

}, _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class3$1.prototype, "loading", [_dec2$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$1 = _applyDecoratedDescriptor(_class3$1.prototype, "size", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class3$1.prototype, "icon", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class3$1.prototype, "iconAlign", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$1)) || _class2$2);

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
      'button--loading-template': _vm.loading && _vm.loading.mode === 'add' && !_vm.icon,
      'button--loading': typeof _vm.loading === 'object' ? _vm.loading.loading : _vm.loading,
      'button--no-text': _vm.hasTextContent
    }, _obj["button--" + (_vm.size || 'default')] = true, _obj["button--icon-align-" + _vm.iconAlign] = true, _obj)
  }, [_c('button', {
    staticClass: "button__element",
    on: {
      "click": function ($event) {
        return _vm.$emit('click');
      }
    }
  }, [(typeof _vm.loading === 'object' ? _vm.loading.loading : _vm.loading) ? _c('div', {
    staticClass: "button__loading"
  }, [_c('Loading')], 1) : _vm.icon ? _c('div', {
    staticClass: "button__icon"
  }, [_c('Icon', {
    attrs: {
      "i": _vm.icon
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "button__text"
  }, [_vm._t("default")], 2)])]);
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

var _dec$3, _dec2$3, _dec3$1, _dec4$1, _dec5$1, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class2$3, _class3$2, _descriptor$3, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp$3;

let _class$3 = (_dec$3 = Component({
  name: 'FLInput',
  components: {}
}), _dec2$3 = Prop(), _dec3$1 = Prop(), _dec4$1 = Prop({
  required: true
}), _dec5$1 = Prop(), _dec6 = Prop(), _dec7 = Prop(), _dec8 = Prop(), _dec9 = Prop(), _dec10 = Prop(), _dec11 = Prop(), _dec12 = Prop(), _dec13 = Prop(), _dec14 = Prop(), _dec15 = Prop(), _dec16 = Prop(Number), _dec$3(_class2$3 = (_class3$2 = (_temp$3 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor$3, this);

    _initializerDefineProperty(this, "form", _descriptor2$2, this);

    _initializerDefineProperty(this, "value", _descriptor3$1, this);

    this.locError = null;

    _initializerDefineProperty(this, "type", _descriptor4$1, this);

    _initializerDefineProperty(this, "label", _descriptor5, this);

    _initializerDefineProperty(this, "description", _descriptor6, this);

    _initializerDefineProperty(this, "descriptionAbove", _descriptor7, this);

    _initializerDefineProperty(this, "descriptionBelow", _descriptor8, this);

    _initializerDefineProperty(this, "placeholder", _descriptor9, this);

    _initializerDefineProperty(this, "errors", _descriptor10, this);

    _initializerDefineProperty(this, "autocomplete", _descriptor11, this);

    _initializerDefineProperty(this, "disabled", _descriptor12, this);

    _initializerDefineProperty(this, "autofocus", _descriptor13, this);

    _initializerDefineProperty(this, "readonly", _descriptor14, this);

    _initializerDefineProperty(this, "stagger", _descriptor15, this);

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
      value = parseInt(value);
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

}, _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class3$2.prototype, "id", [_dec2$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$2 = _applyDecoratedDescriptor(_class3$2.prototype, "form", [_dec3$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$1 = _applyDecoratedDescriptor(_class3$2.prototype, "value", [_dec4$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$1 = _applyDecoratedDescriptor(_class3$2.prototype, "type", [_dec5$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class3$2.prototype, "label", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class3$2.prototype, "description", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class3$2.prototype, "descriptionAbove", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class3$2.prototype, "descriptionBelow", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class3$2.prototype, "placeholder", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class3$2.prototype, "errors", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class3$2.prototype, "autocomplete", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class3$2.prototype, "disabled", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class3$2.prototype, "autofocus", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class3$2.prototype, "readonly", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class3$2.prototype, "stagger", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$2)) || _class2$3);

/* script */
const __vue_script__$3 = _class$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "input",
    class: {
      'input--has-error': !!_vm.error
    }
  }, [_vm.label ? _c('label', {
    staticClass: "input--label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "input--description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "input--html-element"
  }, [_c('input', {
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
    staticClass: "input--error-icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
    }
  })])]) : _vm._e()]), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "input--error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input--description-below",
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
    staticClass: "checkbox--root"
  }, [_vm.upperDescription ? _c('p', {
    staticClass: "input--description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "checkbox",
    class: {
      'input--has-error': !!_vm.error,
      '--checked': _vm.value
    }
  }, [_c('input', {
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
    staticClass: "checkbox--handle-box",
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
    staticClass: "checkbox--label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "input--description-below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()])]);
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

var _dec$5, _dec2$4, _dec3$2, _class2$5, _class3$3, _descriptor$4, _descriptor2$3, _temp$4;

let _class$5 = (_dec$5 = Component({}), _dec2$4 = Prop({
  type: String,
  required: false
}), _dec3$2 = Prop({
  type: Boolean,
  required: false
}), _dec$5(_class2$5 = (_class3$3 = (_temp$4 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "text", _descriptor$4, this);

    _initializerDefineProperty(this, "compact", _descriptor2$3, this);
  }

}, _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class3$3.prototype, "text", [_dec2$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$3 = _applyDecoratedDescriptor(_class3$3.prototype, "compact", [_dec3$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$3)) || _class2$5);

/* script */
const __vue_script__$5 = _class$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "divider--root"
  }, [_vm.text ? _c('div', {
    staticClass: "divider divider--with-text"
  }, [_c('div'), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('div')]) : _c('div', {
    staticClass: "divider",
    class: {
      'divider--compact': _vm.compact
    }
  })]);
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

var _dec$6, _dec2$5, _dec3$3, _class2$6, _class3$4, _descriptor$5, _descriptor2$4, _temp$5;

let _class$6 = (_dec$6 = Component({
  name: 'FLForm',
  components: {
    FLIcon: __vue_component__
  }
}), _dec2$5 = Prop({
  type: String,
  required: true
}), _dec3$3 = Prop({
  type: Boolean,
  required: false,
  default: false
}), _dec$6(_class2$6 = (_class3$4 = (_temp$5 = class _class3 extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "name", _descriptor$5, this);

    _initializerDefineProperty(this, "showError", _descriptor2$4, this);

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
      if (callback.error && this.form) {
        this.form.error = callback.error.type;
        this.form.childErrors = callback.error.fields;
      }
    });
    this.form.loading = false;
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

}, _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class3$4.prototype, "name", [_dec2$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$4 = _applyDecoratedDescriptor(_class3$4.prototype, "showError", [_dec3$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$4)) || _class2$6);

/* script */
const __vue_script__$6 = _class$6;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "form--root"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "novalidate": "true"
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
  }) : _vm._e()], 2)]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = function (inject) {
  if (!inject) return;
  inject("data-v-6114e968_0", {
    source: ".form-error[data-v-6114e968]{display:flex;align-items:center}.form-error .icon--root[data-v-6114e968]{font-size:20px}.form-error>span[data-v-6114e968]{margin-left:6px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$6 = "data-v-6114e968";
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

var _dec$7, _dec2$6, _class2$7, _class3$5, _descriptor$6, _temp$6;

let _class$7 = (_dec$7 = Component({
  components: {
    Icon: __vue_component__
  }
}), _dec2$6 = Prop({
  type: Array,
  required: true
}), _dec$7(_class2$7 = (_class3$5 = (_temp$6 = class _class3 extends __vue_component__$3 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "options", _descriptor$6, this);
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

}, _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class3$5.prototype, "options", [_dec2$6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$5)) || _class2$7);

/* script */
const __vue_script__$7 = _class$7;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "select--root"
  }, [_c('div', {
    staticClass: "select",
    class: {
      'select--has-error': !!_vm.error
    }
  }, [_vm.label ? _c('label', {
    staticClass: "select--label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "select--description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "select--html-element"
  }, [_c('select', {
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
      staticClass: "select--option",
      class: {
        '--is-selected': option.value === _vm.value
      },
      domProps: {
        "value": option.value,
        "textContent": _vm._s(option.text)
      }
    });
  }), 0), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "select--error-icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "select--icon"
  }, [_c('svg', [_c('path', {
    attrs: {
      "d": "M11.9,10c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9,15.7c-0.4,0.4-1,0.4-1.4,0l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4\ns1-0.4,1.4,0l3.6,3.6C8.3,13.6,11.9,10,11.9,10z M11.9,6L8.3,2.4L4.7,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.3-4.3\nc0.4-0.4,1-0.4,1.4,0l4.3,4.3c0.4,0.4,0.4,1,0,1.4C12.9,6.4,12.3,6.4,11.9,6z"
    }
  })])])]), _vm._v(" "), _vm.error ? _c('span', {
    staticClass: "select--error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "select--description-below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()])]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = undefined;
/* scoped */

const __vue_scope_id__$7 = undefined;
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var _dec$8, _class2$8;

let _class$8 = (_dec$8 = Component({
  components: {}
}), _dec$8(_class2$8 = class extends __vue_component__$3 {}) || _class2$8);

/* script */
const __vue_script__$8 = _class$8;
/* template */

var __vue_render__$8 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "textarea--root"
  }, [_c('div', {
    staticClass: "textarea",
    class: {
      'textarea--has-error': !!_vm.error
    }
  }, [_vm.label ? _c('label', {
    staticClass: "textarea--label",
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _vm.upperDescription ? _c('p', {
    staticClass: "textarea--description",
    domProps: {
      "textContent": _vm._s(_vm.upperDescription)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "textarea--html-element"
  }, [_c('textarea', {
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
    staticClass: "textarea--error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.lowerDescription ? _c('p', {
    staticClass: "textarea--description-below",
    domProps: {
      "innerHTML": _vm._s(_vm.lowerDescription)
    }
  }) : _vm._e()])]);
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

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FLButton: __vue_component__$2,
  FLCheckbox: __vue_component__$4,
  FLDivider: __vue_component__$5,
  FLForm: __vue_component__$6,
  FLIcon: __vue_component__,
  FLInput: __vue_component__$3,
  FLLoading: __vue_component__$1,
  FLSelect: __vue_component__$7,
  FLTextarea: __vue_component__$8
});

// Import vue components
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
export { __vue_component__$2 as FLButton, __vue_component__$4 as FLCheckbox, __vue_component__$5 as FLDivider, __vue_component__$6 as FLForm, __vue_component__ as FLIcon, __vue_component__$3 as FLInput, __vue_component__$1 as FLLoading, __vue_component__$7 as FLSelect, __vue_component__$8 as FLTextarea };
