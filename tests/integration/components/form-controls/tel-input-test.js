import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/tel-input', 'Integration | Component | {{form-controls/tel-input}}', {
  integration: true
});

test('It renders a tel input', function(assert) {
  this.render(hbs`{{form-controls/tel-input}}`);
  assert.equal(this.$('input[type="tel"]').length, 1, 'Tel input is rendered');
});
