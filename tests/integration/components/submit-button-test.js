import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('submit-button', 'Integration | Component | submit button', {
  integration: true
});

test('It invokes submit action on click', function(assert) {
  assert.expect(1);
  this.on('submit', () => assert.ok(true));
  this.render(hbs`{{submit-button submit=(action 'submit')}}`);
  this.$('input[type="submit"]').click();
});
