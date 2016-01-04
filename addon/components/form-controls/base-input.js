import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',

  attributeBindings: [
    'accesskey',
    'autocomplete',
    'autofocus',
    'dir',
    'disabled',
    'form',
    'hidden',
    'lang',
    'name',
    'readonly',
    'required',
    'tabindex',
    'title',
    'type',
    'value'
  ]
});
