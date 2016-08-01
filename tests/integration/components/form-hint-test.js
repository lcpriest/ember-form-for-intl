import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-hint', 'Integration | Component | {{form-hint}}', {
  integration: true
});

test('It renders a hint', function(assert) {
  this.render(hbs`{{form-hint hint="This is a hint"}}`);
  assert.equal(this.$('span').text().trim(), 'This is a hint');
});

test('It doesn\'t renders a thing', function(assert) {
  this.render(hbs`{{form-hint}}`);
  assert.equal(this.$('span').length, 0);
});

test('It can be passed an id', function(assert) {
  this.render(hbs`{{form-hint hint="This is a hint" hintId="hint1"}}`);
  assert.equal(this.$('span#hint1').length, 1);
});
