import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toTimeString } from '../../utils/date-to-string';

const { set } = Ember;

export default NumberInputComponent.extend({
  type: 'time',

  attributeBindings: ['timeValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toTimeString(value);
    }

    set(this, 'timeValue', value);
  }
});
