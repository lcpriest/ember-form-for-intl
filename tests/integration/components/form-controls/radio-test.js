import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/radio', 'Integration | Component | {{form-controls/radio}}', {
  integration: true
});

test('It renders a radio', function(assert) {
  this.render(hbs`{{form-controls/radio}}`);
  assert.equal(this.$('input[type="radio"]').length, 1, 'Radio is rendered');
});

test('Is selected when value matches option', function(assert) {
  this.set('value', 'yes');
  this.render(hbs`{{form-controls/radio value value="yes"}}`);

  assert.equal(this.$('input:checked').length, 1, 'Radio is checked');
});
test('Is not selected when value does not match option', function(assert) {
  this.set('value', 'no');
  this.render(hbs`{{form-controls/radio value value="yes"}}`);

  assert.equal(this.$('input:checked').length, 0);
});

test('Triggers update action when clicked', function(assert) {
  assert.expect(1);
  this.on('update', (value) => assert.equal(value, 'no'));
  this.render(hbs`{{form-controls/radio checked=value value="no" update=(action 'update')}}`);

  this.$('input').click();
});

test('Triggers update action when clicked in a radio button group', function(assert) {
  assert.expect(1);
  this.on('update', (value) => assert.equal(value, 'yes'));
  this.set('value', 'no');
  this.render(hbs`
    {{form-controls/radio checked=value value="yes" update=(action 'update') name="x"}}
    {{form-controls/radio checked=value value="no"  update=(action 'update') name="x"}}
  `);

  this.$('input[value="yes"]').click();
});
