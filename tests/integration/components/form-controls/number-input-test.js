import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/color-input', 'Integration | Component | {{form-controls/number-input}}', {
  integration: true
});

test('It renders a number input', function(assert) {
  this.render(hbs`{{form-controls/number-input}}`);
  assert.equal(this.$('input[type="number"]').length, 1, 'Number input is rendered');
});

test('It accepts a number value', function(assert) {
  this.set('value', 3.14);
  this.render(hbs`{{form-controls/number-input value=value}}`);
  assert.equal(this.$('input').val(), 3.14, 'Number value is set');
});

test(`It's possible to bind 'min'`, function(assert) {
  this.render(hbs`{{form-controls/number-input min=-42}}`);
  assert.equal(this.$('input').attr('min'), -42, 'Attribute min is set');
});

test(`It's possible to bind 'max'`, function(assert) {
  this.render(hbs`{{form-controls/number-input max=42}}`);
  assert.equal(this.$('input').attr('max'), 42, 'Attribute max is set');
});

test(`It's possible to bind 'step'`, function(assert) {
  this.render(hbs`{{form-controls/number-input step=5}}`);
  assert.equal(this.$('input').attr('step'), 5, 'Attribute step is set');
});
