import BaseInputComponent from './base-input';

import { invokeAction } from 'ember-invoke-action';

const CheckboxComponent = BaseInputComponent.extend({
  type: 'checkbox',

  attributeBindings: ['checked'],

  change() {
    invokeAction(this, 'update', this.readDOMAttr('checked'));
  }
});

CheckboxComponent.reopenClass({
  positionalParams: ['checked']
});

export default CheckboxComponent;
