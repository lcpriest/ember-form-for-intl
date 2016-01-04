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
