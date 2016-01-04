import Ember from 'ember';
import layout from '../../templates/components/form-fields/checkbox-field';

const { set } = Ember;

const CheckboxFieldComponent = Ember.Component.extend({
  tagName: '',
  layout,

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

CheckboxFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CheckboxFieldComponent;
