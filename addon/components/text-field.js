import Ember from 'ember';
import layout from '../templates/components/text-field';

import FormFieldMixin from '../mixins/form-field';

const {
  set,
  Component
} = Ember;

const TextFieldComponent = Component.extend(FormFieldMixin, {
  layout,
  type: 'text',

  instrumentDisplay: '{{text-field}}',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
