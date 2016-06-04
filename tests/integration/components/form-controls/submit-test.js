import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/submit', 'Integration | Component | {{form-controls/submit}}', {
  integration: true
});

test('It renders a submit button', function(assert) {
  this.render(hbs`{{form-controls/submit}}`);
  assert.equal(this.$('button').attr('type'), 'submit', 'Submit button is rendered');
});

test('Clicking the submit button triggers the submit action', function(assert) {
  assert.expect(1);
  this.on('submit', () => assert.ok(true));
  this.render(hbs`{{form-controls/submit submit=(action 'submit')}}`);
  this.$('button').trigger('click');
});

test(`it's possible to bind 'formaction'`, function(assert) {
  this.render(hbs`{{form-controls/submit formaction="http://example.com/form"}}`);
  assert.equal(this.$('button').attr('formaction'), 'http://example.com/form', 'attribute formaction is set');
});

test(`it's possible to bind 'formenctype'`, function(assert) {
  this.render(hbs`{{form-controls/submit formenctype="text/plain"}}`);
  assert.equal(this.$('button').attr('formenctype'), 'text/plain', 'attribute formenctype is set');
});

test(`it's possible to bind 'formmethod'`, function(assert) {
  this.render(hbs`{{form-controls/submit formmethod="POST"}}`);
  assert.equal(this.$('button').attr('formmethod'), 'POST', 'attribute formmethod is set');
});

test(`it's possible to bind 'formtarget'`, function(assert) {
  this.render(hbs`{{form-controls/submit formtarget="_blank"}}`);
  assert.equal(this.$('button').attr('formtarget'), '_blank', 'attribute formtarget is set');
});

test(`it's possible to bind 'formnovalidate'`, function(assert) {
  this.render(hbs`{{form-controls/submit formnovalidate="formnovalidate"}}`);
  assert.equal(this.$('button').attr('formnovalidate'), 'formnovalidate', 'attribute formnovalidate is set');
});
