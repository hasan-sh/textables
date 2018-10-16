webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Textables.js":
/*!*********************************!*\
  !*** ./components/Textables.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/hasan_sh/Documents/development/react/textables/components/Textables.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var API = 'https://raw.githubusercontent.com/MohawkApps/Textables/master/resources/content.json';

var Textables =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textables, _React$Component);

  function Textables() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Textables);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Textables)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      faces: [],
      searchedFaces: [],
      search: '',
      copied: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var options, req, res, faces;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                method: 'GET',
                mode: 'cors',
                header: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
                }
              };
              _context.next = 3;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()(API, options);

            case 3:
              req = _context.sent;
              _context.next = 6;
              return req.json();

            case 6:
              res = _context.sent;
              faces = res.reduce(function (acc, curr) {
                var items = curr.items;
                acc.push.apply(acc, _toConsumableArray(items));
                return acc;
              }, []);

              _this.setState({
                faces: faces,
                searchedFaces: faces.slice()
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUpdate", function (nextProps, nextState) {
      if (nextState.copied) {
        _this.timer = setTimeout(function () {
          _this.setState({
            copied: false
          });
        }, 2000);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCopy", function () {
      _this.setState({
        copied: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "search", function (search) {
      var faces = _this.state.faces.slice();

      var searchedFaces = faces.filter(function (face) {
        var name = face.name.toLowerCase();
        var searchTerm = new RegExp(search.trim().toLowerCase(), 'ig');
        var matched = name.match(searchTerm);

        if (matched) {
          var parsedName = face.name.replace(searchTerm, "<span class=\"".concat(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.test, "\">").concat(search.trim(), "</span>"));
          face.parsedName = parsedName;
          return true;
        }
      });

      _this.setState({
        search: search,
        searchedFaces: searchedFaces
      });
    });

    return _this;
  }

  _createClass(Textables, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.faces.length < 1) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Loading...");
      var faces = this.state.searchedFaces.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          item: item,
          onCopy: _this2.onCopy,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.copied ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.copied,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Copied!") : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "search",
        placeholder: "Find a \u0CA0\u203F\u0CA0 by name..",
        className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
        onChange: function onChange(e) {
          return _this2.search(e.target.value);
        },
        value: this.state.search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {// fontSize: '25px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Click on a Face to copy it ( \xAC\u203F\xAC)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textablesContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, faces));
    }
  }]);

  return Textables;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Textables);

/***/ })

})
//# sourceMappingURL=index.js.7582b9346fe67ee4f2e4.hot-update.js.map