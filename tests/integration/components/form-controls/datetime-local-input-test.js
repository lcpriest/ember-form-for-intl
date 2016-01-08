import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/datetime-local-input', 'Integration | Component | {{form-controls/datetime-local-input}}', {
  integration: true
});

test('It renders a datetime input', function(assert) {
  this.render(hbs`{{form-controls/datetime-local-input}}`);
  assert.equal(this.$('input[type="datetime-local"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.set('value', new Date(2015, 9, 21, 16, 9));
  this.render(hbs`{{form-controls/datetime-local-input value=value}}`);
  assert.equal(this.$('input').val(), '2015-10-21T16:09', 'Date value is set');
});

test('Updating a date input that was set with a string', function(assert) {
  this.set('value', '2015-10-21T16:09');
  this.render(hbs`{{form-controls/datetime-local-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-10-22T16:10').trigger('change');
  assert.equal(this.get('value'), '2015-10-22T16:10');
});

test('Updating a date input that was set with a date', function(assert) {
  this.set('value', new Date(2015, 9, 21, 16, 9));
  this.render(hbs`{{form-controls/datetime-local-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-10-22T16:10').trigger('change');
  assert.ok(this.get('value') instanceof Date);
  assert.equal(+this.get('value'), +(new Date('2015-10-22T16:10')));
});
