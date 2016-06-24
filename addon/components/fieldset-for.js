import Ember from 'ember';
import layout from '../templates/components/fieldset-for';

const {
  Component,
  set
} = Ember;

const FieldsetForComponent = Component.extend({
  layout,

  tagName: 'fieldset',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

FieldsetForComponent.reopenClass({
  positionalParams: ['object']
});

export default FieldsetForComponent;
