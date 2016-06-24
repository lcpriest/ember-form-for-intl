import Ember from 'ember';
import layout from '../../templates/components/form-fields/radio-field';

import { humanize } from '../../utils/strings';

const { computed, get, set } = Ember;

const RadioFieldComponent = Ember.Component.extend({
  tagName: '',
  layout,

  control: 'one-way-radio',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  },

  labelText: computed('value', 'label', function() {
    return get(this, 'label') || humanize(get(this, 'value'));
  })
});

RadioFieldComponent.reopenClass({
  positionalParams: ['propertyName', 'value']
});

export default RadioFieldComponent;
