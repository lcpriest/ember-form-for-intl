import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/datetime-local-field', 'Integration | Component | {{form-fields/datetime-local-field}}', {
  integration: true,
  beforeEach() {
    this.set('object', { date: new Date(2015, 9, 21, 16, 9) });
    this.set('propertyName', 'date');
  }
});

test('It renders a datetime-local input', function(assert) {
  this.render(hbs`{{form-fields/datetime-local-field propertyName object=object}}`);
  assert.equal(this.$('input[type="datetime-local"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.render(hbs`{{form-fields/datetime-local-field propertyName object=object}}`);
  assert.equal(this.$('input').val(), '2015-10-21T16:09', 'Date value is set');
});

test('Updating a datetime-local input', function(assert) {
  this.render(hbs`{{form-fields/datetime-local-field propertyName object=object}}`);
  this.$('input').val('2015-10-22T16:10').trigger('change');
  assert.ok(this.get('object.date') instanceof Date);
  assert.equal(+this.get('object.date'), +(new Date(2015, 9, 22, 16, 10)));
});
