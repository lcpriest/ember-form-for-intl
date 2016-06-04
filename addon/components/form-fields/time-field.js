import TextField from './text-field';
import { toTimeString, toDateString } from '../../utils/date';

export default TextField.extend({
  control: 'one-way-time',

  serializeValue(value) {
    if (value instanceof Date) {
      return toTimeString(value);
    }

    return value;
  },

  deserializeValue(value, currentValue) {
    if (value != null) {
      return new Date(`${toDateString(currentValue)}T${value}`);
    }

    return value;
  }
});
