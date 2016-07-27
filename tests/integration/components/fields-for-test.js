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

test('It yields an helper for rendering form components', function(assert) {
  this.render(hbs`
    {{#fields-for object as |f|}}
      {{f.text-field "name"}}
    {{/fields-for}}
  `);

  assert.equal(this.$('input[type="text"]').length, 1);
});

test('It puts the given attribute\'s value in the input', function(assert) {
  this.render(hbs`
    {{#fields-for object as |f|}}
      {{f.text-field "name"}}
    {{/fields-for}}
  `);

  let $input = this.$('input[type="text"]');

  assert.equal($input.val(), 'Peter');
});

test('By default object properties are updated on typing', function(assert) {
  this.render(hbs`
    {{#fields-for object as |f|}}
      {{f.text-field "name"}}
    {{/fields-for}}
  `);

  let $input = this.$('input[type="text"]');

  run(() => {
    $input.val('Robert');
    $input.trigger('input');
  });

  assert.equal(this.get('object.name'), 'Robert');
});
