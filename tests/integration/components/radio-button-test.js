import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('radio-button', 'Integration | Component | {{radio-button}}', {
  integration: true,

  setup() {
    this.set('object', { accepted: true });
  }
});

test('It renders', function(assert) {
  this.render(hbs`
    {{radio-button object=object propertyName="accepted" value="yes"}}`);
  assert.equal(this.$('input[type="radio"]').length, 1);
});

test('Has its value appended to id', function(assert) {
  this.render(hbs`
    {{radio-button object=object propertyName="accepted" value="yes"}}`);

  assert.ok(this.$('input').attr('id').indexOf('_accepted_yes') > 0);
});

test('Has its value as default label', function(assert) {
  this.render(hbs`
    {{radio-button object=object propertyName="accepted" value="yes"}}`);

  assert.equal(this.$('label').text().trim(), 'Yes');
});

test('Requires a value', function(assert) {
  assert.throws(() => {
    this.render(hbs`
      {{radio-button object=object propertyName="accepted"}}`);
  }, /{{radio-button}} requires a value/);
});

test('Is selected when value matches', function(assert) {
  this.set('object.accepted', 'yes');
  this.render(hbs`
    {{radio-button object=object propertyName="accepted" value="yes"}}`);

  assert.equal(this.$('input:checked').length, 1);
});

test('Is not selected when value matches', function(assert) {
  this.set('object.accepted', 'no');
  this.render(hbs`
    {{radio-button object=object propertyName="accepted" value="yes"}}`);

  assert.equal(this.$('input:checked').length, 0);
});

test('Is selected when value matches', function(assert) {
  assert.expect(1);
  this.on('update', (object, propertyName, value) => assert.equal(value, 'no'));
  this.render(hbs`
    {{radio-button object=object
                   propertyName="accepted"
                   value="no"
                   update=(action 'update')}}`);

  run(() => this.$('input').click());
});
