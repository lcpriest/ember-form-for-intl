import Ember from 'ember';
import BaseInputComponent from './base-input';

import { invokeAction } from 'ember-invoke-action';

const { computed, get } = Ember;

const RadioComponent =  BaseInputComponent.extend({
  type: 'radio',

  attributeBindings: ['_checked:checked'],

  _checked: computed('checked', function() {
    return get(this, 'value') === get(this, 'checked');
  }),

  change() {
    invokeAction(this, 'update', get(this, 'value'));
  }
});

RadioComponent.reopenClass({
  positionalParams: ['checked']
});

export default RadioComponent;
