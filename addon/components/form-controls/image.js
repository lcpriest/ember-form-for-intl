import SubmitButtonComponent from './submit';

export default SubmitButtonComponent.extend({
  type: 'image',

  attributeBindings: [
    'alt',
    'src',
    'width',
    'height'
  ]
});
