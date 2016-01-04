import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/radio-field', 'Integration | Component | form fields/radio field', {
  integration: true
});

test('It renders a label and a checkbox', function(assert) {
  this.set('object', { accepted: true });
  this.render(hbs`{{form-fields/radio-field "accepted" true object=object}}`);
  assert.equal(this.$('input[type="radio"]').length, 1);
  assert.equal(this.$('input').val(), 'true');
  assert.equal(this.$('label').length, 1);
  assert.equal(this.$('label').text().trim(), 'True');
});
