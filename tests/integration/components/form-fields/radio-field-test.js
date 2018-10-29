import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import registerIntl from '../../../support/register-intl';

moduleForComponent('form-fields/radio-field', 'Integration | Component | form fields/radio field', {
  integration: true
});

const { Object: EmberObject } = Ember;

test('It renders a label and a checkbox', function(assert) {
  this.set('object', { accepted: true });
  this.render(hbs`{{form-fields/radio-field "accepted" true object=object}}`);
  assert.equal(this.$('input[type="radio"]').length, 1);
  assert.equal(this.$('input').val(), 'true');
  assert.equal(this.$('label').length, 1);
  assert.equal(this.$('label').text().trim(), 'True');
});

test('The label is computed from the intl service if available', function(assert) {
  this.set('object', { accepted: true });
  registerIntl(this, EmberObject.extend({
    t(key) {
      assert.equal(key, 'accepted.true');
      return 'Accept Terms of Service';
    }
  }));

  this.render(hbs`{{form-fields/radio-field "accepted" true object=object}}`);

  assert.equal(this.$('label').text().trim(), 'Accept Terms of Service');
});

test('When modelName is present, use it for intl labels', function(assert) {
  this.set('object', { modelName: 'registration', accepted: true });
  registerIntl(this, EmberObject.extend({
    t(key) {
      assert.equal(key, 'registration.accepted.true');
      return 'Accept Terms of Service';
    }
  }));

  this.render(hbs`{{form-fields/radio-field "accepted" true object=object}}`);

  assert.equal(this.$('label').text().trim(), 'Accept Terms of Service');
});
