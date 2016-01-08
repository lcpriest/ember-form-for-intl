import BaseInputComponent from './base-input';
import { invokeAction } from 'ember-invoke-action';

const InputComponent = BaseInputComponent.extend({
  type:    'text',

  attributeBindings: [
    'autosave',
    'inputmode',
    'list',
    'maxlength',
    'minlength',
    'pattern',
    'placeholder',
    'size',
    'spellcheck'
  ],

  input() {
    this._handleUpdate();
  },

  change() {
    this._handleUpdate();
  },

  sanitizeInput(value) {
    return value;
  },

  _handleUpdate() {
    let value = this.readDOMAttr('value');
    let sanitizedValue = this.sanitizeInput(value);
    invokeAction(this, 'update', sanitizedValue);
  }
});

InputComponent.reopenClass({
  positionalParams: ['value']
});

export default InputComponent;
