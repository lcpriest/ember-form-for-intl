import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/time-field', 'Integration | Component | {{form-fields/time-field}}', {
  integration: true,
  beforeEach() {
    this.set('object', { time: new Date(2015, 9, 21, 16, 9) });
    this.set('propertyName', 'time');
  }
});

test('It renders a time input', function(assert) {
  this.render(hbs`{{form-fields/time-field propertyName object=object}}`);
  assert.equal(this.$('input[type="time"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.render(hbs`{{form-fields/time-field propertyName object=object}}`);
  assert.equal(this.$('input').val(), '16:09', 'Time value is set');
});

test('Updating a time input', function(assert) {
  this.set('object.time', new Date('2015-01-01T16:09'));
  this.render(hbs`{{form-fields/time-field propertyName object=object}}`);
  this.$('input').val('16:10').trigger('change');
  assert.ok(this.get('object.time') instanceof Date);
  assert.equal(+this.get('object.time'), +(new Date('2015-01-01T16:10')));
});
