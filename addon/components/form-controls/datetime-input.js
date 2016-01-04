import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toDatetimeString } from '../../utils/date-to-string';

const { set } = Ember;

export default NumberInputComponent.extend({
  type: 'datetime',

  attributeBindings: ['datetimeValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toDatetimeString(value);
    }

    set(this, 'datetimeValue', value);
  }
});
