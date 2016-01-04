import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/checkbox', 'Integration | Component | {{form-controls/checkbox}}', {
  integration: true
});

test('It renders a checkbox', function(assert) {
  this.render(hbs`{{form-controls/checkbox}}`);
  assert.equal(this.$('input[type="checkbox"]').length, 1, 'Checkbox is rendered');
});

test('It sets the checked value', function(assert) {
  this.render(hbs`{{form-controls/checkbox}}`);
  assert.equal(this.$('input:checked').length, 0, 'Checkbox is not checked');

  this.render(hbs`{{form-controls/checkbox checked=true}}`);
  assert.equal(this.$('input:checked').length, 1, 'Checkbox is checked');

  this.render(hbs`{{form-controls/checkbox checked=false}}`);
  assert.equal(this.$('input:checked').length, 0, 'Checkbox is not checked');
});

test('Setting the value property', function(assert) {
  this.render(hbs`{{form-controls/checkbox value="Affirmative"}}`);
  assert.equal(this.$('input').val(), 'Affirmative', 'Checkbox value is set');
});

test('Clicking the checkbox triggers the update action', function(assert) {
  this.render(hbs`{{form-controls/checkbox update=(action (mut value))}}`);
  this.$('input').trigger('click');
  assert.equal(this.get('value'), true);

  this.$('input').trigger('click');
  assert.equal(this.get('value'), false);
});
