import Ember  from 'ember';
import layout from '../templates/components/form-label';

const FormLabelComponent =  Ember.Component.extend({
  tagName: 'label',
  layout,

  attributeBindings: [
    'for',
    'form'
  ]
});

FormLabelComponent.reopenClass({
  positionalParams: ['label']
});

export default FormLabelComponent;
