import Ember from 'ember';

export function formForMergeCustomFormField([formFieldsHash], { name, component }) {
  formFieldsHash[name] = component;
}

export default Ember.Helper.helper(formForMergeCustomFormField);
