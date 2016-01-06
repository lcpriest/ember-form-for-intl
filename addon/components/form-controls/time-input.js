import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toTimeString, toDateString } from '../../utils/date-to-string';

const { get, set } = Ember;

export default NumberInputComponent.extend({
  type: 'time',

  attributeBindings: ['timeValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toTimeString(value);
    }

    set(this, 'timeValue', value);
  },

  sanitizeInput(value) {
    let currentValue = get(this, 'value');
    if (currentValue instanceof Date) {
      return new Date(`${toDateString(currentValue)}T${value}`);
    } else {
      return value;
    }
  }
});
