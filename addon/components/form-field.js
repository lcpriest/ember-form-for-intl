import Ember from 'ember';
import layout from '../templates/components/form-field';

import { humanize } from '../utils/strings';

const {
  assert,
  computed,
  get,
  guidFor,
  set,
  Component
} = Ember;

const FormFieldComponent = Component.extend({
  layout,

  control: 'form-controls/input',

  didReceiveAttrs() {
    assert(`{{form-field}} requires an object property to be passed in`,
           this.getAttr('object') != null);

    assert(`{{form-field}} requires the propertyName property to be set`,
           typeof this.getAttr('propertyName') === 'string');

    this._super(...arguments);
  },

  update(object, propertyName, value) {
    set(object, propertyName, value);
  },

  labelText: computed('propertyName', 'label', function() {
    return get(this, 'label') || humanize(get(this, 'propertyName'));
  }),

  fieldId: computed('object', 'form', 'propertyName', function() {
    let baseId = get(this, 'form') || guidFor(get(this, 'object'));
    return `${baseId}_${get(this, 'propertyName')}`;
  }),

  fieldName: computed('object', 'object.modelName', 'propertyName', function() {
    let objectName = get(this, 'object.modelName') || guidFor(get(this, 'object'));
    return `${objectName}[${get(this, 'propertyName')}]`;
  })
});

FormFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default FormFieldComponent;
