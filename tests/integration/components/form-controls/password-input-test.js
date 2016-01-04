import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/password-input', 'Integration | Component | {{form-controls/password-input}}', {
  integration: true
});

test('It renders a password input', function(assert) {
  this.render(hbs`{{form-controls/password-input}}`);
  assert.equal(this.$('input[type="password"]').length, 1, 'password input is rendered');
});
