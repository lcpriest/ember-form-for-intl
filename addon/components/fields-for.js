import Ember from 'ember';
import layout from '../templates/components/fields-for';

const {
  Component,
  set
} = Ember;

const FieldsForComponent = Component.extend({
  layout,

  tagName: '',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

FieldsForComponent.reopenClass({
  positionalParams: ['object']
});

export default FieldsForComponent;
