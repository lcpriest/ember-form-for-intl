import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/image', 'Integration | Component | {{form-controls/image}}', {
  integration: true
});

test('It renders a button', function(assert) {
  this.render(hbs`{{form-controls/image}}`);
  assert.equal(this.$('input[type="image"]').length, 1, 'Image Button is rendered');
});

test(`it's possible to bind 'alt'`, function(assert) {
  this.render(hbs`{{form-controls/image alt="test"}}`);
  assert.equal(this.$('input').attr('alt'), 'test', 'attribute alt is set');
});

test(`it's possible to bind 'src'`, function(assert) {
  this.render(hbs`{{form-controls/image src="http://example.com/image.jpg"}}`);
  assert.equal(this.$('input').attr('src'), 'http://example.com/image.jpg', 'attribute src is set');
});

test(`it's possible to bind 'width'`, function(assert) {
  this.render(hbs`{{form-controls/image width=100}}`);
  assert.equal(this.$('input').attr('width'), 100, 'attribute width is set');
});

test(`it's possible to bind 'height'`, function(assert) {
  this.render(hbs`{{form-controls/image height=100}}`);
  assert.equal(this.$('input').attr('height'), 100, 'attribute height is set');
});
