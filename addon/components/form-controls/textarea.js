import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';

export default Ember.Component.extend({
  tagName: 'textarea',

  attributeBindings: [
    'accesskey',
    'autocomplete',
    'autofocus',
    'cols',
    'dir',
    'disabled',
    'form',
    'hidden',
    'lang',
    'maxlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'tabindex',
    'title',
    'value',
    'wrap'
  ],

  input() {
    invokeAction(this, 'update', this.readDOMAttr('value'));
  },

  change() {
    invokeAction(this, 'update', this.readDOMAttr('value'));
  }
});
