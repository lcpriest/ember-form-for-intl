import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toWeekString } from '../../utils/date-to-string';

const { get, set } = Ember;

const weekStringToDate = (string) => {
  let [year, weekNr] = string.match(/^(\d{4})-W(\d{1,2})$/).slice(1);
  let jan1OfYear = new Date(Number(year), 0, 1);
  let jan1isWeek1 = jan1OfYear.getDay() < 4;
  let correction  = new Date(Number(year), 0, 4).getDay() + 4;

  if (!jan1isWeek1) {
    correction += 7;
  }

  let offsetFrom1Jan = (Number(weekNr) * 7 + 1 - correction) * 8.64e7;

  return new Date(+jan1OfYear + offsetFrom1Jan);
};

export default NumberInputComponent.extend({
  type: 'week',

  attributeBindings: ['weekValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toWeekString(value);
    }

    set(this, 'weekValue', value);
  },

  sanitizeInput(value) {
    if (get(this, 'value') instanceof Date) {
      return weekStringToDate(value);
    } else {
      return value;
    }
  }
});
