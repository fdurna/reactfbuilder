"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.flags.js");

/* eslint-disable max-len */
var _default = [{
  weight: 0,
  type: 'textfield',
  input: true,
  key: 'label',
  label: 'Label',
  placeholder: 'Field Label',
  tooltip: 'The label for this field that will appear next to it.',
  validate: {
    required: true
  }
},{
  type: 'textfield',
  label: 'Default Value',
  key: 'defaultValue',
  weight: 5,
  placeholder: 'Default Value',
  tooltip: 'The will be the value for this field, before user interaction. Having a default value will override the placeholder text.',
  input: true
},{
  weight: 10,
  type: 'checkbox',
  label: 'Required',
  tooltip: 'A required field must be filled in before the form can be submitted.',
  key: 'validate.required',
  input: true
},];
/* eslint-enable max-len */

exports.default = _default;