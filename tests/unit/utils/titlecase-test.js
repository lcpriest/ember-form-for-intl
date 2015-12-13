import titlecase from 'ember-form-for/utils/titlecase';
import { module, test } from 'qunit';

module('Unit | Utility | titlecase');

test('Titlecase a camelCased string', (assert) => {
  assert.equal(titlecase('firstName'), 'First Name');
});

test('Titlecase a under_scored string', (assert) => {
  assert.equal(titlecase('first_name'), 'First Name');
});

test('Titlecase a dash-erized string', (assert) => {
  assert.equal(titlecase('first-name'), 'First Name');
});

test('Titlecase a space seperated string', (assert) => {
  assert.equal(titlecase('first name'), 'First Name');
});
