import Ember from 'ember';
import layout from '../templates/components/radio-button-group';

import titlecase from '../utils/titlecase';

const {
  computed,
  get,
  guidFor,
  set,
  typeOf,
  String: { w }
} = Ember;

export default Ember.Component.extend({
  layout,

  didReceiveAttrs() {
    let options = this.getAttr('options');
    if (typeOf(options) === 'string') {
      options = w(options);
    }

    set(this, 'options', options);

    set(this, 'label',
      this.getAttr('label') || titlecase(this.getAttr('propertyName')));
  },

  identifier: computed('object', 'propertyName', function() {
    return `${guidFor(get(this, 'object'))}_${get(this, 'propertyName')}`;
  }),

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});
