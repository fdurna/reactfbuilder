"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _widgets = _interopRequireDefault(require("../../../widgets"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  weight: 410,
  type: 'textfield',
  input: true,
  key: 'inputMask',
  label: 'Input Mask',
  tooltip: 'An input mask helps the user with input by ensuring a predefined format.<br><br>9: numeric<br>a: alphabetical<br>*: alphanumeric<br><br>Example telephone mask: (999) 999-9999<br><br>See the <a target=\'_blank\' href=\'https://github.com/RobinHerbots/jquery.inputmask\'>jquery.inputmask documentation</a> for more information.</a>',
  customConditional: function customConditional(context) {
    return !context.data.allowMultipleMasks;
  }
}, {
  weight: 417,
  type: 'datagrid',
  input: true,
  key: 'inputMasks',
  label: 'Input Masks',
  customConditional: function customConditional(context) {
    return context.data.allowMultipleMasks === true;
  },
  reorder: true,
  components: [{
    type: 'textfield',
    key: 'label',
    label: 'Label',
    input: true
  }]
}];
exports.default = _default;