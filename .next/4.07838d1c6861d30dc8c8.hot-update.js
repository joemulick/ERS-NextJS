webpackHotUpdate(4,{

/***/ "./components/IndexHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = 'C:\\Users\\joemu\\Desktop\\Coding\\ERS-NextJS\\components\\IndexHeader.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var activeItem = this.state.activeItem;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Menu */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Menu */].Item,
          {
            name: 'LogIn',
            active: activeItem === 'LogIn',
            onClick: this.handleItemClick,

            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          'Log In'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Menu */].Item,
          {
            name: 'Register',
            active: activeItem === 'Register',
            onClick: this.handleItemClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          'Register'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Menu */].Item,
          {
            name: 'QuickPlay',
            active: activeItem === 'Quickplay',
            onClick: this.handleItemClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          'QuickPlay'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1310633474',
          css: 'menu.item.jsx-1310633474{width:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEluZGV4SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHeUIsVUFDZCIsImZpbGUiOiJjb21wb25lbnRzXFxJbmRleEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9qb2VtdS9EZXNrdG9wL0NvZGluZy9FUlMtTmV4dEpTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7fVxyXG5cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG5cclxuICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNZW51PlxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIG5hbWU9J0xvZ0luJ1xyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTG9nSW4nfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcblxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZyBJblxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBuYW1lPSdSZWdpc3RlcidcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1JlZ2lzdGVyJ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIG5hbWU9J1F1aWNrUGxheSdcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ1F1aWNrcGxheSd9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBRdWlja1BsYXlcclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBtZW51Lml0ZW0ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */\n/*@ sourceURL=components\\IndexHeader.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', 'C:/Users/joemu/Desktop/Coding/ERS-NextJS/components/IndexHeader.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/joemu/Desktop/Coding/ERS-NextJS/components/IndexHeader.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.07838d1c6861d30dc8c8.hot-update.js.map