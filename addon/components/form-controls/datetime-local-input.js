import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toDatetimeLocalString } from '../../utils/date-to-string';

const { get, set } = Ember;

export default NumberInputComponent.extend({
  type: 'datetime-local',

  attributeBindings: ['datetimeValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toDatetimeLocalString(value);
    }

    set(this, 'datetimeValue', value);
  },

  sanitizeInput(value) {
    if (get(this, 'value') instanceof Date) {
      return new Date(value);
    } else {
      return value;
    }
  }
});
