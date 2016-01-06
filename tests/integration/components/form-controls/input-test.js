import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/input', 'Integration | Component | {{form-controls/input}}', {
  integration: true
});

test('It renders an text input', function(assert) {
  this.render(hbs`{{form-controls/input}}`);
  assert.equal(this.$('input[type="text"]').length, 1, 'Input is rendered');
});

test('It puts the value into the input', function(assert) {
  this.render(hbs`{{form-controls/input value="test"}}`);
  assert.equal(this.$('input').val(), 'test', 'input\'s value is \'test\'');
});

test('Value can be the first positional param', function(assert) {
  this.render(hbs`{{form-controls/input "test"}}`);
  assert.equal(this.$('input').val(), 'test', 'input\'s value is \'test\'');
});

test('Changing the value updates the input', function(assert) {
  this.set('value', 'foo');
  this.render(hbs`{{form-controls/input value=value}}`);
  assert.equal(this.$('input').val(), 'foo', 'Input\'s value is \'foo\'');
  this.set('value', 'bar');
  assert.equal(this.$('input').val(), 'bar', 'Input\'s value is \'bar\'');
});

test('Typing in the input triggers the update action', function(assert) {
  this.render(hbs`{{form-controls/input update=(action (mut value))}}`);
  this.$('input').val('foo').trigger('input');
  assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
});

test('Changing the input value triggers the update action', function(assert) {
  this.render(hbs`{{form-controls/input update=(action (mut value))}}`);
  this.$('input').val('foo').trigger('change');
  assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
});

test('It is possible to specify a sanitizeInput function', function(assert) {
  this.on('sanitize', (value) => value.toUpperCase());
  this.render(hbs`{{form-controls/input
    sanitizeInput=(action 'sanitize') update=(action (mut value))}}`);
  this.$('input').val('foo').trigger('change');
  assert.equal(this.get('value'), 'FOO', 'Value was transformed to uppercase');
});

test(`It's possible to bind 'autosave'`, function(assert) {
  this.render(hbs`{{form-controls/input autosave='search'}}`);
  assert.equal(this.$('input').attr('autosave'), 'search', 'Attribute autosave is set');
});

test(`It's possible to bind 'inputmode'`, function(assert) {
  this.render(hbs`{{form-controls/input inputmode='latin'}}`);
  assert.equal(this.$('input').attr('inputmode'), 'latin', 'Attribute inputmode is set');
});

test(`It's possible to bind 'list'`, function(assert) {
  this.render(hbs`{{form-controls/input list='list_element'}}`);
  assert.equal(this.$('input').attr('list'), 'list_element', 'Attribute list is set');
});

test(`It's possible to bind 'maxlength'`, function(assert) {
  this.render(hbs`{{form-controls/input maxlength=5}}`);
  assert.equal(this.$('input').attr('maxlength'), 5, 'Attribute maxlength is set');
});

test(`It's possible to bind 'minlength'`, function(assert) {
  this.render(hbs`{{form-controls/input minlength=5}}`);
  assert.equal(this.$('input').attr('minlength'), 5, 'Attribute minlength is set');
});

test(`It's possible to bind 'pattern'`, function(assert) {
  this.render(hbs`{{form-controls/input pattern='foo'}}`);
  assert.equal(this.$('input').attr('pattern'), 'foo', 'Attribute pattern is set');
});

test(`It's possible to bind 'placeholder'`, function(assert) {
  this.render(hbs`{{form-controls/input placeholder='foo'}}`);
  assert.equal(this.$('input').attr('placeholder'), 'foo', 'Attribute placeholder is set');
});

test(`It's possible to bind 'size'`, function(assert) {
  this.render(hbs`{{form-controls/input size=5}}`);
  assert.equal(this.$('input').attr('size'), 5, 'attribute size is set');
});

test(`It's possible to bind 'spellcheck'`, function(assert) {
  this.render(hbs`{{form-controls/input spellcheck=true}}`);
  assert.equal(this.$('input').attr('spellcheck'), 'true', 'attribute spellcheck is set');
});
