import Ember from 'ember';
import layout from '../../templates/components/form-fields/text-field';
import TranslatedInput from '../../mixins/translated-input';

const {
  Component,
  set
} = Ember;

const TextFieldComponent = Component.extend(TranslatedInput, {
  tagName: '',
  layout,

  control: 'one-way-text',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
