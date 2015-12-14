import Ember from 'ember';
import layout from '../templates/components/form-for';

const {
  set,
  Component
} = Ember;

const FormForComponent = Component.extend({
  layout,

  tagName: 'form',

  submit: (object) => object.save(),
  reset:  (object) => object.rollback(),

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

FormForComponent.reopenClass({
  positionalParams: ['object']
});

export default FormForComponent;
