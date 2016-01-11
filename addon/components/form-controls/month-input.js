import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toMonthString } from '../../utils/date';

const { set } = Ember;

export default NumberInputComponent.extend({
  type: 'month',

  attributeBindings: ['dateValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toMonthString(value);
    }

    set(this, 'dateValue', value);
  },

  sanitizeInput(value) {
    if (value != null) {
      return new Date(value);
    }
  }
});
