import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reset-button', 'Integration | Component | reset button', {
  integration: true
});

test('It invokes reset action on click', function(assert) {
  assert.expect(1);
  this.on('reset', () => assert.ok(true));
  this.render(hbs`{{reset-button reset=(action 'reset')}}`);
  this.$('input').click();
});

test('It\'s default value is \'Reset\'', function(assert) {
  this.render(hbs`{{reset-button}}`);
  assert.equal(this.$('input').val(), 'Reset');
});

test('It can be passed a text value', function(assert) {
  this.render(hbs`{{reset-button value="Cancel"}}`);
  assert.equal(this.$('input').val(), 'Cancel');
});
