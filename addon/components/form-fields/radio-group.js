import Ember from 'ember';
import layout from '../../templates/components/form-fields/radio-group';

const {
  set
} = Ember;

const RadioGroupComponent = Ember.Component.extend({
  tagName: 'fieldset',
  layout,
  attributeBindings: ['disabled'],

  update() {
    set(...arguments);
  }
});

RadioGroupComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default RadioGroupComponent;
