import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/month-input', 'Integration | Component | {{form-controls/month-input}}', {
  integration: true
});

test('It renders a month input', function(assert) {
  this.render(hbs`{{form-controls/month-input}}`);
  assert.equal(this.$('input[type="month"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.set('value', new Date(2015, 9));
  this.render(hbs`{{form-controls/month-input value=value}}`);
  assert.equal(this.$('input').val(), '2015-10', 'Month value is set');
});

test('Updating a date input that was set with a string', function(assert) {
  this.set('value', '2015-10');
  this.render(hbs`{{form-controls/month-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-10').trigger('change');
  assert.equal(this.get('value'), '2015-10');
});

test('Updating a date input that was set with a date', function(assert) {
  this.set('value', new Date(2015, 9));
  this.render(hbs`{{form-controls/month-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-10').trigger('change');
  assert.ok(this.get('value') instanceof Date);
  assert.equal(+this.get('value'), +(new Date('2015-10')));
});
