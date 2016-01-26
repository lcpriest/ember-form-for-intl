import Ember from 'ember';
import layout from '../../templates/components/form-fields/select-field';

const { set } = Ember;

const SelectFieldComponent = Ember.Component.extend({
  tagName: '',
  layout,

  control: 'form-controls/select',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

SelectFieldComponent.reopenClass({
  positionalParams: ['propertyName', 'options']
});

export default SelectFieldComponent;
