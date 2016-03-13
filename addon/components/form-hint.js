import Ember from 'ember';
import layout from '../templates/components/form-hint';

const { computed, get } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout,

  joinedHintClasses: computed('hintClasses', function() {
    return (get(this, 'hintClasses') || []).join(' ');
  })
});
