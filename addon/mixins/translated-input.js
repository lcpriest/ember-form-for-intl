import Ember from 'ember';
import { humanize } from '../utils/strings';

const {
  String: { camelize },
  computed,
  isPresent,
  get,
  Mixin,
  inject: { service }
} = Ember;

export default Mixin.create({
  intl: service(),
  config: service('ember-form-for/config'),

  modelName: computed('form', 'object.{modelName,constructor.modelName,_content.constructor.modelName}', function() {
    return this.getModelName();
  }),

  getModelName() {
    let formName = get(this, 'form');
    let modelName = get(this, 'object.modelName');
    let constructorName = get(this, 'object.constructor.modelName');
    let changesetConstructorName = get(this, 'object._content.constructor.modelName');

    return formName || modelName || constructorName || changesetConstructorName;
  },

  labelText: computed('propertyName', 'label', function() {
    let intl = get(this, 'intl');
    let text = get(this, 'label');
    let key  = get(this, 'labelIntlKey');

    if (isPresent(text)) {
      return text;
    } else if (isPresent(intl) && intl.exists(key)) {
      return intl.t(key);
    } else {
      return humanize(get(this, 'propertyName'));
    }
  }),

  hintText: computed('propertyName', 'hint', function() {
    let intl = get(this, 'intl');
    let text = get(this, 'hint');
    let key  = get(this, 'hintIntlKey');

    if (isPresent(text)) {
      return text;
    } else if (isPresent(intl) && intl.exists(key)) {
      return intl.t(key);
    }
  }),

  placeholderText: computed('propertyName', 'placeholder', function() {
    let intl = get(this, 'intl');
    let text = get(this, 'placeholder');
    let key  = get(this, 'placeholderIntlKey');

    if (isPresent(text)) {
      return text;
    } else if (isPresent(intl) && intl.exists(key)) {
      return intl.t(key);
    }
  }),

  labelIntlKey: computed('config.intlKeyPrefix', 'modelName', 'propertyName', function() {
    return this.generateIntlKey('attributes');
  }),

  hintIntlKey: computed('config.intlKeyPrefix', 'modelName', 'propertyName', function() {
    return this.generateIntlKey('hints');
  }),

  placeholderIntlKey: computed('config.intlKeyPrefix', 'modelName', 'propertyName', function() {
    return this.generateIntlKey('placeholders');
  }),

  generateIntlKey(type) {
    return [
      get(this, 'config.intlKeyPrefix'),
      camelize(get(this, 'modelName') || ''),
      type,
      camelize(get(this, 'propertyName') || '')
    ].filter((x) => !!x)
      .join('.');
  }
});
