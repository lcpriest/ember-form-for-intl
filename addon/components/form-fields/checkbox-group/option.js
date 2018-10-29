import Ember from 'ember';
import layout from '../../../templates/components/form-fields/checkbox-group/option';

import TranslatedInput from '../../mixins/translated-input';

const {
  Component,
  computed: { or },
  inject: { service }
} = Ember;

export default Component.extend(TranslatedInput, {
  tagName: '',
  layout,

  config: service('ember-form-for/config'),

  modelName: or('object.modelName', 'object.constructor.modelName')
});
