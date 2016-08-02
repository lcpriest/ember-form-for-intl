import TextField from './text-field';
import { toDateString } from '../../utils/date';

export default TextField.extend({
  control: 'one-way-date',

  serializeValue(value) {
    if (value instanceof Date) {
      return toDateString(value);
    }

    return value;
  },

  deserializeValue(value) {
    if (value === '' || value === null) {
      return null;
    }

    return new Date(value);
  }
});
