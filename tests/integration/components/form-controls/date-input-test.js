import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/date-input', 'Integration | Component | {{form-controls/date-input}}', {
  integration: true
});

test('It renders a date input', function(assert) {
  this.render(hbs`{{form-controls/date-input}}`);
  assert.equal(this.$('input[type="date"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.set('value', new Date(2015, 9, 21));
  this.render(hbs`{{form-controls/date-input value=value}}`);
  assert.equal(this.$('input').val(), '2015-10-21', 'Date value is set');
});

test('Updating a date input that was set with a string', function(assert) {
  this.set('value', '2015-10-22');
  this.render(hbs`{{form-controls/date-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-10-22').trigger('change');
  assert.equal(this.get('value'), '2015-10-22');
});

test('Updating a date input that was set with a date', function(assert) {
  this.set('value', new Date(2015, 9, 21));
  this.render(hbs`{{form-controls/date-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-10-22').trigger('change');
  assert.ok(this.get('value') instanceof Date);
  assert.equal(+this.get('value'), +(new Date('2015-10-22')));
});
