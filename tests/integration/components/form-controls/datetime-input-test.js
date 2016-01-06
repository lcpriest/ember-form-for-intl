import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { toDatetimeString } from 'ember-form-for/utils/date-to-string';

moduleForComponent('form-controls/datetime-input', 'Integration | Component | {{form-controls/datetime-input}}', {
  integration: true
});

test('It renders a datetime input', function(assert) {
  this.render(hbs`{{form-controls/datetime-input}}`);
  assert.equal(this.$('input[type="datetime"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  let date = new Date(2015, 9, 21, 16, 9);
  this.set('value', date);
  this.render(hbs`{{form-controls/datetime-input value=value}}`);
  assert.equal(this.$('input').val(), toDatetimeString(date), 'Datetime value is set');
});

test('Updating a date input that was set with a string', function(assert) {
  this.set('value', toDatetimeString(new Date(2015, 9, 21, 16, 9)));
  this.render(hbs`{{form-controls/datetime-input value=value update=(action (mut value))}}`);
  this.$('input').val(toDatetimeString(new Date(2015, 9, 22, 16, 10))).trigger('change');
  assert.equal(this.get('value'), toDatetimeString(new Date(2015, 9, 22, 16, 10)));
});

test('Updating a date input that was set with a date', function(assert) {
  this.set('value', new Date(2015, 9, 21, 16, 9));
  this.render(hbs`{{form-controls/datetime-input value=value update=(action (mut value))}}`);
  this.$('input').val(toDatetimeString(new Date(2015, 9, 22, 16, 10))).trigger('change');
  assert.ok(this.get('value') instanceof Date);
  assert.equal(+this.get('value'), +(new Date(2015, 9, 22, 16, 10)));
});
