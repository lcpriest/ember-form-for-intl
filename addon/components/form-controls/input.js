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
    invokeAction(this, 'update', this.readDOMAttr('value'));
  },

  change() {
    invokeAction(this, 'update', this.readDOMAttr('value'));
  }
});

InputComponent.reopenClass({
  positionalParams: ['value']
});

export default InputComponent;
