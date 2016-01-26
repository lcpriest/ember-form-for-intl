import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/power-select-field', 'Integration | Component | form fields/power select field', {
  integration: true,

  setup() {
    this.set('object', { gender: 'male' });
    this.set('propertyName', 'gender');
    this.set('options', 'male female unknown');
  }
});

test('It renders a power select box and label', function(assert) {
  this.render(hbs`
    {{form-fields/power-select-field propertyName options object=object}}`);

  assert.equal(this.$('.ember-power-select').length, 1);
  assert.equal(this.$('label').length, 1);
});
