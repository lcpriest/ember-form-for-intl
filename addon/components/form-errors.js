import Ember from 'ember';
import layout from '../templates/components/form-errors';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  joinedErrorClasses: computed('errorClasses', function() {
    return (get(this, 'errorClasses') || []).join(' ');
  })
});
