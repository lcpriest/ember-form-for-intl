import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/select-field', 'Integration | Component | form fields/select field', {
  integration: true,

  setup() {
    this.set('object', { gender: 'male' });
    this.set('propertyName', 'gender');
    this.set('options', 'male female unknown');
  }
});

test('It renders a select box and label', function(assert) {
  this.render(hbs`
    {{form-fields/select-field propertyName options object=object}}`);

  assert.equal(this.$('select').length, 1);
  assert.equal(this.$('option').length, 3);
  assert.equal(this.$('label').length, 1);
});
