import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/file-input', 'Integration | Component | {{form-controls/file-input}}', {
  integration: true
});

test('It renders a file input', function(assert) {
  this.render(hbs`{{form-controls/file-input}}`);
  assert.equal(this.$('input[type="file"]').length, 1, 'File input is rendered');
});

test(`it's possible to bind 'multiple'`, function(assert) {
  this.render(hbs`{{form-controls/file-input multiple=true}}`);
  assert.equal(this.$('input').attr('multiple'), 'multiple', 'attribute multiple is set');
});
