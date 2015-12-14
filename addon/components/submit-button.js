import Ember from 'ember';
import layout from '../templates/components/submit-button';

import { invokeAction } from 'ember-invoke-action';

export default Ember.Component.extend({
  layout,

  tagName: 'input',
  type:    'submit',
  attributeBindings: ['type'],

  click(e) {
    invokeAction(this, 'submit', e);
    e.preventDefault();
  }
});
