import Ember from 'ember';
import layout from '../templates/components/form-field';

import { humanize } from '../utils/strings';

const {
  assert,
  computed,
  computed: { notEmpty, reads },
  get,
  getWithDefault,
  guidFor,
  mixin,
  set,
  Component
} = Ember;

const FormFieldComponent = Component.extend({
  layout,

  concatenatedProperties: [
    'inputClasses',
    'labelClasses',
    'hintClasses',
    'errorClasses'
  ],

  control: 'one-way-input',

  didReceiveAttrs() {
    assert(`{{form-field}} requires an object property to be passed in`,
           this.getAttr('object') != null);

    let propertyName = this.getAttr('propertyName');
    assert(`{{form-field}} requires the propertyName property to be set`,
           typeof this.getAttr('propertyName') === 'string');

    mixin(this, {
      rawValue: reads(`object.${propertyName}`),
      hasErrors: notEmpty(`object.errors.${propertyName}`)
    });

    this._super(...arguments);
  },

  update(object, propertyName, value) {
    set(object, propertyName, value);
  },

  labelText: computed('propertyName', 'label', function() {
    return get(this, 'label') || humanize(get(this, 'propertyName'));
  }),

  fieldId: computed('object', 'form', 'propertyName', function() {
    let baseId = get(this, 'form') || get(this, 'elementId');
    return `${baseId}_${get(this, 'propertyName')}`;
  }),

  fieldHintId: computed('fieldId', function() {
    return `${get(this, 'fieldId')}_hint`;
  }),

  fieldName: computed('object', 'object.modelName', 'propertyName', function() {
    return `${this._nameForObject()}[${get(this, 'propertyName')}]`;
  }),

  _nameForObject() {
    return get(this, 'object.modelName') ||
           get(this, 'object.constructor.modelName') ||
           guidFor(get(this, 'object'));
  },

  value: computed('rawValue', function() {
    let serializeValue = getWithDefault(this, 'serializeValue', (value) => value);
    return serializeValue(get(this, 'rawValue'));
  }),

  actions: {
    processUpdate(object, propertyName, value) {
      let rawValue = get(this, 'rawValue');
      let deserializeValue = getWithDefault(this, 'deserializeValue', (value) => value);
      get(this, 'update')(object, propertyName, deserializeValue(value, rawValue));
    }
  }
});

FormFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default FormFieldComponent;
