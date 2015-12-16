import Ember from 'ember';
import layout from '../templates/components/submit-button';

import { invokeAction } from 'ember-invoke-action';

const {
  isNone,
  set,
  Component
} = Ember;

const SubmitButtonComponent = Component.extend({
  layout,

  tagName: 'input',
  type:    'submit',

  label: 'Reset',

  didReceiveAttrs() {
    this._super(...arguments);
    let label = this.getAttr('label');
    set(this, 'label', isNone(label) ? 'Submit' : label);
  },

  attributeBindings: ['type', 'label:value'],

  click(e) {
    invokeAction(this, 'submit', e);
    e.preventDefault();
  }
});

SubmitButtonComponent.reopenClass({
  positionalParams: ['label']
});

export default SubmitButtonComponent;
