import Ember from 'ember';
const { getOwner } = Ember;

export function initialize(app) {
  // HACK: This can be undefined in the FastBoot environment.
  let owner = getOwner(app) || app.__container__;
  if (!owner) {
    return;
  }

  let intl = owner.lookup('service:intl');
  if (!intl) {
    return;
  }

  app.inject('component', 'intl', 'service:intl');
}

export default {
  name: 'ember-form-for',
  initialize
};
