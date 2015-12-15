import Ember from 'ember';
import TextFieldComponent from './text-field';
import layout from '../templates/components/radio-button';

import invokeAction from 'ember-invoke-action';
import FormFieldMixin from '../mixins/form-field';

import titlecase from '../utils/titlecase';

const { assert, get, set } = Ember;

export default TextFieldComponent.extend(FormFieldMixin, {
  layout,
  type: 'radio',

  instrumentDisplay: '{{radio-button}}',

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
