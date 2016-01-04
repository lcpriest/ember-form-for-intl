import Ember from 'ember';
import NumberInputComponent from './number-input';

import { toDateString } from '../../utils/date-to-string';

const { set } = Ember;

export default NumberInputComponent.extend({
  type: 'date',

  attributeBindings: ['dateValue:value'],

  didReceiveAttrs() {
    let value = this.getAttr('value');
    if (value instanceof Date) {
      value = toDateString(value);
    }

    set(this, 'dateValue', value);
  }
});
