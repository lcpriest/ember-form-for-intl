import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/textarea', 'Integration | Component | {{form-controls/textarea}}', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{form-controls/textarea}}`);
  assert.equal(this.$('textarea').length, 1, 'Textarea is rendered');
});

test('It puts the value into the textarea', function(assert) {
  this.render(hbs`{{form-controls/textarea value="test"}}`);
  assert.equal(this.$('textarea').val(), 'test', 'textarea\'s value is \'test\'');
});

test('Changing the value updates the textarea', function(assert) {
  this.set('value', 'foo');
  this.render(hbs`{{form-controls/textarea value=value}}`);
  assert.equal(this.$('textarea').val(), 'foo', 'Textarea\'s value is \'foo\'');
  this.set('value', 'bar');
  assert.equal(this.$('textarea').val(), 'bar', 'Textarea\'s value is \'bar\'');
});

test('Typing in the textarea triggers the update action', function(assert) {
  this.render(hbs`{{form-controls/textarea update=(action (mut value))}}`);
  this.$('textarea').val('foo').trigger('input');
  assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
});

test('Changing the textarea value triggers the update action', function(assert) {
  this.render(hbs`{{form-controls/textarea update=(action (mut value))}}`);
  this.$('textarea').val('foo').trigger('change');
  assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
});

test(`it's possible to bind 'rows'`, function(assert) {
  this.render(hbs`{{form-controls/textarea rows=10}}`);
  assert.equal(this.$('textarea').attr('rows'), 10, 'attribute rows is set');
});

test(`it's possible to bind 'cols'`, function(assert) {
  this.render(hbs`{{form-controls/textarea cols=10}}`);
  assert.equal(this.$('textarea').attr('cols'), 10, 'attribute cols is set');
});

test(`it's possible to bind 'wrap'`, function(assert) {
  this.render(hbs`{{form-controls/textarea wrap="hard"}}`);
  assert.equal(this.$('textarea').attr('wrap'), 'hard', 'attribute wrap is set');
});

test(`it's possible to bind 'autocomplete'`, function(assert) {
  this.render(hbs`{{form-controls/textarea autocomplete="on"}}`);
  assert.equal(this.$('textarea').attr('autocomplete'), 'on', 'attribute autocomplete is set');
});

test(`it's possible to bind 'accesskey'`, function(assert) {
  this.render(hbs`{{form-controls/textarea accesskey="x"}}`);
  assert.equal(this.$('textarea').attr('accesskey'), 'x', 'attribute accesskey is set');
});

test(`It's possible to bind 'autofocus'`, function(assert) {
  this.render(hbs`{{form-controls/textarea autofocus=true}}`);
  assert.equal(this.$('textarea').attr('autofocus'), 'autofocus', 'Attribute autofocus is set');
});

test(`it's possible to bind 'dir'`, function(assert) {
  this.render(hbs`{{form-controls/textarea dir="rtl"}}`);
  assert.equal(this.$('textarea').attr('dir'), 'rtl', 'attribute dir is set');
});

test(`It's possible to bind 'disabled'`, function(assert) {
  this.render(hbs`{{form-controls/textarea disabled=true}}`);
  assert.equal(this.$('textarea').attr('disabled'), 'disabled', 'Attribute disabled is set');
});

test(`It's possible to bind 'form'`, function(assert) {
  this.render(hbs`{{form-controls/textarea form='form_one'}}`);
  assert.equal(this.$('textarea').attr('form'), 'form_one', 'Attribute form is set');
});

test(`it's possible to bind 'hidden'`, function(assert) {
  this.render(hbs`{{form-controls/textarea hidden="hidden"}}`);
  assert.equal(this.$('textarea').attr('hidden'), 'hidden', 'attribute hidden is set');
});

test(`it's possible to bind 'lang'`, function(assert) {
  this.render(hbs`{{form-controls/textarea lang="en-US"}}`);
  assert.equal(this.$('textarea').attr('lang'), 'en-US', 'attribute lang is set');
});

test(`It's possible to bind 'name'`, function(assert) {
  this.render(hbs`{{form-controls/textarea name='username'}}`);
  assert.equal(this.$('textarea').attr('name'), 'username', 'Attribute name is set');
});

test(`It's possible to bind 'readonly'`, function(assert) {
  this.render(hbs`{{form-controls/textarea readonly=true}}`);
  assert.equal(this.$('textarea').attr('readonly'), 'readonly', 'attribute readonly is set');
});

test(`It's possible to bind 'required'`, function(assert) {
  this.render(hbs`{{form-controls/textarea required=true}}`);
  assert.equal(this.$('textarea').attr('required'), 'required', 'attribute required is set');
});

test(`It's possible to bind 'tabindex'`, function(assert) {
  this.render(hbs`{{form-controls/textarea tabindex=4}}`);
  assert.equal(this.$('textarea').attr('tabindex'), 4, 'attribute tabindex is set');
});

test(`it's possible to bind 'title'`, function(assert) {
  this.render(hbs`{{form-controls/textarea title="A Title"}}`);
  assert.equal(this.$('textarea').attr('title'), 'A Title', 'attribute title is set');
});

test(`It's possible to bind 'maxlength'`, function(assert) {
  this.render(hbs`{{form-controls/textarea maxlength=5}}`);
  assert.equal(this.$('textarea').attr('maxlength'), 5, 'Attribute maxlength is set');
});

test(`It's possible to bind 'placeholder'`, function(assert) {
  this.render(hbs`{{form-controls/textarea placeholder='foo'}}`);
  assert.equal(this.$('textarea').attr('placeholder'), 'foo', 'Attribute placeholder is set');
});
