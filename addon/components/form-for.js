import Ember from 'ember';
import layout from '../templates/components/form-for';

const {
  get,
  isPresent,
  set,
  Component
} = Ember;

const FormForComponent = Component.extend({
  layout,

  tagName: 'form',

  attributeBindings: ['tabindex'],
  tabindex: '-1',

  submit: (object) => object.save(),
  reset:  (object) => object.rollback(),

  update(object, propertyName, value) {
    set(object, propertyName, value);
  },

  actions: {
    submit(object) {
      get(this, 'submit')(object);

      let errors = get(object, 'errors');
      if (errors) {
        for (let propertyName in errors) {
          if (isPresent(get(errors, propertyName))) {
            this.$().focus();
            break;
          }
        }
      }
    }
  }
});

FormForComponent.reopenClass({
  positionalParams: ['object']
});

export default FormForComponent;
