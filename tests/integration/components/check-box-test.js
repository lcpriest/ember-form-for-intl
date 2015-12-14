import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('check-box', 'Integration | Component | {{check-box}}', {
  integration: true,

  setup() {
    this.set('object', { accepted: true });
  }
});

test('It renders a checkbox', function(assert) {
  this.render(hbs`{{check-box object=object propertyName="accepted"}}`);
  assert.equal(this.$('input[type="checkbox"]').length, 1);
});

test('It sets the check status to the value', function(assert) {
  this.render(hbs`{{check-box object=object propertyName="accepted"}}`);
  assert.equal(this.$('input:checked').length, 1);
});

test('It sets the check status to the value', function(assert) {
  this.set('object.accepted', false);
  this.render(hbs`{{check-box object=object propertyName="accepted"}}`);
  assert.equal(this.$('input:checked').length, 0);
});

test('It has a label', function(assert) {
  this.render(hbs`{{check-box object=object propertyName="accepted"}}`);
  assert.equal(this.$('label').text().trim(), 'Accepted');
});
