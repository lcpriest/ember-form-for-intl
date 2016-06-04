import TextField from './text-field';
import { fromWeekString, toWeekString } from '../../utils/date';

export default TextField.extend({
  control: 'one-way-week',

  serializeValue(value) {
    if (value instanceof Date) {
      return toWeekString(value);
    }

    return value;
  },

  deserializeValue(value) {
    if (value != null) {
      return fromWeekString(value);
    }

    return value;
  }
});
