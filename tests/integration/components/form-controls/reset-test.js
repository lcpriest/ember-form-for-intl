import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/reset', 'Integration | Component | {{form-controls/reset}}', {
  integration: true
});

test('It renders a reset button', function(assert) {
  this.render(hbs`{{form-controls/reset}}`);
  assert.equal(this.$('input[type="reset"]').length, 1, 'Reset button is rendered');
});
