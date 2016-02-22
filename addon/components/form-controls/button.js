import BaseInputComponent from './base-input';

const Button = BaseInputComponent.extend({
  type: 'button',

  attributeBindings: ['value'],
  value: ''
});

Button.reopenClass({
  positionalParams: ['value']
});

export default Button;
