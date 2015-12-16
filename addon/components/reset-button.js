import Ember from 'ember';
import layout from '../templates/components/reset-button';

import { invokeAction } from 'ember-invoke-action';

const {
  isNone,
  set,
  Component
} = Ember;

const ResetButtonComponent = Component.extend({
  layout,

  tagName: 'input',
  type:    'reset',

  label: 'Reset',

  didReceiveAttrs() {
    this._super(...arguments);
    let label = this.getAttr('label');
    set(this, 'label', isNone(label) ? 'Reset' : label);
  },

  attributeBindings: ['type', 'label:value'],

  click(e) {
    invokeAction(this, 'reset', e);
    e.preventDefault();
  }
});

ResetButtonComponent.reopenClass({
  positionalParams: ['label']
});

export default ResetButtonComponent;
