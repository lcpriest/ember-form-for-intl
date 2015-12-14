import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('radio-button-group', 'Integration | Component | {{radio-button-group}}', {
  integration: true,

  setup() {
    this.set('object', { gender: 'female' });
    this.set('options', ['unknown', 'male', 'female']);

    this.render(hbs`
      {{radio-button-group object=object propertyName="gender" options=options}}
    `);
  }
});

test('It renders multiple radio buttons', function(assert) {
  assert.equal(this.$('input[type="radio"]').length, 3);
});

test('It has the correct value selected', function(assert) {
  assert.equal(this.$('input[value="female"]:checked').length, 1);
});

test('Clicking a radio updates the value', function(assert) {
  run(() => this.$('input[value="male"]').click());

  assert.equal(this.$('input[value="male"]:checked').length, 1);
  assert.equal(this.get('object.gender'), 'male');
});

test('Also accepts a space seperated string for options', function(assert) {
  this.render(hbs`{{radio-button-group object=object propertyName="gender"
                      options="male female unspecified unknown"}}`);
  assert.equal(this.$('input[type="radio"]').length, 4);
});
