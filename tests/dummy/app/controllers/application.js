import Ember from 'ember';

export default Ember.Controller.extend({
  object: Ember.Object.create({
    save() {
      window.alert('Pretend save!');
    },

    rollback() {
      window.alert('Pretend rollback!');
    }
  })
});
