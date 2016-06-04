import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-fields/week-field', 'Integration | Component | {{form-fields/week-field}}', {
  integration: true,
  beforeEach() {
    this.set('object', { week: new Date(2015, 9, 21) });
    this.set('propertyName', 'week');
  }
});

test('It renders a week input', function(assert) {
  this.render(hbs`{{form-fields/week-field propertyName object=object}}`);
  assert.equal(this.$('input[type="week"]').length, 1, 'Input is rendered');
});

test('It accepts a date value', function(assert) {
  this.render(hbs`{{form-fields/week-field propertyName object=object}}`);
  assert.equal(this.$('input').val(), '2015-W43', 'Week value is set');
});

test('Updating a week input', function(assert) {
  this.render(hbs`{{form-fields/week-field propertyName object=object}}`);
  this.$('input').val('2015-W44').trigger('change');
  assert.ok(this.get('object.week') instanceof Date);
  assert.equal(+this.get('object.week'), +(new Date(2015, 9, 26)));
});
