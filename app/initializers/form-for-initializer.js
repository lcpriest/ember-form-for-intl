import Ember from 'ember';
import config from '../config/environment';
import FormFieldComponent from 'ember-form-for/components/form-field';
import ButtonComponent from 'ember-form-for/components/form-controls/button';
import SubmitComponent from 'ember-form-for/components/form-controls/submit';
import ResetComponent from 'ember-form-for/components/form-controls/reset';

const { merge } = Ember;

const DEFAULT_CONFIG = {
  buttonClasses: ['form-button'],
  fieldClasses: ['form-field'],
  fieldErrorClass: 'form-field--has-errors',
  errorClasses: ['form-field--errors'],
  hintClasses: ['form-field--hint'],
  inputClasses: ['form-field--control'],
  labelClasses: ['form-field--label'],
  resetClasses: ['form-button--reset'],
  submitClasses: ['form-button--submit']
};

export function initialize(/* application */) {
  let formForConfig = merge(DEFAULT_CONFIG, config['ember-form-for']);

  FormFieldComponent.reopen({
    classNames: formForConfig.fieldClasses,
    classNameBindings: [
      `hasErrors:${formForConfig.fieldErrorClass}`
    ],
    errorClasses: formForConfig.errorClasses,
    hintClasses: formForConfig.hintClasses,
    inputClasses: formForConfig.inputClasses,
    labelClasses: formForConfig.labelClasses
  });

  ButtonComponent.reopen({
    classNames: formForConfig.buttonClasses
  });

  SubmitComponent.reopen({
    classNames: formForConfig.submitClasses
  });

  ResetComponent.reopen({
    classNames: formForConfig.resetClasses
  });
}

export default {
  name: 'form-for-initializer',
  initialize
};
