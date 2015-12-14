import Ember from 'ember';
import TextFieldComponent from './text-field';
import layout from '../templates/components/radio-button';

import invokeAction from 'ember-invoke-action';

import titlecase from '../utils/titlecase';

const { assert, get, set } = Ember;

export default TextFieldComponent.extend({
  layout,
  type: 'radio',

  didReceiveAttrs() {
    assert('{{radio-button}} requires a value',
      this.getAttr('value') != null);

    this._super(...arguments);
  },

  _identifier() {
    return `${this._super()}_${get(this, 'value')}`;
  },

  _setupLabel() {
    set(this, 'label',
      this.getAttr('label') || titlecase(this.getAttr('value')));
  },

  actions: {
    radioClicked() {
      invokeAction(this, 'update',
        get(this, 'object'),
        get(this, 'propertyName'),
        get(this, 'value'));
    }
  }
});
