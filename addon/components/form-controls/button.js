import Ember from 'ember';
import DynamicAttributeBindings from 'ember-one-way-controls/-private/dynamic-attribute-bindings';
import layout from '../../templates/components/form-controls/button';

const { Component } = Ember;

const Button = Component.extend(DynamicAttributeBindings, {
  layout,
  tagName: 'button',
  type: 'button',
  attributeBindings: ['type'],

  NON_ATTRIBUTE_BOUND_PROPS: [
    'click'
  ]
});

Button.reopenClass({
  positionalParams: ['label']
});

export default Button;
