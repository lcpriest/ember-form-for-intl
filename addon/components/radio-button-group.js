import Ember from 'ember';
import layout from '../templates/components/radio-button-group';

import FormFieldMixin from '../mixins/form-field';

const {
  set,
  typeOf,
  String: { w }
} = Ember;

export default Ember.Component.extend(FormFieldMixin, {
  layout,

  didReceiveAttrs() {
    let options = this.getAttr('options');
    if (typeOf(options) === 'string') {
      options = w(options);
    }

    set(this, 'options', options);

    this._super(...arguments);
  },

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});
