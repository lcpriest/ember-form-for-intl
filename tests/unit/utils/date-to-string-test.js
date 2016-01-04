import {
  pad,
  formatTimeZoneOffset,
  toMonthString,
  toWeekString,
  toDateString,
  toTimeString,
  toDatetimeString,
  toDatetimeLocalString
} from 'ember-form-for/utils/date-to-string';

import { module, test } from 'qunit';

module('Unit | Utility | date-to-string#pad');

test('It pads numbers lower then 10', (assert) => {
  [0,1,2,3,4,5,6,7,8,9].forEach((n) => assert.equal(pad(n), `0${n}`));
});

test('It doesn\'t pad numbers greater or equal then 10', (assert) => {
  assert.equal(pad(10), '10');
});

test('Pad with multiple zeroes', (assert) => {
  assert.equal(pad(10, 3), '010');
});

module('Unit | Utility | date-to-string#formatTimeZoneOffset');

test('Produces \'Z\' if 0', (assert) => {
  assert.equal(formatTimeZoneOffset(0), 'Z');
});

test('Produces \'+01:00\' if -60', (assert) => {
  assert.equal(formatTimeZoneOffset(-60), '+01:00');
});

test('Produces \'-01:00\' if 60', (assert) => {
  assert.equal(formatTimeZoneOffset(60), '-01:00');
});

module('Unit | Utility | date-to-string#toMonthString');

test('It stringifies to month', (assert) => {
  assert.equal(toMonthString(new Date(2015, 9)), '2015-10');
});

module('Unit | Utility | date-to-string#toMonthString');

test('It stringifies to week', (assert) => {
  assert.equal(toWeekString(new Date(2016, 1, 16)), '2016-W7');
});

module('Unit | Utility | date-to-string#toDateString');

test('It stringifies to date', (assert) => {
  assert.equal(toDateString(new Date(2015, 9, 21)), '2015-10-21');
});

module('Unit | Utility | date-to-string#toTimeString');

test('It stringifies to time', (assert) => {
  assert.equal(toTimeString(new Date(2015, 9, 21, 16, 9)), '16:09');
});

module('Unit | Utility | date-to-string#toDatetimeString');

test('It stringifies to datetime', (assert) => {
  let date = new Date(2015, 9, 21, 16, 9);
  assert.equal(toDatetimeString(date), `2015-10-21T16:09:00.000${formatTimeZoneOffset(date.getTimezoneOffset())}`);
});

module('Unit | Utility | date-to-string#toDatetimeLocalString');

test('It stringifies to datetime-local format', (assert) => {
  assert.equal(toDatetimeLocalString(new Date(2015, 9, 21, 16, 9)), '2015-10-21T16:09');
});
