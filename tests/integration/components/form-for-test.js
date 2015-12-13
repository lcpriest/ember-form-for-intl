import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-for', 'Integration | Component | {{form-for}}', {
  integration: true
});

test('It renders a form element', function(assert) {
  this.render(hbs`{{form-for}}`);

  assert.equal(this.$('form').length, 1);
});

test('It yields an helper for rendering form components', function(assert) {
  this.set('object', {});
  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.text-field}}
    {{/form-for}}
  `);

  assert.equal(this.$('form input[type="text"]').length, 1);
});

test('It puts the given attribute\'s value in the input', function(assert) {
  this.set('object', { name: 'Peter' });
  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.text-field "name"}}
    {{/form-for}}
  `);

  let $input = this.$('form input[type="text"]');

  assert.equal($input.val(), 'Peter');
});
