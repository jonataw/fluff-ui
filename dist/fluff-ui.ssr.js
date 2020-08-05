'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var _Vue=_interopDefault(require('vue')),Datepicker=_interopDefault(require('vue2-datepicker')),vuePropertyDecorator=require('vue-property-decorator');function _typeof(obj) {
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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
}/* script */
var __vue_script__ = _class;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('i', {
    staticClass: "icon",
    class: "icon-" + _vm.i,
    on: {
      "click": function click(e) {
        return _vm.$emit('click', e);
      }
    }
  }, []);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-6819a466";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);var _dec$1, _dec2$1, _dec3, _class2$1, _class3$1, _descriptor$1, _descriptor2, _temp$1;

var _class$1 = (_dec$1 = vuePropertyDecorator.Component({
  name: 'FLLoading'
}), _dec2$1 = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec3 = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec$1(_class2$1 = (_class3$1 = (_temp$1 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "color", _descriptor$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "size", _descriptor2, _assertThisInitialized(_this));

    return _this;
  }

  return _class3;
}(vuePropertyDecorator.Vue), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class3$1.prototype, "color", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class3$1.prototype, "size", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$1)) || _class2$1);/* script */
var __vue_script__$1 = _class$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "loading",
    class: (_obj = {}, _obj["loading--size-" + _vm.size] = true, _obj["loading--color-" + _vm.color] = true, _obj)
  }, []);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-130a604c";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var _dec$2, _dec2$2, _dec3$1, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2$2, _class3$2, _descriptor$2, _descriptor2$1, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp$2;

