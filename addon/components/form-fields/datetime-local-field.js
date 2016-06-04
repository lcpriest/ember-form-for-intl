import TextField from './text-field';
import {
  toDatetimeLocalString,
  formatTimeZoneOffset
} from '../../utils/date';

export default TextField.extend({
  control: 'one-way-datetime-local',

  serializeValue(value) {
    if (value instanceof Date) {
      return toDatetimeLocalString(value);
    }

    return value;
  },

  deserializeValue(value) {
    if (value != null) {
      let offset = (new Date(value)).getTimezoneOffset();
      return new Date(value + formatTimeZoneOffset(offset));
    }

    return value;
  }
});
