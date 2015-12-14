import Ember from 'ember';
import layout from '../templates/components/radio-button-group';

const { computed, get, guidFor, set } = Ember;

export default Ember.Component.extend({
  layout,

  identifier: computed('object', 'propertyName', function() {
    return `${guidFor(get(this, 'object'))}_${get(this, 'propertyName')}`;
  }),

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});
