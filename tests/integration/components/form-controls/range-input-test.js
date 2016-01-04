import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/range-input', 'Integration | Component | {{form-controls/range-input}}', {
  integration: true
});

test('It renders a range input', function(assert) {
  this.render(hbs`{{form-controls/range-input}}`);
  assert.equal(this.$('input[type="range"]').length, 1, 'Range input is rendered');
});
