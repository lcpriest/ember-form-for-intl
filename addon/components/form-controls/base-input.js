import Ember from 'ember';

const { set } = Ember;

export default Ember.Component.extend({
  tagName: 'input',

  attributeBindings: [
    'accesskey',
    'autocomplete',
    'autofocus',
    'describedBy:aria-describedby',
    'dir',
    'disabled',
    'form',
    'hidden',
    'invalid:aria-invalid',
    'lang',
    'name',
    'readonly',
    'required',
    'aria-required',
    'tabindex',
    'title',
    'type',
    'value'
  ],

  didReceiveAttrs() {
    this._super(...arguments);

    let required = this.get('required');
    set(this, 'aria-required', !!required);
  }
});
