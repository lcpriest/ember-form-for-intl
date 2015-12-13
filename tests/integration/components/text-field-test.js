import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  run
} = Ember;

moduleForComponent('text-field', 'Integration | Component | {{text-field}}', {
  integration: true
});

function typeInInput(input, value) {
  input.val(value);
  input.trigger('input');
}

test('It renders an input', function(assert) {
  this.render(hbs`{{text-field}}`);
  assert.equal(this.$('input').length, 1);
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
