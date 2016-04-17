import Ember from 'ember';
import layout from '../../templates/components/form-controls/power-select';

const {
  computed,
  get,
  set,
  String: { w }
} = Ember;

const PowerSelectComponent = Ember.Component.extend({
  tagName: '',
  layout,

  didReceiveAttrs() {
    let options = this.getAttr('options');
    if (typeof options === 'string') {
      options = w(options);
    }

    set(this, 'options', Ember.A(options));
  },

  powerSelectComponent: computed('multiple', function() {
    return get(this, 'multiple') ? 'power-select-multiple' : 'power-select';
  }),

  optionGroups: computed('options.[]', function() {
    let groupLabelPath = get(this, 'groupLabelPath');
    let options        = get(this, 'options');
    let groups         = Ember.A();

    if (!groupLabelPath) {
      return options;
    }

    options.forEach((item) => {
      let label = get(item, groupLabelPath);

      if (label) {
        let group = groups.findBy('groupName', label);

        if (group == null) {
          group = Ember.Object.create({
            groupName: label,
            options:   Ember.A()
          });

          groups.pushObject(group);
        }

        get(group, 'options').pushObject(item);
      } else {
        groups.pushObject(item);
      }
    });

    return groups;
  }),

  search() {
    return get(this, 'optionGroups');
  },

  update() {
    // noop
  }
});

PowerSelectComponent.reopenClass({
  positionalParams: ['value']
});

export default PowerSelectComponent;