var _class$2 = (_dec$2 = vuePropertyDecorator.Component({
  name: 'FLButton',
  components: {
    Icon: __vue_component__,
    Loading: __vue_component__$1
  }
}), _dec2$2 = vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), _dec3$1 = vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), _dec4 = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec5 = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec6 = vuePropertyDecorator.Prop({
  type: String,
  default: 'submit'
}), _dec7 = vuePropertyDecorator.Prop(String), _dec8 = vuePropertyDecorator.Prop(Boolean), _dec9 = vuePropertyDecorator.Prop({
  type: String,
  default: 'left'
}), _dec$2(_class2$2 = (_class3$2 = (_temp$2 = /*#__PURE__*/function (_Vue) {
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

    _initializerDefineProperty(_this, "inline", _descriptor2$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "size", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "color", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "type", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "icon", _descriptor6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "disabled", _descriptor7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "iconAlign", _descriptor8, _assertThisInitialized(_this));

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
}(vuePropertyDecorator.Vue), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class3$2.prototype, "loading", [_dec2$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$1 = _applyDecoratedDescriptor(_class3$2.prototype, "inline", [_dec3$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class3$2.prototype, "size", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class3$2.prototype, "color", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class3$2.prototype, "type", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class3$2.prototype, "icon", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class3$2.prototype, "disabled", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class3$2.prototype, "iconAlign", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$2)) || _class2$2);/* script */
var __vue_script__$2 = _class$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "button",
    class: (_obj = {
      'button--inline': _vm.inline,
      'button--disabled': _vm.disabled,
      'button--loading': _vm.loading,
      'button--icon': !!_vm.icon,
      'button--text': _vm.hasTextContent
    }, _obj["button--size-" + _vm.size] = true, _obj["button--color-" + _vm.color] = true, _obj["button--icon-align-" + _vm.iconAlign] = !!_vm.icon, _obj)
  }, [_vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"button__element\">", "</button>", [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_vm.loading ? _c('div', {
    staticClass: "button__loading"
  }, [_c('Loading', {
    attrs: {
      "size": 'button-' + _vm.size,
      "color": "button"
    }
  })], 1) : _vm._e()]), _vm._ssrNode(" "), _vm.icon ? _vm._ssrNode("<div class=\"button__icon\">", "</div>", [_c('Icon', {
    attrs: {
      "i": _vm.icon
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.hasTextContent ? _vm._ssrNode("<span class=\"button__text\">", "</span>", [_vm._t("default")], 2) : _vm._e()], 2)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-2d67a21a";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);var _dec$3, _dec2$3, _dec3$2, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10, _dec11, _class2$3, _class3$3, _descriptor$3, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9, _descriptor10, _temp$3;

var _class$3 = (_dec$3 = vuePropertyDecorator.Component({
  name: 'FLInputMixin',
  components: {}
}), _dec2$3 = vuePropertyDecorator.Prop(), _dec3$2 = vuePropertyDecorator.Prop(), _dec4$1 = vuePropertyDecorator.Prop({
  required: true
}), _dec5$1 = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec6$1 = vuePropertyDecorator.Prop(), _dec7$1 = vuePropertyDecorator.Prop(), _dec8$1 = vuePropertyDecorator.Prop(), _dec9$1 = vuePropertyDecorator.Prop(), _dec10 = vuePropertyDecorator.Prop(), _dec11 = vuePropertyDecorator.Prop(), _dec$3(_class2$3 = (_class3$3 = (_temp$3 = /*#__PURE__*/function (_Vue) {
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

    _initializerDefineProperty(_this, "size", _descriptor4$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "label", _descriptor5$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "error", _descriptor6$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "errors", _descriptor7$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "disabled", _descriptor8$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "autofocus", _descriptor9, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "readonly", _descriptor10, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
    key: "onInput",
    value: function onInput(value) {
      if (this.disabled) {
        /* Do not allow input if input should be disabled */
        return;
      }

      this.$emit('input', value, this.id);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.$emit('blur');
    }
  }, {
    key: "parsedError",
    get: function get() {
      var _this2 = this;

      var error = null;

      if (this.error) {
        error = this.error;
      }

      if (this.locError) {
        error = this.locError;
      } else if (this.form && this.form.childErrors) {
        var e = this.form.childErrors.find(function (error) {
          return error.path === _this2.id;
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
}(vuePropertyDecorator.Vue), _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class3$3.prototype, "id", [_dec2$3], {
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
}), _descriptor4$1 = _applyDecoratedDescriptor(_class3$3.prototype, "size", [_dec5$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5$1 = _applyDecoratedDescriptor(_class3$3.prototype, "label", [_dec6$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6$1 = _applyDecoratedDescriptor(_class3$3.prototype, "error", [_dec7$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7$1 = _applyDecoratedDescriptor(_class3$3.prototype, "errors", [_dec8$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8$1 = _applyDecoratedDescriptor(_class3$3.prototype, "disabled", [_dec9$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class3$3.prototype, "autofocus", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class3$3.prototype, "readonly", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$3)) || _class2$3);/* script */
var __vue_script__$3 = _class$3;
/* template */

/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-2c9eca28";
/* functional template */

var __vue_is_functional_template__$3 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);var _dec$4, _dec2$4, _dec3$3, _class2$4, _class3$4, _descriptor$4, _descriptor2$3, _temp$4;

var _class$4 = (_dec$4 = vuePropertyDecorator.Component({
  name: 'FLCheckbox',
  components: {
    Icon: __vue_component__
  }
}), _dec2$4 = vuePropertyDecorator.Prop(), _dec3$3 = vuePropertyDecorator.Prop(), _dec$4(_class2$4 = (_class3$4 = (_temp$4 = /*#__PURE__*/function (_Mixins) {
  _inherits(_class3, _Mixins);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "description", _descriptor$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionBelow", _descriptor2$3, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
    key: "lowerDescription",
    get: function get() {
      return this.description || this.descriptionBelow;
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Mixins(__vue_component__$3)), _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class3$4.prototype, "description", [_dec2$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$3 = _applyDecoratedDescriptor(_class3$4.prototype, "descriptionBelow", [_dec3$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$4)) || _class2$4);/* script */
var __vue_script__$4 = _class$4;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkbox",
    class: {
      'checkbox--error': !!_vm.parsedError,
      'checkbox--checked': _vm.value
    }
  }, [_vm._ssrNode("<div class=\"checkbox__inner\"><input" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + " type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.value) + " class=\"checkbox__element\"> <label" + _vm._ssrAttr("for", _vm.id) + " class=\"checkbox__fill_box\"><svg viewBox=\"0 0 64 64\"><path d=\"M60.6,12.4c-1.3-1.3-3.3-1.3-4.6,0L24.2,44.2c-0.8,0.8-2.3,0.8-3.2,0l-13-13c-1.3-1.3-3.3-1.3-4.6,0c-1.3,1.3-1.3,3.3,0,4.6\nL18,50.4l0,0l0.4,0.4c1.2,1.2,2.7,1.7,4.2,1.7c1.5,0,3.1-0.6,4.2-1.7l0.4-0.4l0,0L60.6,17C61.8,15.8,61.8,13.7,60.6,12.4z\"></path></svg></label> " + (_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"checkbox__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + "</div> " + (_vm.lowerDescription ? "<p class=\"input__description_below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-7e7234ec";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);var _dec$5, _dec2$5, _dec3$4, _class2$5, _class3$5, _descriptor$5, _descriptor2$4, _temp$5;

var _class$5 = (_dec$5 = vuePropertyDecorator.Component({
  name: 'FLChip',
  components: {
    Icon: __vue_component__
  }
}), _dec2$5 = vuePropertyDecorator.Prop({
  type: String,
  required: false
}), _dec3$4 = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec$5(_class2$5 = (_class3$5 = (_temp$5 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "icon", _descriptor$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "color", _descriptor2$4, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
    key: "hasTextContent",

    /**
     * Returns true if the chip has text content.
     *
     * @returns {boolean}
     */
    get: function get() {
      return !!this.$slots.default;
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Vue), _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class3$5.prototype, "icon", [_dec2$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$4 = _applyDecoratedDescriptor(_class3$5.prototype, "color", [_dec3$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$5)) || _class2$5);/* script */
var __vue_script__$5 = _class$5;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "chip",
    class: (_obj = {}, _obj["chip--color-" + _vm.color] = true, _obj)
  }, [_vm.icon ? _vm._ssrNode("<div class=\"chip__icon\">", "</div>", [_c('Icon', {
    attrs: {
      "i": _vm.icon
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.hasTextContent ? _vm._ssrNode("<span class=\"chip__text\">", "</span>", [_vm._t("default")], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-6c6c33fb";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);var _dec$6, _dec2$6, _class2$6, _class3$6, _descriptor$6, _temp$6;

var _class$6 = (_dec$6 = vuePropertyDecorator.Component({
  name: 'FLDivider'
}), _dec2$6 = vuePropertyDecorator.Prop({
  type: String,
  required: false
}), _dec$6(_class2$6 = (_class3$6 = (_temp$6 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "text", _descriptor$6, _assertThisInitialized(_this));

    return _this;
  }

  return _class3;
}(vuePropertyDecorator.Vue), _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class3$6.prototype, "text", [_dec2$6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$6)) || _class2$6);/* script */
var __vue_script__$6 = _class$6;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.text ? _c('div', {
    staticClass: "divider divider--text"
  }, [_vm._ssrNode("<div></div> <div>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div> <div></div>")], 2) : _c('div', {
    staticClass: "divider"
  }, []);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = "data-v-4a098918";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);var _dec$7, _dec2$7, _dec3$5, _dec4$2, _dec5$2, _class2$7, _class3$7, _descriptor$7, _descriptor2$5, _descriptor3$2, _descriptor4$2, _temp$7;

var _class$7 = (_dec$7 = vuePropertyDecorator.Component({
  name: 'FLForm',
  components: {
    FLIcon: __vue_component__
  }
}), _dec2$7 = vuePropertyDecorator.Prop({
  type: String,
  required: true
}), _dec3$5 = vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), _dec4$2 = vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), _dec5$2 = vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), _dec$7(_class2$7 = (_class3$7 = (_temp$7 = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "name", _descriptor$7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "htmlValidate", _descriptor2$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "scrollToTop", _descriptor3$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "showError", _descriptor4$2, _assertThisInitialized(_this));

    _this.form = null;
    return _this;
  }

  _createClass(_class3, [{
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      if (!this.form || this.form && this.form.loading) {
        return;
      }

      this.form.error = null;
      this.form.childErrors = [];
      this.form.loading = true;
      this.$emit('submit', function (callback) {
        if (_this2.form) {
          if (callback.error) {
            if (_this2.scrollToTop === true || _typeof(_this2.scrollToTop) === 'object' && _this2.scrollToTop.error) {
              _this2.scroll();
            }

            _this2.form.error = callback.error.type;
            _this2.form.childErrors = callback.error.fields;
          } else {
            if (_this2.scrollToTop === true || _typeof(_this2.scrollToTop) === 'object' && _this2.scrollToTop.complete) {
              _this2.scroll();
            }
          }

          _this2.form.loading = false;
        }
      });
    }
  }, {
    key: "scroll",
    value: function scroll() {
      if (this.element) {
        window.scrollTo(0, this.element.offsetTop);
      }
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
  }, {
    key: "element",
    get: function get() {
      return document.getElementById(this.name);
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Vue), _temp$7), (_descriptor$7 = _applyDecoratedDescriptor(_class3$7.prototype, "name", [_dec2$7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$5 = _applyDecoratedDescriptor(_class3$7.prototype, "htmlValidate", [_dec3$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$2 = _applyDecoratedDescriptor(_class3$7.prototype, "scrollToTop", [_dec4$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$2 = _applyDecoratedDescriptor(_class3$7.prototype, "showError", [_dec5$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$7)) || _class2$7);function createInjectorSSR(context) {
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
var __vue_script__$7 = _class$7;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    staticClass: "form",
    attrs: {
      "id": _vm.name,
      "novalidate": !_vm.htmlValidate
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.onSubmit($event);
      }
    }
  }, [_vm._ssrNode((_vm.showError && _vm.form.error ? "<div class=\"form--error\" data-v-f5052898>" + _vm._ssrEscape(_vm._s(_vm.form.error)) + "</div>" : "<!---->") + " "), _vm.form ? _vm._t("form", null, {
    "form": _vm.form
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-f5052898_0", {
    source: ".form-error[data-v-f5052898]{display:flex;align-items:center}.form-error .icon[data-v-f5052898]{font-size:20px}.form-error>span[data-v-f5052898]{margin-left:6px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = "data-v-f5052898";
/* module identifier */

var __vue_module_identifier__$7 = "data-v-f5052898";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);var _dec$8, _dec2$8, _dec3$6, _dec4$3, _dec5$3, _dec6$2, _dec7$2, _dec8$2, _dec9$2, _dec10$1, _dec11$1, _dec12, _dec13, _class2$8, _class3$8, _descriptor$8, _descriptor2$6, _descriptor3$3, _descriptor4$3, _descriptor5$2, _descriptor6$2, _descriptor7$2, _descriptor8$2, _descriptor9$1, _descriptor10$1, _descriptor11, _descriptor12, _temp$8;

var _class$8 = (_dec$8 = vuePropertyDecorator.Component({
  name: 'FLInput',
  components: {}
}), _dec2$8 = vuePropertyDecorator.Prop({
  default: 'text'
}), _dec3$6 = vuePropertyDecorator.Prop(), _dec4$3 = vuePropertyDecorator.Prop(), _dec5$3 = vuePropertyDecorator.Prop(), _dec6$2 = vuePropertyDecorator.Prop(), _dec7$2 = vuePropertyDecorator.Prop(), _dec8$2 = vuePropertyDecorator.Prop(), _dec9$2 = vuePropertyDecorator.Prop({
  default: false
}), _dec10$1 = vuePropertyDecorator.Prop(), _dec11$1 = vuePropertyDecorator.Prop(), _dec12 = vuePropertyDecorator.Prop(), _dec13 = vuePropertyDecorator.Prop(Number), _dec$8(_class2$8 = (_class3$8 = (_temp$8 = /*#__PURE__*/function (_Mixins) {
  _inherits(_class3, _Mixins);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "type", _descriptor$8, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "description", _descriptor2$6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionAbove", _descriptor3$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionBelow", _descriptor4$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "placeholder", _descriptor5$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "prefix", _descriptor6$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "suffix", _descriptor7$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "inline", _descriptor8$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "min", _descriptor9$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "max", _descriptor10$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "autocomplete", _descriptor11, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "stagger", _descriptor12, _assertThisInitialized(_this));

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
        if (!isNaN(parseInt(value))) {
          value = parseInt(value);
        }
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
  }, {
    key: "validateEmail",
    value: function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }, {
    key: "validateNumber",
    value: function validateNumber(number) {
      return /^\d+$/.test(number);
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
  }]);

  return _class3;
}(vuePropertyDecorator.Mixins(__vue_component__$3)), _temp$8), (_descriptor$8 = _applyDecoratedDescriptor(_class3$8.prototype, "type", [_dec2$8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$6 = _applyDecoratedDescriptor(_class3$8.prototype, "description", [_dec3$6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$3 = _applyDecoratedDescriptor(_class3$8.prototype, "descriptionAbove", [_dec4$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$3 = _applyDecoratedDescriptor(_class3$8.prototype, "descriptionBelow", [_dec5$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5$2 = _applyDecoratedDescriptor(_class3$8.prototype, "placeholder", [_dec6$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6$2 = _applyDecoratedDescriptor(_class3$8.prototype, "prefix", [_dec7$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7$2 = _applyDecoratedDescriptor(_class3$8.prototype, "suffix", [_dec8$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8$2 = _applyDecoratedDescriptor(_class3$8.prototype, "inline", [_dec9$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9$1 = _applyDecoratedDescriptor(_class3$8.prototype, "min", [_dec10$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10$1 = _applyDecoratedDescriptor(_class3$8.prototype, "max", [_dec11$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class3$8.prototype, "autocomplete", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class3$8.prototype, "stagger", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$8)) || _class2$8);/* script */
var __vue_script__$8 = _class$8;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "input",
    class: (_obj = {
      'input--error': !!_vm.parsedError,
      'input--inline': _vm.inline,
      'input--has-prefix': !!_vm.prefix,
      'input--has-suffix': !!_vm.suffix
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"input__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"input__description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div class=\"input__outer\">" + (_vm.prefix ? "<span class=\"input__prefix\">" + _vm._s(_vm.prefix) + "</span>" : "<!---->") + " <div class=\"input__inner\"><input" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("type", _vm.type || 'text') + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("placeholder", _vm.placeholder === undefined ? _vm.label : _vm.placeholder) + _vm._ssrAttr("autocomplete", _vm.autocomplete) + _vm._ssrAttr("autofocus", _vm.autofocus) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + " class=\"input__element\"> " + (_vm.error ? "<span class=\"input__error_icon\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z\"></path></svg></span>" : "<!---->") + "</div> " + (_vm.suffix ? "<span class=\"input__suffix\">" + _vm._s(_vm.suffix) + "</span>" : "<!---->") + "</div> " + (_vm.parsedError ? "<span class=\"input__error\">" + _vm._ssrEscape(_vm._s(_vm.parsedError)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input__description_below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-f7300f60";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);var _dec$9, _dec2$9, _class2$9, _class3$9, _descriptor$9, _temp$9;

var _class$9 = (_dec$9 = vuePropertyDecorator.Component({
  name: 'FLSelect',
  components: {
    Icon: __vue_component__
  }
}), _dec2$9 = vuePropertyDecorator.Prop({
  type: Array,
  required: true
}), _dec$9(_class2$9 = (_class3$9 = (_temp$9 = /*#__PURE__*/function (_Mixins) {
  _inherits(_class3, _Mixins);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "options", _descriptor$9, _assertThisInitialized(_this));

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
}(vuePropertyDecorator.Mixins(__vue_component__$3)), _temp$9), (_descriptor$9 = _applyDecoratedDescriptor(_class3$9.prototype, "options", [_dec2$9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$9)) || _class2$9);/* script */
var __vue_script__$9 = _class$9;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "select dsa sda d s",
    class: (_obj = {
      'input--error': !!_vm.parsedError,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"input__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"input__description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div class=\"select__inner\"><select" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("autofocus", _vm.autofocus) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + " class=\"select__element\">" + _vm._ssrList(_vm.options, function (option, i) {
    return "<option" + _vm._ssrAttr("value", option.value) + _vm._ssrClass("select__option", {
      'select__option--selected': option.value === _vm.value
    }) + ">" + _vm._ssrEscape(_vm._s(option.text)) + "</option>";
  }) + "</select> " + (_vm.error ? "<span class=\"select__error_icon\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z\"></path></svg></span>" : "<!---->") + " <span class=\"select__icon\"><div style=\"height: 16px;\"><svg><path d=\"M11.9,10c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9,15.7c-0.4,0.4-1,0.4-1.4,0l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4\ns1-0.4,1.4,0l3.6,3.6C8.3,13.6,11.9,10,11.9,10z M11.9,6L8.3,2.4L4.7,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.3-4.3\nc0.4-0.4,1-0.4,1.4,0l4.3,4.3c0.4,0.4,0.4,1,0,1.4C12.9,6.4,12.3,6.4,11.9,6z\"></path></svg></div></span></div> " + (_vm.parsedError ? "<span class=\"input__error\">" + _vm._ssrEscape(_vm._s(_vm.parsedError)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input__description_below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = "data-v-09f2614c";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);var _dec$a, _dec2$a, _dec3$7, _dec4$4, _class2$a, _class3$a, _descriptor$a, _descriptor2$7, _descriptor3$4, _temp$a;

var _class$a = (_dec$a = vuePropertyDecorator.Component({
  name: 'FLTextarea',
  components: {}
}), _dec2$a = vuePropertyDecorator.Prop(), _dec3$7 = vuePropertyDecorator.Prop(), _dec4$4 = vuePropertyDecorator.Prop(), _dec$a(_class2$a = (_class3$a = (_temp$a = /*#__PURE__*/function (_Mixins) {
  _inherits(_class3, _Mixins);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "description", _descriptor$a, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionAbove", _descriptor2$7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionBelow", _descriptor3$4, _assertThisInitialized(_this));

    return _this;
  }

  return _class3;
}(vuePropertyDecorator.Mixins(__vue_component__$3)), _temp$a), (_descriptor$a = _applyDecoratedDescriptor(_class3$a.prototype, "description", [_dec2$a], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$7 = _applyDecoratedDescriptor(_class3$a.prototype, "descriptionAbove", [_dec3$7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$4 = _applyDecoratedDescriptor(_class3$a.prototype, "descriptionBelow", [_dec4$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$a)) || _class2$a);/* script */
var __vue_script__$a = _class$a;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "textarea",
    class: (_obj = {
      'input--error': !!_vm.parsedError
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"input__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"input__description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " <div class=\"textarea__inner\"><textarea" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("placeholder", _vm.placeholder === undefined ? _vm.label : _vm.placeholder) + _vm._ssrAttr("autocomplete", _vm.autocomplete) + _vm._ssrAttr("autofocus", _vm.autofocus) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + " class=\"textarea__element\"></textarea></div> " + (_vm.parsedError ? "<span class=\"input__error\">" + _vm._ssrEscape(_vm._s(_vm.parsedError)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input__description_below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = "data-v-03947940";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);var _dec$b, _dec2$b, _dec3$8, _dec4$5, _dec5$4, _dec6$3, _dec7$3, _class2$b, _class3$b, _descriptor$b, _descriptor2$8, _descriptor3$5, _descriptor4$4, _descriptor5$3, _descriptor6$3, _temp$b;

var _class$b = (_dec$b = vuePropertyDecorator.Component({
  name: 'FLDatepicker',
  components: {
    Icon: __vue_component__
  }
}), _dec2$b = vuePropertyDecorator.Prop(), _dec3$8 = vuePropertyDecorator.Prop(), _dec4$5 = vuePropertyDecorator.Prop(), _dec5$4 = vuePropertyDecorator.Prop(), _dec6$3 = vuePropertyDecorator.Prop({
  default: false
}), _dec7$3 = vuePropertyDecorator.Prop({
  type: Object
}), _dec$b(_class2$b = (_class3$b = (_temp$b = /*#__PURE__*/function (_Mixins) {
  _inherits(_class3, _Mixins);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "description", _descriptor$b, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionAbove", _descriptor2$8, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionBelow", _descriptor3$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "placeholder", _descriptor4$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "inline", _descriptor5$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "options", _descriptor6$3, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
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
    key: "opts",
    get: function get() {
      return _objectSpread2(_objectSpread2({}, {
        editable: true,
        multiple: false,
        range: false,
        language: '',
        showWeekNumber: false,
        rangeSeparator: ' > ',
        defaultPanel: 'date',
        format: 'D MMM, YYYY',
        headerFormat: 'D MMM, YYYY',
        defaultValue: new Date(),
        valueType: 'format'
      }), this.options);
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Mixins(__vue_component__$3)), _temp$b), (_descriptor$b = _applyDecoratedDescriptor(_class3$b.prototype, "description", [_dec2$b], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$8 = _applyDecoratedDescriptor(_class3$b.prototype, "descriptionAbove", [_dec3$8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$5 = _applyDecoratedDescriptor(_class3$b.prototype, "descriptionBelow", [_dec4$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$4 = _applyDecoratedDescriptor(_class3$b.prototype, "placeholder", [_dec5$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5$3 = _applyDecoratedDescriptor(_class3$b.prototype, "inline", [_dec6$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6$3 = _applyDecoratedDescriptor(_class3$b.prototype, "options", [_dec7$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$b)) || _class2$b);/* script */
var __vue_script__$b = _class$b;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "datepicker",
    class: (_obj = {
      'input--error': !!_vm.parsedError,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"input__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"input__description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " "), _vm._ssrNode("<div class=\"datepicker__inner\">", "</div>", [_c('client-only', [_c('date-picker', {
    staticClass: "datepicker__element",
    attrs: {
      "id": _vm.id,
      "value": _vm.value,
      "clearable": false,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "placeholder": _vm.placeholder === undefined ? _vm.label : _vm.placeholder,
      "readonly": _vm.readonly,
      "type": "date",
      "format": _vm.opts.format,
      "title-format": _vm.opts.headerFormat,
      "range": _vm.opts.range,
      "editable": _vm.opts.editable,
      "multiple": _vm.opts.multiple,
      "lang": _vm.opts.language,
      "disabled-date": _vm.opts.disabledDate,
      "show-week-number": _vm.opts.showWeekNumber,
      "range-separator": _vm.opts.rangeSeparator,
      "default-panel": _vm.opts.defaultPanel,
      "default-value": _vm.opts.defaultValue,
      "value-type": _vm.opts.valueType
    },
    on: {
      "input": _vm.onInput,
      "blur": function blur($event) {
        return _vm.$emit('blur');
      },
      "focus": function focus($event) {
        return _vm.$emit('focus');
      }
    }
  }, [_vm._t("icon-calendar")], 2)], 1), _vm._ssrNode(" " + (_vm.error ? "<span class=\"datepicker__error_icon\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z\"></path></svg></span>" : "<!---->") + " <span class=\"datepicker__icon\"><div style=\"height: 16px;\"><svg><path d=\"M13.1,1.5h-1.5V0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v0.7H5.8V0.7C5.8,0.3,5.5,0,5.1,0C4.7,0,4.4,0.3,4.4,0.7\n\tv0.7H2.9c-1.2,0-2.2,1-2.2,2.2v10.2c0,1.2,1,2.2,2.2,2.2h10.2c1.2,0,2.2-1,2.2-2.2V3.6C15.3,2.4,14.3,1.5,13.1,1.5z M2.9,2.9h1.5\n\tv0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V2.9h4.4v0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V2.9h1.5\n\tc0.4,0,0.7,0.3,0.7,0.7v2.2H2.2V3.6C2.2,3.2,2.5,2.9,2.9,2.9z M13.1,14.5H2.9c-0.4,0-0.7-0.3-0.7-0.7V7.3h11.6v6.5\n\tC13.8,14.2,13.5,14.5,13.1,14.5z\"></path></svg></div></span>")], 2), _vm._ssrNode(" " + (_vm.parsedError ? "<span class=\"input__error\">" + _vm._ssrEscape(_vm._s(_vm.parsedError)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input__description_below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$b = undefined;
/* scoped */

var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-0a8d2d15";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);var _dec$c, _dec2$c, _dec3$9, _dec4$6, _dec5$5, _dec6$4, _dec7$4, _class2$c, _class3$c, _descriptor$c, _descriptor2$9, _descriptor3$6, _descriptor4$5, _descriptor5$4, _descriptor6$4, _temp$c;

var _class$c = (_dec$c = vuePropertyDecorator.Component({
  name: 'FLTimepicker',
  components: {
    Icon: __vue_component__
  }
}), _dec2$c = vuePropertyDecorator.Prop(), _dec3$9 = vuePropertyDecorator.Prop(), _dec4$6 = vuePropertyDecorator.Prop(), _dec5$5 = vuePropertyDecorator.Prop(), _dec6$4 = vuePropertyDecorator.Prop({
  default: false
}), _dec7$4 = vuePropertyDecorator.Prop({
  type: Object
}), _dec$c(_class2$c = (_class3$c = (_temp$c = /*#__PURE__*/function (_Mixins) {
  _inherits(_class3, _Mixins);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "description", _descriptor$c, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionAbove", _descriptor2$9, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "descriptionBelow", _descriptor3$6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "placeholder", _descriptor4$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "inline", _descriptor5$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "options", _descriptor6$4, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(_class3, [{
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
    key: "opts",
    get: function get() {
      return _objectSpread2(_objectSpread2({}, {
        editable: true,
        multiple: false,
        hourStep: 1,
        minuteStep: 5,
        secondStep: 30,
        showHour: true,
        showMinute: true,
        showSecond: false,
        format: 'HH:mm',
        showHeader: true,
        headerFormat: 'HH:mm',
        defaultValue: new Date(),
        use12h: false,
        valueType: 'format',
        fixed: undefined
      }), this.options);
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Mixins(__vue_component__$3)), _temp$c), (_descriptor$c = _applyDecoratedDescriptor(_class3$c.prototype, "description", [_dec2$c], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$9 = _applyDecoratedDescriptor(_class3$c.prototype, "descriptionAbove", [_dec3$9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$6 = _applyDecoratedDescriptor(_class3$c.prototype, "descriptionBelow", [_dec4$6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$5 = _applyDecoratedDescriptor(_class3$c.prototype, "placeholder", [_dec5$5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5$4 = _applyDecoratedDescriptor(_class3$c.prototype, "inline", [_dec6$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6$4 = _applyDecoratedDescriptor(_class3$c.prototype, "options", [_dec7$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$c)) || _class2$c);/* script */
var __vue_script__$c = _class$c;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "timepicker",
    class: (_obj = {
      'input--error': !!_vm.parsedError,
      'input--inline': _vm.inline
    }, _obj["input--size-" + _vm.size] = true, _obj)
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.id) + " class=\"input__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>" : "<!---->") + " " + (_vm.upperDescription ? "<p class=\"input__description\">" + _vm._ssrEscape(_vm._s(_vm.upperDescription)) + "</p>" : "<!---->") + " "), _vm._ssrNode("<div class=\"timepicker__inner\">", "</div>", [_c('client-only', [_c('date-picker', {
    staticClass: "timepicker__element",
    attrs: {
      "id": _vm.id,
      "value": _vm.value,
      "clearable": false,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "placeholder": _vm.placeholder === undefined ? _vm.label : _vm.placeholder,
      "readonly": _vm.readonly,
      "type": "time",
      "open": _vm.opts.open,
      "editable": _vm.opts.editable,
      "multiple": _vm.opts.multiple,
      "lang": _vm.opts.language,
      "disabled-time": _vm.opts.disabledTime,
      "hour-step": _vm.opts.hourStep,
      "minute-step": _vm.opts.minuteStep,
      "second-step": _vm.opts.secondStep,
      "show-hour": _vm.opts.showHour,
      "show-minute": _vm.opts.showMinute,
      "show-second": _vm.opts.showSecond,
      "format": _vm.opts.format,
      "time-picker-options": _vm.opts.fixed,
      "show-time-header": _vm.opts.showHeader,
      "use12h": _vm.opts.use12h,
      "time-title-format": _vm.opts.headerFormat,
      "default-value": _vm.opts.defaultValue,
      "value-type": _vm.opts.valueType
    },
    on: {
      "input": _vm.onInput,
      "blur": function blur($event) {
        return _vm.$emit('blur');
      },
      "focus": function focus($event) {
        return _vm.$emit('focus');
      }
    }
  })], 1), _vm._ssrNode(" " + (_vm.error ? "<span class=\"timepicker__error_icon\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z\"></path></svg></span>" : "<!---->") + " <span class=\"timepicker__icon\"><div style=\"height: 16px;\"><svg><path d=\"M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5\n\tc3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z M8.8,7.7l3,3l-1.1,1.1L7.3,8.3l0,0H7.2V3.4h1.5V7.7z\"></path></svg></div></span>")], 2), _vm._ssrNode(" " + (_vm.parsedError ? "<span class=\"input__error\">" + _vm._ssrEscape(_vm._s(_vm.parsedError)) + "</span>" : "<!---->") + " " + (_vm.lowerDescription ? "<p class=\"input__description_below\">" + _vm._s(_vm.lowerDescription) + "</p>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$c = undefined;
/* scoped */

var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-0cf27b19";
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);var _dec$d, _dec2$d, _dec3$a, _dec4$7, _class2$d, _class3$d, _descriptor$d, _descriptor2$a, _descriptor3$7, _temp$d;

var _class$d = (_dec$d = vuePropertyDecorator.Component({
  name: 'FLBulletin',
  components: {
    Chip: __vue_component__$5,
    Icon: __vue_component__
  }
}), _dec2$d = vuePropertyDecorator.Prop({
  type: Object
}), _dec3$a = vuePropertyDecorator.Prop({
  type: String,
  default: 'default'
}), _dec4$7 = vuePropertyDecorator.Prop({
  type: Boolean,
  default: true
}), _dec$d(_class2$d = (_class3$d = (_temp$d = /*#__PURE__*/function (_Vue) {
  _inherits(_class3, _Vue);

  var _super = _createSuper(_class3);

  function _class3() {
    var _this;

    _classCallCheck(this, _class3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "chip", _descriptor$d, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "color", _descriptor2$a, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "dismissable", _descriptor3$7, _assertThisInitialized(_this));

    _this.cookie = 'bulletin-dismissed';
    _this.show = false;
    return _this;
  }

  _createClass(_class3, [{
    key: "mounted",
    value: function mounted() {
      if (!this.dismissable) {
        this.show = true;
      }

      this.show = this.getCookieValue(this.cookie) === '';
    }
  }, {
    key: "onDismiss",
    value: function onDismiss() {
      // SSR?
      this.show = false;

      if (document) {
        document.cookie = "".concat(this.cookie, "=1");
      }
    }
  }, {
    key: "getCookieValue",
    value: function getCookieValue(name) {
      var c = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return c ? c.pop() : '';
    }
  }]);

  return _class3;
}(vuePropertyDecorator.Vue), _temp$d), (_descriptor$d = _applyDecoratedDescriptor(_class3$d.prototype, "chip", [_dec2$d], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$a = _applyDecoratedDescriptor(_class3$d.prototype, "color", [_dec3$a], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$7 = _applyDecoratedDescriptor(_class3$d.prototype, "dismissable", [_dec4$7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3$d)) || _class2$d);/* script */
var __vue_script__$d = _class$d;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.show ? _c('div', {
    staticClass: "bulletin",
    class: (_obj = {}, _obj["bulletin--color-" + _vm.color] = true, _obj)
  }, [_vm._ssrNode("<div class=\"bulletin__inner\">", "</div>", [_vm.chip ? _vm._ssrNode("<div class=\"bulletin__chip\">", "</div>", [_c('Chip', {
    attrs: {
      "color": _vm.chip.color,
      "icon": _vm.chip.icon
    }
  }, [_vm._v(_vm._s(_vm.chip.text))])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"bulletin__text\">", "</span>", [_vm._t("default")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bulletin__dismiss\">", "</div>", [_c('Icon', {
    attrs: {
      "i": "cross"
    },
    on: {
      "click": _vm.onDismiss
    }
  })], 1)], 2) : _vm._e();
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$d = undefined;
/* scoped */

var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-27d988d8";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);var _dec$e, _class2$e, _temp$e;
var defaultOptions = {
  allowBodyScroll: false,
  closeable: true,
  width: 580
};

var _class$e = (_dec$e = vuePropertyDecorator.Component({
  name: 'FLModal',
  components: {
    Icon: __vue_component__
  }
}), _dec$e(_class2$e = (_temp$e = /*#__PURE__*/function (_Vue) {
  _inherits(_class2, _Vue);

  var _super = _createSuper(_class2);

  function _class2() {
    var _this;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.component = null;
    _this.data = null;
    _this.options = defaultOptions;
    return _this;
  }

  _createClass(_class2, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      this.$bus.$on('open_modal', function (component, data, options) {
        if (_typeof(component) === 'object') {
          // Handle case where all arguments are passed as an object in the first argument.
          options = component.options;
          data = component.data;
          component = component.component;
        } // Set default options.


        options = _objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions), _this2.$config.modal), options); // TODO: if (component instanceof Vue) does not work here for some reason?

        if (typeof component !== 'function') {
          return console.error("$modal.open expects a component, got '".concat(_typeof(component), "'."));
        }

        _this2.options = options;
        _this2.component = component;
        _this2.data = data;

        if (!_this2.options.allowBodyScroll) {
          // Restrict the body overflow.
          _this2.restrictBodyOverflow();
        }
      });
      this.$bus.$on('close_modal', function () {
        _this2.releaseBodyOverflow();

        _this2.component = null;
        _this2.data = null;
      });
    }
  }, {
    key: "restrictBodyOverflow",
    value: function restrictBodyOverflow() {
      if (!this.$isServer) {
        var body = document.querySelector('body');

        if (body) {
          body.style.overflow = 'hidden';
        }
      }
    }
  }, {
    key: "releaseBodyOverflow",
    value: function releaseBodyOverflow() {
      if (!this.$isServer) {
        var body = document.querySelector('body');

        if (body) {
          body.style.removeProperty('overflow');
        }
      }
    }
  }, {
    key: "close",
    value: function close(event) {
      var _this3 = this;

      var close = function close() {
        return _this3.$bus.$emit('close_modal');
      };

      var cl = event.target.classList;

      if (!cl.contains('modal__outer') && !cl.contains('modal__close_icon')) {
        return;
      }

      var closeable = this.options.closeable;

      if (typeof closeable === 'boolean' && closeable) {
        close();
      } else if (_typeof(closeable) === 'object') {
        if (cl.contains('modal__outer') && closeable.backdrop) {
          close();
        }

        if (cl.contains('modal__close_icon') && closeable.icon) {
          close();
        }
      }
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.options.width;

      if (typeof width === 'number') {
        return width + 'px';
      } else {
        return width;
      }
    }
  }]);

  return _class2;
}(vuePropertyDecorator.Vue), _temp$e)) || _class2$e);var __vue_script__$e = _class$e;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "modal"
  }, [_c('transition', {
    attrs: {
      "name": "anim--modal_backdrop"
    }
  }, [!!_vm.component ? _c('div', {
    staticClass: "modal__backdrop"
  }) : _vm._e()]), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "anim--modal"
    }
  }, [!!_vm.component ? _c('div', {
    staticClass: "modal__outer",
    on: {
      "click": _vm.close
    }
  }, [_c('div', {
    staticClass: "modal__inner",
    style: {
      maxWidth: _vm.width
    }
  }, [(_typeof(_vm.options.closeable) === 'object' ? _vm.options.closeable.cross : _vm.options.closeable) ? _c('Icon', {
    staticClass: "modal__close_icon",
    attrs: {
      "i": "cross"
    },
    on: {
      "click": _vm.close
    }
  }) : _vm._e(), _vm._v(" "), _c(_vm.component, {
    tag: "component",
    attrs: {
      "data": _vm.data
    }
  })], 1)]) : _vm._e()])], 2);
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$e = undefined;
/* scoped */

var __vue_scope_id__$e = undefined;
/* module identifier */

var __vue_module_identifier__$e = "data-v-5447de57";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);var _dec$f, _class2$f, _temp$f;
var defaultOptions$1 = {
  closeable: true,
  delay: 5000,
  showDelayProgress: true
};

var _class$f = (_dec$f = vuePropertyDecorator.Component({
  name: 'FLToast',
  components: {
    Chip: __vue_component__$5,
    Icon: __vue_component__
  }
}), _dec$f(_class2$f = (_temp$f = /*#__PURE__*/function (_Vue) {
  _inherits(_class2, _Vue);

  var _super = _createSuper(_class2);

  function _class2() {
    var _this;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.toasts = [];
    _this.id = 0;
    return _this;
  }

  _createClass(_class2, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      this.$bus.$on('pop_toast', function (toast) {
        var id = _this2.id++;
        toast.options = _objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions$1), _this2.$config.toast), toast.options);

        _this2.toasts.push(_objectSpread2(_objectSpread2({}, toast), {}, {
          id: id
        }));

        if (toast.options.delay && typeof toast.options.delay === 'number') {
          setTimeout(function () {
            _this2.toasts = _this2.toasts.filter(function (_t) {
              return _t.id !== id;
            });
          }, toast.options.delay);
        }
      });
      this.$bus.$on('close_toast', function (id) {
        _this2.toasts = _this2.toasts.filter(function (_) {
          return _.id !== id;
        });
      });
    }
  }, {
    key: "close",
    value: function close(event, id) {
      var _this3 = this,
          _toast$options;

      var toast = this.toasts.find(function (_t) {
        return _t.id === id;
      });

      if (!toast) {
        return;
      }

      var close = function close() {
        return _this3.$bus.$emit('close_toast', id);
      };

      var cl = event.target.classList;
      var closeable = (_toast$options = toast.options) === null || _toast$options === void 0 ? void 0 : _toast$options.closeable;

      if (typeof closeable === 'boolean' && closeable) {
        close();
      } else if (_typeof(closeable) === 'object') {
        if (closeable.click) {
          close();
        }

        if (cl.contains('toast__close_icon') && closeable.icon) {
          close();
        }
      }
    }
  }]);

  return _class2;
}(vuePropertyDecorator.Vue), _temp$f)) || _class2$f);var __vue_script__$f = _class$f;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "toast_container"
  }, [_c('transition-group', {
    attrs: {
      "name": "list-complete"
    }
  }, _vm._l(_vm.toasts, function (toast) {
    return _c('div', {
      key: toast.id,
      staticClass: "toast",
      class: {
        'toast--delay': !!toast.options.delay,
        'toast--closeable': _typeof(toast.options.closeable) === 'object' ? toast.options.closeable.click : toast.options.closeable
      },
      on: {
        "click": function click(e) {
          return _vm.close(e, toast.id);
        }
      }
    }, [_c('div', {
      staticClass: "toast__inner"
    }, [toast.chip ? _c('div', {
      staticClass: "toast__chip"
    }, [_c('Chip', {
      attrs: {
        "icon": toast.chip.icon,
        "color": toast.chip.color
      }
    }, [_vm._v(_vm._s(toast.chip.text))])], 1) : _vm._e(), _vm._v(" "), toast.icon && !toast.chip ? _c('div', {
      staticClass: "toast__icon"
    }, [_c('Icon', {
      attrs: {
        "i": toast.icon
      }
    })], 1) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "toast__middle"
    }, [toast.title ? _c('h4', {
      staticClass: "toast__title",
      domProps: {
        "textContent": _vm._s(toast.title)
      }
    }) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "toast__text",
      domProps: {
        "textContent": _vm._s(toast.text)
      }
    })]), _vm._v(" "), (_typeof(toast.options.closeable) === 'object' ? toast.options.closeable.icon : toast.options.closeable) ? _c('Icon', {
      staticClass: "toast__close_icon",
      attrs: {
        "i": "cross"
      },
      on: {
        "click": function click(e) {
          return _vm.close(e, toast.id);
        }
      }
    }) : _vm._e(), _vm._v(" "), toast.options.showDelayProgress ? _c('div', {
      staticClass: "toast__progress_background"
    }, [_c('div', {
      staticClass: "toast__progress",
      style: {
        'animation-duration': toast.options.delay + 'ms'
      }
    })]) : _vm._e()], 1)]);
  }), 0)], 1);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$f = undefined;
/* scoped */

var __vue_scope_id__$f = undefined;
/* module identifier */

var __vue_module_identifier__$f = "data-v-788ceaf0";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);var components=/*#__PURE__*/Object.freeze({__proto__:null,FLButton: __vue_component__$2,FLCheckbox: __vue_component__$4,FLChip: __vue_component__$5,FLDivider: __vue_component__$6,FLForm: __vue_component__$7,FLIcon: __vue_component__,FLInput: __vue_component__$8,FLLoading: __vue_component__$1,FLSelect: __vue_component__$9,FLTextarea: __vue_component__$a,FLDatepicker: __vue_component__$b,FLTimepicker: __vue_component__$c,FLBulletin: __vue_component__$d,FLModal: __vue_component__$e,FLToast: __vue_component__$f});_Vue.use(Datepicker); // Import vue components

// install function executed by Vue.use()
var install = function installFluffUi(Vue, config) {
  if (install.installed) return;
  install.installed = true;
  instance(Vue, config);
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
};

function instance(Vue, config) {
  var EventBus = new Vue();
  Vue.prototype.$config = config || {};
  Vue.prototype.$bus = EventBus;
  Vue.prototype.$toast = {
    pop: function pop(toast) {
      Vue.prototype.$bus.$emit('pop_toast', toast);
    },
    close: function close(index) {
      Vue.prototype.$bus.$emit('close_toast', index);
    }
  };
  Vue.prototype.$modal = {
    open: function open(component, data, options) {
      Vue.prototype.$bus.$emit('open_modal', component, data, options);
    },
    close: function close() {
      Vue.prototype.$bus.$emit('close_modal');
    }
  };
} // Create module definition for Vue.use()


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
exports.FLBulletin=__vue_component__$d;exports.FLButton=__vue_component__$2;exports.FLCheckbox=__vue_component__$4;exports.FLChip=__vue_component__$5;exports.FLDatepicker=__vue_component__$b;exports.FLDivider=__vue_component__$6;exports.FLForm=__vue_component__$7;exports.FLIcon=__vue_component__;exports.FLInput=__vue_component__$8;exports.FLLoading=__vue_component__$1;exports.FLModal=__vue_component__$e;exports.FLSelect=__vue_component__$9;exports.FLTextarea=__vue_component__$a;exports.FLTimepicker=__vue_component__$c;exports.FLToast=__vue_component__$f;exports.default=plugin;