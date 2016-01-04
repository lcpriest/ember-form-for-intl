import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/color-input', 'Integration | Component | {{form-controls/color-input}}', {
  integration: true
});

test('It renders an color input', function(assert) {
  this.render(hbs`{{form-controls/color-input}}`);
  assert.equal(this.$('input[type="color"]').length, 1, 'Input is rendered');
});
