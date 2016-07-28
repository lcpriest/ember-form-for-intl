import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { Component } = Ember;

moduleForComponent('form-fields/custom-field', 'Integration | Component | {{form-fields/custom-field}}', {
  integration: true,

  setup() {
    this.set('object', { givenName: 'Albert' });
    this.set('propertyName', 'givenName');
  }
});

test('It renders a label and a text input', function(assert) {
  this.render(hbs`{{form-fields/custom-field propertyName object=object}}`);
  assert.equal(this.$('input[type="text"]').length, 1);
  assert.equal(this.$('label').length, 1);
});

test('Passing a custom template', function(assert) {
  this.render(hbs`
    {{#form-fields/custom-field propertyName object=object as |f|}}
      {{f.control}}
    {{/form-fields/custom-field}}
  `);
  assert.equal(this.$('input[type="text"]').length, 1);
});

test('By default changing the input updates the value', function(assert) {
  this.render(hbs`{{form-fields/custom-field propertyName object=object}}`);
  this.$('input').val('Mark').trigger('change');
  assert.equal(this.get('object.givenName'), 'Mark');
});

test('A custom update action can be passed', function(assert) {
  assert.expect(1);
  this.on('update', (object, propertyPath, value) => assert.equal(value, 'Mark'));
  this.render(hbs`{{form-fields/custom-field propertyName object=object update=(action 'update')}}`);
  this.$('input').val('Mark').trigger('change');
});

test('A custom component can be passed', function(assert) {
  this.register('component:my-custom-form-field', Component.extend({
    layout: hbs`<span>{{f.label}}</span><span>{{f.control}}</span>`
  }));

  this.render(hbs`{{form-fields/custom-field propertyName object=object component=(component "my-custom-form-field")}}`);

  assert.equal(this.$('span label').length, 1, 'The label is rendered in a span');
  assert.equal(this.$('span input').length, 1, 'The input is rendered in a span');
});
