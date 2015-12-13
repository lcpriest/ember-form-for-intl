import Ember from 'ember';
import layout from '../templates/components/text-field';

import titlecase from '../utils/titlecase';

const {
  assert,
  set,
  typeOf,
  Component
} = Ember;

const TextFieldComponent = Component.extend({
  layout,

  didReceiveAttrs() {
    assert('{{text-field}} requires propertyName to be set',
      typeOf(this.getAttr('propertyName')) === 'string');

    let objectType = typeOf(this.getAttr('object'));
    assert('{{text-field}} requires object to be set',
      objectType === 'object' || objectType === 'instance');

    this._setupLabel();

    this._super(...arguments);
  },

  update(object, propertyName, value) {
    set(object, propertyName, value);
  },

  _setupLabel() {
    set(this, 'label',
      this.getAttr('label') || titlecase(this.getAttr('propertyName')));
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
