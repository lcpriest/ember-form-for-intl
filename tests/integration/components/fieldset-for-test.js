import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('fieldset-for', 'Integration | Component | {{fieldset-for}}', {
  integration: true,

  setup() {
    this.set('object', { name: 'Peter' });
  }
});

test('It renders a fieldset element', function(assert) {
  this.render(hbs`{{fieldset-for}}`);

  assert.equal(this.$('fieldset').length, 1);
});

test('It yields an helper for rendering form components', function(assert) {
  this.render(hbs`
    {{#fieldset-for object as |f|}}
      {{f.text-field "name"}}
    {{/fieldset-for}}
  `);

  assert.equal(this.$('fieldset input[type="text"]').length, 1);
});

test('It puts the given attribute\'s value in the input', function(assert) {
  this.render(hbs`
    {{#fieldset-for object as |f|}}
      {{f.text-field "name"}}
    {{/fieldset-for}}
  `);

  let $input = this.$('fieldset input[type="text"]');

  assert.equal($input.val(), 'Peter');
});

test('By default object properties are updated on typing', function(assert) {
  this.render(hbs`
    {{#fieldset-for object as |f|}}
      {{f.text-field "name"}}
    {{/fieldset-for}}
  `);

  let $input = this.$('fieldset input[type="text"]');

  run(() => {
    $input.val('Robert');
    $input.trigger('input');
  });

  assert.equal(this.get('object.name'), 'Robert');
});
