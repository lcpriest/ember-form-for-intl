import isEqual from 'ember-form-for/utils/is-equal';
import { module, test } from 'qunit';

module('Unit | Utility | isEqual');

test('it works', function(assert) {
  assert.ok(isEqual('a', 'a'));
  assert.ok(!isEqual('a', 'b'));
});
