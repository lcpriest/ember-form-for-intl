import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/button', 'Integration | Component | {{form-controls/button}}', {
  integration: true
});

test('It renders a button', function(assert) {
  this.render(hbs`{{form-controls/button}}`);
  assert.equal(this.$('input[type="button"]').length, 1, 'Button is rendered');
});

test('It can have a label value specified as a named param', function(assert) {
  this.render(hbs`{{form-controls/button value="Click Me"}}`);
  assert.equal(this.$('input').val(), 'Click Me', `Button has 'Click Me' as label`);
});

test('It can have a label value specified as a positional param', function(assert) {
  this.render(hbs`{{form-controls/button "Click Me"}}`);
  assert.equal(this.$('input').val(), 'Click Me', `Button has 'Click Me' as label`);
});

test('Clicking the button triggers the click action', function(assert) {
  assert.expect(1);
  this.on('click', () => assert.ok(true));
  this.render(hbs`{{form-controls/button click=(action 'click')}}`);
  this.$('input').trigger('click');
});
