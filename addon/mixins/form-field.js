import Ember from 'ember';
import titlecase from '../utils/titlecase';

const {
  assert,
  computed,
  get,
  guidFor,
  set,
  typeOf,
  Mixin
} = Ember;

export default Mixin.create({
  instrumentDisplay: '{{form-field}}',

  didReceiveAttrs() {
    assert(`${this.instrumentDisplay} requires propertyName to be set`,
      typeOf(this.getAttr('propertyName')) === 'string');

    let objectType = typeOf(this.getAttr('object'));
    assert(`${this.instrumentDisplay} requires object to be set`,
      objectType === 'object' || objectType === 'instance');

    this._setupLabel();

    this._super(...arguments);
  },

  identifier: computed('object', 'propertyName', 'value', function() {
    return this._identifier();
  }),

  _identifier() {
    return `${guidFor(get(this, 'object'))}_${get(this, 'propertyName')}`;
  },

  _setupLabel() {
    set(this, 'label',
      this.getAttr('label') || titlecase(this.getAttr('propertyName')));
  }
});
