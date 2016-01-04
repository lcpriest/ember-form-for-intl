import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/checkbox-field', 'Integration | Component | form fields/checkbox field', {
  integration: true
});

test('It renders a label and a checkbox', function(assert) {
  this.set('object', { accepted: false });
  this.render(hbs`{{form-fields/checkbox-field "accepted" object=object}}`);
  assert.equal(this.$('input[type="checkbox"]').length, 1);
  assert.equal(this.$('label').length, 1);
});
