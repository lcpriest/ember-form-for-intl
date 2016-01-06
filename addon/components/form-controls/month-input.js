import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toMonthString } from '../../utils/date-to-string';

const { get, set } = Ember;

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
    if (get(this, 'value') instanceof Date) {
      return new Date(value);
    } else {
      return value;
    }
  }
});
