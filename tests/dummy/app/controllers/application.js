import Ember from 'ember';

const { set, isEmpty } = Ember;

export default Ember.Controller.extend({
  submit() {
    window.alert('Saved!');
  },

  reset() {
    set(this, 'object', Ember.Object.create({ errors: {} }));
  },

  update(object, propertyName, value) {
    let errors;
    if (isEmpty(value)) {
      errors = [{ message: "can't be blank" }];
    }

    set(object, `errors.${propertyName}`, errors);

    set(object, propertyName, value);
  },

  object: Ember.Object.create({ errors: {} })
});
