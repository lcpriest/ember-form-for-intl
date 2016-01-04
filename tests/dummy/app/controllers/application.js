import Ember from 'ember';

export default Ember.Controller.extend({
  submit() {
    window.alert('Saved!');
  },

  reset() {
    this.set('object', Ember.Object.create());
  },

  object: Ember.Object.create()
});
