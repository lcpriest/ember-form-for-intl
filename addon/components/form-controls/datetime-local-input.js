import Ember from 'ember';
import NumberInputComponent from './number-input';

import {
  toDatetimeLocalString,
  formatTimeZoneOffset
} from '../../utils/date';

const { set } = Ember;

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
    if (value != null) {
      let offset = (new Date(value)).getTimezoneOffset();
      return new Date(value + formatTimeZoneOffset(offset));
    }
  }
});
