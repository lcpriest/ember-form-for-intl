import Ember from 'ember';
import { initialize as initializeIntl } from 'dummy/initializers/ember-form-for';

const {
  getOwner
} = Ember;

export default function registerIntl(testingContext, object) {
  testingContext.registry.register('service:intl', object);
  initializeIntl(getOwner(testingContext));
}
