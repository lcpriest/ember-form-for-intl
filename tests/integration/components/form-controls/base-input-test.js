import { skip } from 'qunit';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/base-input', 'Integration | Component | {{form-controls/base-input}}', {
  integration: true
});

test('It renders an input', function(assert) {
  this.render(hbs`{{form-controls/base-input}}`);
  assert.equal(this.$('input').length, 1, 'Input is rendered');
});

test(`it's possible to bind 'autocomplete'`, function(assert) {
  this.render(hbs`{{form-controls/base-input autocomplete="on"}}`);
  assert.equal(this.$('input').attr('autocomplete'), 'on', 'attribute autocomplete is set');
});

test(`it's possible to bind 'accesskey'`, function(assert) {
  this.render(hbs`{{form-controls/base-input accesskey="x"}}`);
  assert.equal(this.$('input').attr('accesskey'), 'x', 'attribute accesskey is set');
});

test(`It's possible to bind 'autofocus'`, function(assert) {
  this.render(hbs`{{form-controls/base-input autofocus=true}}`);
  assert.equal(this.$('input').attr('autofocus'), 'autofocus', 'Attribute autofocus is set');
});

test(`it's possible to bind 'dir'`, function(assert) {
  this.render(hbs`{{form-controls/base-input dir="rtl"}}`);
  assert.equal(this.$('input').attr('dir'), 'rtl', 'attribute dir is set');
});

test(`It's possible to bind 'disabled'`, function(assert) {
  this.render(hbs`{{form-controls/base-input disabled=true}}`);
  assert.equal(this.$('input').attr('disabled'), 'disabled', 'Attribute disabled is set');
});

test(`It's possible to bind 'form'`, function(assert) {
  this.render(hbs`{{form-controls/base-input form='form_one'}}`);
  assert.equal(this.$('input').attr('form'), 'form_one', 'Attribute form is set');
});

test(`it's possible to bind 'hidden'`, function(assert) {
  this.render(hbs`{{form-controls/base-input hidden="hidden"}}`);
  assert.equal(this.$('input').attr('hidden'), 'hidden', 'attribute hidden is set');
});

test(`it's possible to bind 'lang'`, function(assert) {
  this.render(hbs`{{form-controls/base-input lang="en-US"}}`);
  assert.equal(this.$('input').attr('lang'), 'en-US', 'attribute lang is set');
});

test(`It's possible to bind 'name'`, function(assert) {
  this.render(hbs`{{form-controls/base-input name='username'}}`);
  assert.equal(this.$('input').attr('name'), 'username', 'Attribute name is set');
});

test(`It's possible to bind 'readonly'`, function(assert) {
  this.render(hbs`{{form-controls/base-input readonly=true}}`);
  assert.equal(this.$('input').attr('readonly'), 'readonly', 'attribute readonly is set');
});

test(`It's possible to bind 'required'`, function(assert) {
  this.render(hbs`{{form-controls/base-input required=true}}`);
  assert.equal(this.$('input').attr('required'), 'required', 'attribute required is set');
});

skip('Required also sets aria-required', function(assert) {
  this.render(hbs`{{form-controls/base-input required=true}}`);
  assert.equal(this.$('input').attr('aria-required'), 'true', 'attribute aria-required is set');
});

skip('If not required, set aria-require=false', function(assert) {
  this.render(hbs`{{form-controls/base-input}}`);
  assert.equal(this.$('input').attr('aria-required'), 'false', 'attribute aria-required is set');
});

skip('Invalid=true sets araia-invalid="true"', function(assert) {
  this.render(hbs`{{form-controls/base-input invalid=true}}`);
  assert.equal(this.$('input').attr('aria-invalid'), 'true', 'attribute aria-invalid is set');
});

test('It is possible to set describedBy', function(assert) {
  this.render(hbs`{{form-controls/base-input describedBy="element-one"}}`);
  assert.equal(this.$('input').attr('aria-describedby'), 'element-one', 'attribute aria-describedby is set');
});

test(`It's possible to bind 'tabindex'`, function(assert) {
  this.render(hbs`{{form-controls/base-input tabindex=4}}`);
  assert.equal(this.$('input').attr('tabindex'), 4, 'attribute tabindex is set');
});

test(`it's possible to bind 'title'`, function(assert) {
  this.render(hbs`{{form-controls/base-input title="A Title"}}`);
  assert.equal(this.$('input').attr('title'), 'A Title', 'attribute title is set');
});

test(`it's possible to bind 'type'`, function(assert) {
  this.render(hbs`{{form-controls/base-input type="date"}}`);
  assert.equal(this.$('input').attr('type'), 'date', 'attribute type is set');
});

test(`it's possible to bind 'value'`, function(assert) {
  this.render(hbs`{{form-controls/base-input value="test"}}`);
  assert.equal(this.$('input').val(), 'test', 'attribute value is set');
});
