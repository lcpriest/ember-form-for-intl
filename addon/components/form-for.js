import Ember from 'ember';
import layout from '../templates/components/form-for';

const {
  Component
} = Ember;

const FormForComponent = Component.extend({
  layout,

  tagName: 'form'
});

FormForComponent.reopenClass({
  positionalParams: ['object']
});

export default FormForComponent;
