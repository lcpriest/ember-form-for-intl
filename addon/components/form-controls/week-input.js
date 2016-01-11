import Ember from 'ember';
import NumberInputComponent from './number-input';

import { fromWeekString, toWeekString } from '../../utils/date';

const { set } = Ember;

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
    if (value != null) {
      return fromWeekString(value);
    }
  }
});
