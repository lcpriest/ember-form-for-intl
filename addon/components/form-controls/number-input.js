import InputComponent from './input';

const NumberInputComponent = InputComponent.extend({
  type: 'number',

  attributeBindings: [
    'max',
    'min',
    'step'
  ]
});

NumberInputComponent.reopenClass({
  positionalParams: ['value']
});

export default NumberInputComponent;
