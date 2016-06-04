import Ember from 'ember';

const { get, set, isEmpty } = Ember;

export default Ember.Controller.extend({
  submit() {
    window.alert('Saved!');
  },

  reset() {
    set(this, 'object', Ember.Object.create({ errors: {} }));
  },

  update(object, propertyName, value) {
    if (isEmpty(value)) {
      let errors = get(object, `errors.${propertyName}`);

      if (errors === undefined) {
        errors = Ember.A();
        set(object, `errors.${propertyName}`, errors);
      }

      errors.pushObject({ message: "can't be blank" });
    }

    set(object, propertyName, value);
  },

  object: Ember.Object.create({ errors: {} })
});
