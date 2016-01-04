import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toWeekString } from '../../utils/date-to-string';

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
  }
});
