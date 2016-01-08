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

test('It renders nothing when no errors present', function(assert) {
  this.render(hbs`{{form-errors}}`);
  assert.equal(this.$('*').length, 0);
});

test('Errors have role=alert', function(assert) {
  this.render(hbs`{{form-errors errors=errors}}`);
  assert.equal(this.$('div[role="alert"]').length, 2);
});
