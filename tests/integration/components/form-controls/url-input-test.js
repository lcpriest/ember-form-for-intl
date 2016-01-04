import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/url-input', 'Integration | Component | {{form-controls/url-input}}', {
  integration: true
});

test('It renders a url input', function(assert) {
  this.render(hbs`{{form-controls/url-input}}`);
  assert.equal(this.$('input[type="url"]').length, 1, 'Url input is rendered');
});
