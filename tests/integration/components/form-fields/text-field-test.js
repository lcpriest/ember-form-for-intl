import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/text-field', 'Integration | Component | form fields/text field', {
  integration: true,

  setup() {
    this.set('object', { givenName: 'Albert' });
    this.set('propertyName', 'givenName');
  }
});

test('It renders a label and a text input', function(assert) {
  this.render(hbs`{{form-fields/text-field propertyName object=object}}`);
  assert.equal(this.$('input[type="text"]').length, 1);
  assert.equal(this.$('label').length, 1);
});

test('By default changing the input updates the value', function(assert) {
  this.render(hbs`{{form-fields/text-field propertyName object=object}}`);
  this.$('input').val('Mark').trigger('change');
  assert.equal(this.get('object.givenName'), 'Mark');
});

test('A custom update action can be passed', function(assert) {
  assert.expect(1);
  this.on('update', (object, propertyPath, value) => assert.equal(value, 'Mark'));
  this.render(hbs`{{form-fields/text-field propertyName object=object update=(action 'update')}}`);
  this.$('input').val('Mark').trigger('change');
});
