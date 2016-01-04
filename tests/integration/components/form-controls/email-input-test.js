import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/color-input', 'Integration | Component | {{form-controls/email-input}}', {
  integration: true
});

test('It renders an email input', function(assert) {
  this.render(hbs`{{form-controls/email-input}}`);
  assert.equal(this.$('input[type="email"]').length, 1, 'Email input is rendered');
});

test(`it's possible to bind 'multiple'`, function(assert) {
  this.render(hbs`{{form-controls/email-input multiple=true}}`);
  assert.equal(this.$('input').attr('multiple'), 'multiple', 'attribute multiple is set');
});
