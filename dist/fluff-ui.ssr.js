'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vuePropertyDecorator=require('vue-property-decorator');function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

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
}var _dec, _dec2, _class2, _class3, _descriptor, _temp;

var _class = (_dec = vuePropertyDecorator.Component({
  name: 'FLIcon'
}), _dec2 = vuePropertyDecorator.Prop({
  type: String,
  required: true
}), _dec(_class2 = (_class3 = (_temp = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "i", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  return _class3;
}(vuePropertyDecorator.Vue), _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "i", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3)) || _class2);function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = _class;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "icon--root"
  }, [_vm._ssrNode("<i" + _vm._ssrClass("icon", "icon-" + _vm.i) + " data-v-18110270></i>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-18110270_0", {
    source: ".icon-root[data-v-18110270]{display:inline-block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-18110270";
/* module identifier */

var __vue_module_identifier__ = "data-v-18110270";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var _dec$1, _dec2$1, _class2$1, _descriptor$1, _descriptor2, _temp$1;

var _class$1 = (_dec$1 = vuePropertyDecorator.Prop({
  type: String,
  required: false
}), _dec2$1 = vuePropertyDecorator.Prop(String), (_class2$1 = (_temp$1 = /*#__PURE__*/function (_Vue) {
  _inherits(_class2, _Vue);

  var _super = _createSuper(_class2);

  function _class2() {
    var _this;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "color", _descriptor$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "size", _descriptor2, _assertThisInitialized(_this));

    return _this;
  }

  return _class2;
}(vuePropertyDecorator.Vue), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "color", [_dec$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2$1.prototype, "size", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$1));/* script */
var __vue_script__$1 = _class$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
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
  }, []);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-562fc448";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var _dec$2, _dec2$2, _dec3, _dec4, _dec5, _class2$2, _class3$1, _descriptor$2, _descriptor2$1, _descriptor3, _descriptor4, _temp$2;

var _class$2 = (_dec$2 = vuePropertyDecorator.Component({
  name: 'FLButton',
  components: {
    Icon: __vue_component__,
    Loading: __vue_component__$1
  }
}), _dec2$2 = vuePropertyDecorator.Prop({
  type: [String, Object],
  default: false
}), _dec3 = vuePropertyDecorator.Prop(String), _dec4 = vuePropertyDecorator.Prop(String), _dec5 = vuePropertyDecorator.Prop({
  type: String,
  default: 'left'
}), _dec$2(_class2$2 = (_class3$1 = (_temp$2 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "loading", _descriptor$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "size", _descriptor2$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "icon", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "iconAlign", _descriptor4, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
    key: "hasTextContent",

    /**
     * Returns true if the button has text content.
     *
     * @returns {boolean}
     */
    get: function get() {
      return !!this.$slots.default;
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Vue), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class3$1.prototype, "loading", [_dec2$2], {
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
})), _class3$1)) || _class2$2);var __vue_script__$2 = _class$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "button",
    class: (_obj = {
      'button--loading-template': _vm.loading && _vm.loading.mode === 'add' && !_vm.icon,
      'button--loading': _typeof(_vm.loading) === 'object' ? _vm.loading.loading : _vm.loading,
      'button--no-text': _vm.hasTextContent
    }, _obj["button--" + (_vm.size || 'default')] = true, _obj["button--icon-align-" + _vm.iconAlign] = true, _obj)
  }, [_vm._ssrNode("<button class=\"button__element\">", "</button>", [(_typeof(_vm.loading) === 'object' ? _vm.loading.loading : _vm.loading) ? _vm._ssrNode("<div class=\"button__loading\">", "</div>", [_c('Loading')], 1) : _vm.icon ? _vm._ssrNode("<div class=\"button__icon\">", "</div>", [_c('Icon', {
    attrs: {
      "i": _vm.icon
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"button__text\">", "</span>", [_vm._t("default")], 2)], 2)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-56e053d6";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);var _dec$3, _dec2$3, _dec3$1, _dec4$1, _dec5$1, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class2$3, _class3$2, _descriptor$3, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp$3;

var _class$3 = (_dec$3 = vuePropertyDecorator.Component({
  name: 'FLInput',
  components: {}
}), _dec2$3 = vuePropertyDecorator.Prop(), _dec3$1 = vuePropertyDecorator.Prop(), _dec4$1 = vuePropertyDecorator.Prop({
  required: true
}), _dec5$1 = vuePropertyDecorator.Prop(), _dec6 = vuePropertyDecorator.Prop(), _dec7 = vuePropertyDecorator.Prop(), _dec8 = vuePropertyDecorator.Prop(), _dec9 = vuePropertyDecorator.Prop(), _dec10 = vuePropertyDecorator.Prop(), _dec11 = vuePropertyDecorator.Prop(), _dec12 = vuePropertyDecorator.Prop(), _dec13 = vuePropertyDecorator.Prop(), _dec14 = vuePropertyDecorator.Prop(), _dec15 = vuePropertyDecorator.Prop(), _dec16 = vuePropertyDecorator.Prop(Number), _dec$3(_class2$3 = (_class3$2 = (_temp$3 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "id", _descriptor$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "form", _descriptor2$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "value", _descriptor3$1, _assertThisInitialized(_this));

    _this.locError = null;

    _initializerDefineProperty(_this, "type", _descriptor4$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "label", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "description", _descriptor6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionAbove", _descriptor7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionBelow", _descriptor8, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "placeholder", _descriptor9, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "errors", _descriptor10, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "autocomplete", _descriptor11, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "disabled", _descriptor12, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "autofocus", _descriptor13, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "readonly", _descriptor14, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "stagger", _descriptor15, _assertThisInitialized(_this));

    _this.timeout = setTimeout(function () {}, 0);
    return _this;
  }

  _createClass(_class3, [{
    key: "onInput",
    value: function onInput(value) {
      var _this2 = this;

      if (this.disabled) {
        /* Do not allow input if input should be disabled */
        return;
      }

      if (this.type === 'number') {
        value = parseInt(value);
      }

      if (this.stagger) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          _this2.$emit('staggered-input', value, _this2.id);
        }, this.stagger);
      }

      this.$emit('input', value, this.id);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      if (this.type === 'email') {
        if (this.value.length && !this.validateEmail(this.value)) {
          this.locError = 'invalid_email_address';
        } else {
          this.locError = null;
        }
      }

      this.$emit('blur');
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }, {
    key: "upperDescription",
    get: function get() {
      return this.description || this.descriptionAbove;
    }
  }, {
    key: "lowerDescription",
    get: function get() {
      return this.descriptionBelow;
    }
  }, {
    key: "error",
    get: function get() {
      var _this3 = this;

      var error = null;

      if (this.locError) {
        error = this.locError;
      } else if (this.form && this.form.childErrors) {
        var e = this.form.childErrors.find(function (error) {
          return error.path === _this3.id;
        });

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
  }]);

  return _class3;
}(vuePropertyDecorator.Vue), _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class3$2.prototype, "id", [_dec2$3], {
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
})), _class3$2)) || _class2$3);/* script */
var __vue_script__$3 = _class$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "input",
    class: {
      'input--has-error': !!_vm.error
    }
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"input--label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"input--description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div class=\"input--html-element\"><input" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("type", _vm.type || 'text') + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("placeholder", _vm.placeholder === undefined ? _vm.label : _vm.placeholder) + _vm._ssrAttr("autocomplete", _vm.autocomplete) + _vm._ssrAttr("autofocus", _vm.autofocus) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + "> " + (_vm.error ? "<span class=\"input--error-icon\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z\"></path></svg></span>" : "<!---->") + "</div> " + (_vm.error ? "<span class=\"input--error\">" + _vm._ssrEscape(_vm._s(_vm.error)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input--description-below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-488d007c";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);var _dec$4, _class2$4;

var _class$4 = (_dec$4 = vuePropertyDecorator.Component({
  name: 'FLCheckbox',
  components: {
    Icon: __vue_component__
  }
}), _dec$4(_class2$4 = /*#__PURE__*/function (_Input) {
  _inherits(_class2, _Input);

  var _super = _createSuper(_class2);

  function _class2() {
    _classCallCheck(this, _class2);

    return _super.apply(this, arguments);
  }

  return _class2;
}(__vue_component__$3)) || _class2$4);/* script */
var __vue_script__$4 = _class$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkbox--root"
  }, [_vm._ssrNode((_vm.upperDescription ? "<p class=\"input--description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div" + _vm._ssrClass("checkbox", {
    'input--has-error': !!_vm.error,
    '--checked': _vm.value
  }) + "><input" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + " type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.value) + "> <label" + _vm._ssrAttr("for", _vm.id) + " class=\"checkbox--handle-box\"><svg viewBox=\"0 0 64 64\"><path d=\"M60.6,12.4c-1.3-1.3-3.3-1.3-4.6,0L24.2,44.2c-0.8,0.8-2.3,0.8-3.2,0l-13-13c-1.3-1.3-3.3-1.3-4.6,0c-1.3,1.3-1.3,3.3,0,4.6\nL18,50.4l0,0l0.4,0.4c1.2,1.2,2.7,1.7,4.2,1.7c1.5,0,3.1-0.6,4.2-1.7l0.4-0.4l0,0L60.6,17C61.8,15.8,61.8,13.7,60.6,12.4z\"></path></svg></label> " + (_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"checkbox--label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input--description-below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-517364d3";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);var _dec$5, _dec2$4, _dec3$2, _class2$5, _class3$3, _descriptor$4, _descriptor2$3, _temp$4;

var _class$5 = (_dec$5 = vuePropertyDecorator.Component({}), _dec2$4 = vuePropertyDecorator.Prop({
  type: String,
  required: false
}), _dec3$2 = vuePropertyDecorator.Prop({
  type: Boolean,
  required: false
}), _dec$5(_class2$5 = (_class3$3 = (_temp$4 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "text", _descriptor$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "compact", _descriptor2$3, _assertThisInitialized(_this));

    return _this;
  }

  return _class3;
}(vuePropertyDecorator.Vue), _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class3$3.prototype, "text", [_dec2$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$3 = _applyDecoratedDescriptor(_class3$3.prototype, "compact", [_dec3$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$3)) || _class2$5);/* script */
var __vue_script__$5 = _class$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "divider--root"
  }, [_vm._ssrNode(_vm.text ? "<div class=\"divider divider--with-text\"><div></div> <div>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div> <div></div></div>" : "<div" + _vm._ssrClass("divider", {
    'divider--compact': _vm.compact
  }) + "></div>")]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-4b51f8cb";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);var _dec$6, _dec2$5, _dec3$3, _class2$6, _class3$4, _descriptor$5, _descriptor2$4, _temp$5;

var _class$6 = (_dec$6 = vuePropertyDecorator.Component({
  name: 'FLForm',
  components: {
    FLIcon: __vue_component__
  }
}), _dec2$5 = vuePropertyDecorator.Prop({
  type: String,
  required: true
}), _dec3$3 = vuePropertyDecorator.Prop({
  type: Boolean,
  required: false,
  default: false
}), _dec$6(_class2$6 = (_class3$4 = (_temp$5 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "name", _descriptor$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "showError", _descriptor2$4, _assertThisInitialized(_this));

    _this.form = null;
    return _this;
  }

  _createClass(_class3, [{
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      if (!this.form) {
        return;
      }

      this.form.error = null;
      this.form.childErrors = [];
      this.form.loading = true;
      this.$emit('submit', function (callback) {
        if (callback.error && _this2.form) {
          _this2.form.error = callback.error.type;
          _this2.form.childErrors = callback.error.fields;
        }
      });
      this.form.loading = false;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.form = this.generateForm();
    }
  }, {
    key: "generateForm",
    value: function generateForm() {
      return {
        loading: false,
        done: false,
        error: null,
        childErrors: []
      };
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Vue), _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class3$4.prototype, "name", [_dec2$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$4 = _applyDecoratedDescriptor(_class3$4.prototype, "showError", [_dec3$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$4)) || _class2$6);/* script */
var __vue_script__$6 = _class$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "form--root"
  }, [_vm._ssrNode("<form novalidate=\"novalidate\" class=\"form\" data-v-6114e968>", "</form>", [_vm._ssrNode((_vm.showError && _vm.form.error ? "<div class=\"form--error\" data-v-6114e968>" + _vm._ssrEscape(_vm._s(_vm.form.error)) + "</div>" : "<!---->") + " "), _vm.form ? _vm._t("form", null, {
    "form": _vm.form
  }) : _vm._e()], 2)]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6114e968_0", {
    source: ".form-error[data-v-6114e968]{display:flex;align-items:center}.form-error .icon--root[data-v-6114e968]{font-size:20px}.form-error>span[data-v-6114e968]{margin-left:6px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-6114e968";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-6114e968";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);var _dec$7, _dec2$6, _class2$7, _class3$5, _descriptor$6, _temp$6;

var _class$7 = (_dec$7 = vuePropertyDecorator.Component({
  components: {
    Icon: __vue_component__
  }
}), _dec2$6 = vuePropertyDecorator.Prop({
  type: Array,
  required: true
}), _dec$7(_class2$7 = (_class3$5 = (_temp$6 = /*#__PURE__*/function (_Input) {
  _inherits(_class3, _Input);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "options", _descriptor$6, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
    key: "onInput",
    value: function onInput(value) {
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
  }]);

  return _class3;
}(__vue_component__$3), _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class3$5.prototype, "options", [_dec2$6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$5)) || _class2$7);/* script */
var __vue_script__$7 = _class$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "select--root"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("select", {
    'select--has-error': !!_vm.error
  }) + ">" + (_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"select--label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"select--description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div class=\"select--html-element\"><select" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("autofocus", _vm.autofocus) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + ">" + _vm._ssrList(_vm.options, function (option, i) {
    return "<option" + _vm._ssrAttr("value", option.value) + _vm._ssrClass("select--option", {
      '--is-selected': option.value === _vm.value
    }) + ">" + _vm._ssrEscape(_vm._s(option.text)) + "</option>";
  }) + "</select> " + (_vm.error ? "<span class=\"select--error-icon\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z\"></path></svg></span>" : "<!---->") + " <span class=\"select--icon\"><svg><path d=\"M11.9,10c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9,15.7c-0.4,0.4-1,0.4-1.4,0l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4\ns1-0.4,1.4,0l3.6,3.6C8.3,13.6,11.9,10,11.9,10z M11.9,6L8.3,2.4L4.7,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.3-4.3\nc0.4-0.4,1-0.4,1.4,0l4.3,4.3c0.4,0.4,0.4,1,0,1.4C12.9,6.4,12.3,6.4,11.9,6z\"></path></svg></span></div> " + (_vm.error ? "<span class=\"select--error\">" + _vm._ssrEscape(_vm._s(_vm.error)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"select--description-below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = "data-v-6cdc0afa";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);var _dec$8, _class2$8;

var _class$8 = (_dec$8 = vuePropertyDecorator.Component({
  components: {}
}), _dec$8(_class2$8 = /*#__PURE__*/function (_Input) {
  _inherits(_class2, _Input);

  var _super = _createSuper(_class2);

  function _class2() {
    _classCallCheck(this, _class2);

    return _super.apply(this, arguments);
  }

  return _class2;
}(__vue_component__$3)) || _class2$8);/* script */
var __vue_script__$8 = _class$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "textarea--root"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("textarea", {
    'textarea--has-error': !!_vm.error
  }) + ">" + (_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"textarea--label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"textarea--description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div class=\"textarea--html-element\"><textarea" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("placeholder", _vm.placeholder === undefined ? _vm.label : _vm.placeholder) + _vm._ssrAttr("autocomplete", _vm.autocomplete) + _vm._ssrAttr("autofocus", _vm.autofocus) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + "></textarea></div> " + (_vm.error ? "<span class=\"textarea--error\">" + _vm._ssrEscape(_vm._s(_vm.error)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"textarea--description-below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-c2cee1a8";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);var components=/*#__PURE__*/Object.freeze({__proto__:null,FLButton: __vue_component__$2,FLCheckbox: __vue_component__$4,FLDivider: __vue_component__$5,FLForm: __vue_component__$6,FLIcon: __vue_component__,FLInput: __vue_component__$3,FLLoading: __vue_component__$1,FLSelect: __vue_component__$7,FLTextarea: __vue_component__$8});// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installFluffUi(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.FLButton=__vue_component__$2;exports.FLCheckbox=__vue_component__$4;exports.FLDivider=__vue_component__$5;exports.FLForm=__vue_component__$6;exports.FLIcon=__vue_component__;exports.FLInput=__vue_component__$3;exports.FLLoading=__vue_component__$1;exports.FLSelect=__vue_component__$7;exports.FLTextarea=__vue_component__$8;exports.default=plugin;