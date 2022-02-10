"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _ComponentEdit = _interopRequireDefault(require("./editForm/Component.edit.conditional"));

var _ComponentEdit2 = _interopRequireDefault(require("./editForm/Component.edit.data"));

var _ComponentEdit3 = _interopRequireDefault(require("./editForm/Component.edit.api"));

var _ComponentEdit4 = _interopRequireDefault(require("./editForm/Component.edit.display"));

var _ComponentEdit5 = _interopRequireDefault(require("./editForm/Component.edit.logic"));

var _ComponentEdit6 = _interopRequireDefault(require("./editForm/Component.edit.validation"));

var _ComponentEdit7 = _interopRequireDefault(require("./editForm/Component.edit.layout"));

var _utils = _interopRequireDefault(require("./editForm/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  var components = _lodash.default.cloneDeep([{
    type: 'tabs',
    key: 'tabs',
    components: [{
      label: 'Display',
      key: 'display',
      weight: 0,
      components: _ComponentEdit4.default
    }, {
      label: 'Conditional2',
      key: 'conditional',
      weight: 40,
      components: _ComponentEdit.default
    }]
  }]).concat(extend.map(function (items) {
    return {
      type: 'tabs',
      key: 'tabs',
      components: _lodash.default.cloneDeep(items)
    };
  }));

  return {
    components: _lodash.default.unionWith(components, _utils.default.unifyComponents).concat({
      type: 'hidden',
      key: 'type'
    })
  };
}