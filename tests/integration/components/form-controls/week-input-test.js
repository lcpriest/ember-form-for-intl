import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/week-input', 'Integration | Component | {{form-controls/week-input}}', {
  integration: true
});

test('It renders a week input', function(assert) {
  this.render(hbs`{{form-controls/week-input}}`);
  assert.equal(this.$('input[type="week"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.set('value', new Date(2015, 9, 21));
  this.render(hbs`{{form-controls/week-input value=value}}`);
  assert.equal(this.$('input').val(), '2015-W43', 'Week value is set');
});

test('Updating a date input that was set with a string', function(assert) {
  this.set('value', '2015-W43');
  this.render(hbs`{{form-controls/week-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-W44').trigger('change');
  assert.equal(this.get('value'), '2015-W44');
});

test('Updating a date input that was set with a date', function(assert) {
  this.set('value', new Date(2015, 9, 21));
  this.render(hbs`{{form-controls/week-input value=value update=(action (mut value))}}`);
  this.$('input').val('2015-W44').trigger('change');
  assert.ok(this.get('value') instanceof Date);
  assert.equal(+this.get('value'), +(new Date(2015, 9, 26)));
});
