import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('submit-button', 'Integration | Component | submit button', {
  integration: true
});

test('It invokes submit action on click', function(assert) {
  assert.expect(1);
  this.on('submit', () => assert.ok(true));
  this.render(hbs`{{submit-button submit=(action 'submit')}}`);
  this.$('input').click();
});

test('It\'s default value is \'Submit\'', function(assert) {
  this.render(hbs`{{submit-button}}`);
  assert.equal(this.$('input').val(), 'Submit');
});

test('It can be passed a text value', function(assert) {
  this.render(hbs`{{submit-button value="Create"}}`);
  assert.equal(this.$('input').val(), 'Create');
});
