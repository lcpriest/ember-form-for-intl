import { skip } from 'qunit';
import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('form-for', 'Integration | Component | {{form-for}}', {
  integration: true,

  setup() {
    this.set('object', { name: 'Peter' });
  }
});

test('It renders a form element', function(assert) {
  this.render(hbs`{{form-for}}`);

  assert.equal(this.$('form').length, 1);
});

test('It yields an helper for rendering form components', function(assert) {
  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.text-field "name"}}
    {{/form-for}}
  `);

  assert.equal(this.$('form input[type="text"]').length, 1);
});

test('It puts the given attribute\'s value in the input', function(assert) {
  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.text-field "name"}}
    {{/form-for}}
  `);

  let $input = this.$('form input[type="text"]');

  assert.equal($input.val(), 'Peter');
});

test('By default object properties are updated on typing', function(assert) {
  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.text-field "name"}}
    {{/form-for}}
  `);

  let $input = this.$('form input[type="text"]');

  run(() => {
    $input.val('Robert');
    $input.trigger('input');
  });

  assert.equal(this.get('object.name'), 'Robert');
});

test('It passes an update action to the fields', function(assert) {
  assert.expect(1);
  this.on('update', (object, propertyName, value) => {
    assert.equal(value, 'Robert');
  });

  this.render(hbs`
    {{#form-for object update=(action 'update') as |f|}}
      {{f.text-field "name"}}
    {{/form-for}}
  `);

  let $input = this.$('form input[type="text"]');
  $input.val('Robert');
  $input.trigger('input');
});

test('Adding a custom field', function(assert) {
  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.custom-field "name" control="one-way-search"}}
    {{/form-for}}
  `);

  assert.equal(this.$('form input[type="search"]').length, 1);
});

test('Adding a custom field with template', function(assert) {
  this.render(hbs`
    {{#form-for object as |f|}}
      {{#f.custom-field "name" as |ff|}}
        {{ff.control}}
      {{/f.custom-field}}
    {{/form-for}}
  `);

  assert.equal(this.$('form input').length, 1);
});

skip('It\'s helper can render a submit button', function(assert) {
  assert.expect(1);
  this.on('submit', (object) => assert.equal(object, this.get('object')));
  this.render(hbs`
    {{#form-for object submit=(action 'submit') as |f|}}
      {{f.submit}}
    {{/form-for}}
  `);

  this.$('input[type="submit"]').click();
});

skip('Submit calls object#save by default', function(assert) {
  assert.expect(1);
  this.set('object', { save: () => assert.ok(true) });

  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.submit}}
    {{/form-for}}
  `);

  this.$('input[type="submit"]').click();
});

skip('It\'s helper can render a reset button', function(assert) {
  assert.expect(1);
  this.on('reset', (object) => assert.equal(object, this.get('object')));
  this.render(hbs`
    {{#form-for object reset=(action 'reset') as |f|}}
      {{f.reset}}
    {{/form-for}}
  `);

  this.$('input[type="reset"]').click();
});

skip('Reset calls object#rollback by default', function(assert) {
  assert.expect(1);
  this.set('object', { rollback: () => assert.ok(true) });

  this.render(hbs`
    {{#form-for object as |f|}}
      {{f.reset}}
    {{/form-for}}
  `);

  this.$('input[type="reset"]').click();
});
