import ButtonComponent from './button';
import { invokeAction } from 'ember-invoke-action';

export default ButtonComponent.extend({
  type: 'submit',

  click(e) {
    e.preventDefault();
    invokeAction(this, 'submit', ...arguments);
  }
});
