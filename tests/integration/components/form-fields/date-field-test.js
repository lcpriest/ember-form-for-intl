import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/date-field', 'Integration | Component | {{form-fields/date-field}}', {
  integration: true,
  beforeEach() {
    this.set('object', { date: new Date(2015, 9, 21) });
    this.set('propertyName', 'date');
  }
});

test('It renders a date input', function(assert) {
  this.render(hbs`{{form-fields/date-field propertyName object=object}}`);
  assert.equal(this.$('input[type="date"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.render(hbs`{{form-fields/date-field propertyName object=object}}`);
  assert.equal(this.$('input').val(), '2015-10-21', 'Date value is set');
});

test('Updating a date input', function(assert) {
  this.render(hbs`{{form-fields/date-field propertyName object=object}}`);
  this.$('input').val('2015-10-22').trigger('change');
  assert.ok(this.get('object.date') instanceof Date);
  assert.equal(+this.get('object.date'), +(new Date('2015-10-22')));
});

test('Can remove from date input', function(assert) {
  this.render(hbs`{{form-fields/date-field propertyName object=object}}`);
  this.$('input').val('').trigger('change');
  assert.equal(this.get('object.date'), null);
});
