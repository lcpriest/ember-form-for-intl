import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/color-input', 'Integration | Component | {{form-controls/hidden-input}}', {
  integration: true
});

test('It renders an hidden input', function(assert) {
  this.render(hbs`{{form-controls/hidden-input}}`);
  assert.equal(this.$('input[type="hidden"]').length, 1, 'Hidden input is rendered');
});
