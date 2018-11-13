import Ember from 'ember';
import layout from '../../templates/components/form-fields/textarea-field';
import TranslatedInput from '../../mixins/translated-input';

const {
  Component,
  set
} = Ember;

const TextareaFieldComponent = Component.extend(TranslatedInput, {
  tagName: '',
  layout,

  control: 'one-way-textarea',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextareaFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextareaFieldComponent;
