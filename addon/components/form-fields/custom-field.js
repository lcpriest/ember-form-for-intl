import Ember from 'ember';
import layout from '../../templates/components/form-fields/custom-field';

const { set } = Ember;

const CustomFieldComponent = Ember.Component.extend({
  tagName: '',
  layout,

  control: 'one-way-input',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

CustomFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CustomFieldComponent;
