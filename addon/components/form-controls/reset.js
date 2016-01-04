import ButtonComponent from './button';

import { invokeAction } from 'ember-invoke-action';

export default ButtonComponent.extend({
  type: 'reset',

  click(e) {
    e.preventDefault();
    invokeAction(this, 'reset', ...arguments);
  }
});
