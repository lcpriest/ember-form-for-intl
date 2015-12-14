import Ember from 'ember';
import layout from '../templates/components/reset-button';

import { invokeAction } from 'ember-invoke-action';

export default Ember.Component.extend({
  layout,

  tagName: 'input',
  type: 'reset',
  value: 'Reset',

  attributeBindings: ['type', 'value'],

  click(e) {
    invokeAction(this, 'reset', e);
    e.preventDefault();
  }
});
