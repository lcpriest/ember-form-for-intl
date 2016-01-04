import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/textarea-field', 'Integration | Component | form fields/textarea field', {
  integration: true
});

test('It renders a label and a textarea', function(assert) {
  this.set('object', { description: 'Lorem Ipsum' });
  this.render(hbs`{{form-fields/textarea-field "description" object=object}}`);
  assert.equal(this.$('textarea').length, 1);
  assert.equal(this.$('label').length, 1);
});
