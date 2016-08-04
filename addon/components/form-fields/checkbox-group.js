import Ember from 'ember';
import layout from '../../templates/components/form-fields/checkbox-group';
import { invokeAction } from 'ember-invoke-action';

const {
  get
} = Ember;

const CheckboxGroupComponent = Ember.Component.extend({
  tagName: '',
  layout,

  actions: {
    updateSelection(value, object, propertyName, include) {
      let selection = get(object, propertyName);
      if (include && !selection.contains(value)) {
        selection.pushObject(value);
      } else {
        selection.removeObject(value);
      }

      invokeAction(this, 'update', object, propertyName, selection);
    }
  }
});

CheckboxGroupComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CheckboxGroupComponent;
