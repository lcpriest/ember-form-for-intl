import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-errors', 'Integration | Component | {{form-errors}}', {
  integration: true,

  setup() {
    this.set('errors', [
      { message: 'can\'t be blank' },
      { message: 'must be unique' }
    ]);
  }
});

test('It renders errors', function(assert) {
  this.render(hbs`{{form-errors errors=errors}}`);
  let text = this.$().text().trim();
  assert.ok(text.indexOf('can\'t be blank') !== -1);
  assert.ok(text.indexOf('must be unique') !== -1);
});

test('Errors can optionally just be a string', function(assert) {
  this.set('errors', ['must be unique']);
  this.render(hbs`{{form-errors errors=errors}}`);
  assert.ok(this.$().text().indexOf('must be unique') !== -1);
});

test('It renders nothing when no errors present', function(assert) {
  this.render(hbs`{{form-errors}}`);
  assert.equal(this.$('*').length, 0);
});

test('Errors have role=alert', function(assert) {
  this.render(hbs`{{form-errors errors=errors}}`);
  assert.equal(this.$('div[role="alert"]').length, 2);
});

test('Each error has an id set', function(assert) {
  this.render(hbs`{{form-errors errorId="test_error" errors=errors}}`);
  assert.equal(this.$('div[role="alert"]:eq(0)').attr('id'), 'test_error-0');
  assert.equal(this.$('div[role="alert"]:eq(1)').attr('id'), 'test_error-1');
});
