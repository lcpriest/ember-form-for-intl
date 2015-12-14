import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  run
} = Ember;

moduleForComponent('text-field', 'Integration | Component | {{text-field}}', {
  integration: true,

  setup() {
    this.set('object', { name: 'Peter' });
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
  this.render(hbs`{{text-field object=object propertyName="name"}}`);
  assert.equal(this.$('input').val(), 'Peter');
});

test('#propertyName is the first positional param', function(assert) {
  this.render(hbs`{{text-field "name" object=object}}`);
  assert.equal(this.$('input').val(), 'Peter');
});

test('It triggers a default update action when being typed in', function(assert) {
  this.render(hbs`
    {{text-field propertyName="name" object=object}}
  `);

  run(() => typeInInput(this.$('input'), 'Robert'));

  assert.equal(this.get('object.name'), 'Robert');
});

test('It can be passed an update action', function(assert) {
  assert.expect(1);

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

test('Clicking on the label focuses the input', function(assert) {
  this.render(hbs`{{text-field "firstName" object=object}}`);

  // Clicking and checking for focus status was unreliable
  // So we test for having for and id attribute being the same
  assert.equal(this.$('label').attr('for'), this.$('input').attr('id'));
});

test('{{color-field}}', function(assert) {
  this.render(hbs`{{color-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="color"]').length, 1);
});

test('{{date-field}}', function(assert) {
  this.render(hbs`{{date-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="date"]').length, 1);
});

test('{{datetime-field}}', function(assert) {
  this.render(hbs`{{datetime-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="datetime"]').length, 1);
});

test('{{datetime-local-field}}', function(assert) {
  this.render(hbs`{{datetime-local-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="datetime-local"]').length, 1);
});

test('{{email-field}}', function(assert) {
  this.render(hbs`{{email-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="email"]').length, 1);
});

test('{{file-field}}', function(assert) {
  this.render(hbs`{{file-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="file"]').length, 1);
});

test('{{hidden-field}}', function(assert) {
  this.render(hbs`{{hidden-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="hidden"]').length, 1);
});

test('{{month-field}}', function(assert) {
  this.render(hbs`{{month-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="month"]').length, 1);
});

test('{{number-field}}', function(assert) {
  this.render(hbs`{{number-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="number"]').length, 1);
});

test('{{password-field}}', function(assert) {
  this.render(hbs`{{password-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="password"]').length, 1);
});

test('{{range-field}}', function(assert) {
  this.render(hbs`{{range-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="range"]').length, 1);
});

test('{{search-field}}', function(assert) {
  this.render(hbs`{{search-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="search"]').length, 1);
});

test('{{tel-field}}', function(assert) {
  this.render(hbs`{{tel-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="tel"]').length, 1);
});

test('{{text-field}}', function(assert) {
  this.render(hbs`{{text-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="text"]').length, 1);
});

test('{{time-field}}', function(assert) {
  this.render(hbs`{{time-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="time"]').length, 1);
});

test('{{url-field}}', function(assert) {
  this.render(hbs`{{url-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="url"]').length, 1);
});

test('{{week-field}}', function(assert) {
  this.render(hbs`{{week-field "firstName" object=object}}`);
  assert.equal(this.$('input[type="week"]').length, 1);
});
