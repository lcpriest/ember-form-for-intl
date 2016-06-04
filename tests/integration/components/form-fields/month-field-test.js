import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/month-field', 'Integration | Component | {{form-fields/month-field}}', {
  integration: true,
  beforeEach() {
    this.set('object', { month: new Date(2015, 9) });
    this.set('propertyName', 'month');
  }
});

test('It renders a month input', function(assert) {
  this.render(hbs`{{form-fields/month-field propertyName object=object}}`);
  assert.equal(this.$('input[type="month"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.render(hbs`{{form-fields/month-field propertyName object=object}}`);
  assert.equal(this.$('input').val(), '2015-10', 'Month value is set');
});

test('Updating a month input', function(assert) {
  this.render(hbs`{{form-fields/month-field propertyName object=object}}`);
  this.$('input').val('2015-11').trigger('change');
  assert.ok(this.get('object.month') instanceof Date);
  assert.equal(+this.get('object.month'), +(new Date('2015-11')));
});
