import Ember from 'ember';
import layout from '../templates/components/text-field';

const {
  set,
  Component
} = Ember;

const TextFieldComponent = Component.extend({
  layout,

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
