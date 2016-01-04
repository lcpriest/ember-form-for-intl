import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/search-input', 'Integration | Component | {{form-controls/search-input}}', {
  integration: true
});

test('It renders a search input', function(assert) {
  this.render(hbs`{{form-controls/search-input}}`);
  assert.equal(this.$('input[type="search"]').length, 1, 'Search input is rendered');
});
