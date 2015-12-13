import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  run
} = Ember;

moduleForComponent('text-field', 'Integration | Component | {{text-field}}', {
  integration: true,

  setup() {
    this.set('object', {});
  }
});

function typeInInput(input, value) {
  input.val(value);
  input.trigger('input');
}

test('It raises an error when propertyName is not set', function(assert) {
  assert.throws(() => {
    this.render(hbs`{{text-field object=object}}`);
  }, /{{text-field}} requires propertyName to be set/);
});

test('It raises an error when object is not set', function(assert) {
  assert.throws(() => {
    this.render(hbs`{{text-field propertyName="name"}}`);
  }, /{{text-field}} requires object to be set/);
});

test('The input\'s value is equal to the given object and propertyName', function(assert) {
  this.set('object', { name: 'Peter' });
  this.render(hbs`{{text-field object=object propertyName="name"}}`);
  assert.equal(this.$('input').val(), 'Peter');
});

test('#propertyName is the first positional param', function(assert) {
  this.set('object', { name: 'Peter' });
  this.render(hbs`{{text-field "name" object=object}}`);
  assert.equal(this.$('input').val(), 'Peter');
});

test('It triggers a default update action when being typed in', function(assert) {
  this.set('object', { name: 'Peter' });

  this.render(hbs`
    {{text-field propertyName="name" object=object}}
  `);

  run(() => typeInInput(this.$('input'), 'Robert'));

  assert.equal(this.get('object.name'), 'Robert');
});

test('It can be given a custom update action', function(assert) {
  assert.expect(1);
  this.set('object', { name: 'Peter' });
  this.on('update', (object, propertyName, value) => {
    assert.equal(value, 'Robert');
  });

  this.render(hbs`
    {{text-field propertyName="name" object=object update=(action "update")}}
  `);

  run(() => typeInInput(this.$('input'), 'Robert'));
});

test('It has a label inferred from the propertyName', function(assert) {
  this.render(hbs`{{text-field "firstName" object=object}}`);
  assert.equal(this.$('label').text().trim(), 'First Name');
});

test('A custom label can be set', function(assert) {
  this.render(hbs`{{text-field "firstName" object=object label="First"}}`);
  assert.equal(this.$('label').text().trim(), 'First');
});
