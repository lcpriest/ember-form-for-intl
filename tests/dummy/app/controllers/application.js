import Ember from 'ember';

const { set, isEmpty } = Ember;

function createEmptyObject(attrs) {
  return Ember.Object.create(attrs, {
    errors: {}
  });
}

function blankUser() {
  return createEmptyObject({ address: createEmptyObject() });
}

export default Ember.Controller.extend({
  submit() {
    window.alert('Saved!');
    window.location.reload();
  },

  reset() {
    set(this, 'user', blankUser());
  },

  update(object, propertyName, value) {
    let errors;
    if (isEmpty(value)) {
      errors = [{ message: "can't be blank" }];
    }

    set(object, `errors.${propertyName}`, errors);

    set(object, propertyName, value);
  },

  user: blankUser()
});
