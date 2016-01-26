import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-controls/power-select', 'Integration | Component | {{form-controls/power-select}}', {
  integration: true,

  setup() {
    this.set('value', 'female');
    this.set('options', ['unknown', 'male', 'female']);
  }
});

test('It renders a power select with options', function(assert) {
  this.render(hbs`{{form-controls/power-select value=value options=options}}`);
  assert.equal(this.$('.ember-power-select').length, 1);
  this.$('.ember-power-select-trigger').trigger('mousedown');
  assert.equal($('.ember-power-select-dropdown li').length, 3);
});

test('A value is selected', function(assert) {
  this.render(hbs` {{form-controls/power-select value=value options=options}} `);
  assert.equal(this.$().text().trim(), 'female');
});

test('Selecting a value updates the selected value', function(assert) {
  this.on('update', (value) => this.set('value', value));
  this.render(hbs`{{form-controls/power-select value=value options=options update=(action 'update')}}`);
  this.$('.ember-power-select-trigger').trigger('mousedown');
  $('.ember-power-select-option:contains(unknown)').trigger('mouseup');
  assert.equal(this.$().text().trim(), 'unknown');
  assert.equal(this.get('value'), 'unknown');
});

test('Accepts a space seperated string for options', function(assert) {
  this.render(hbs`{{form-controls/power-select value=value options="male female"}}`);
  this.$('.ember-power-select-trigger').trigger('mousedown');
  assert.equal($('.ember-power-select-dropdown li').length, 2);
});

test('optionLabelPath', function(assert) {
  let [male, female] = [{ id: 1, value: 'male' }, { id: 2, value: 'female' }];
  this.set('value', female);
  this.set('options', [male, female]);

  this.render(hbs`{{form-controls/power-select
    value=value options=options optionValuePath="id"}}`);

  this.$('.ember-power-select-trigger').trigger('mousedown');

  assert.equal($('.ember-power-select-dropdown li').text().replace(/\s/g, ''), '12');
  assert.equal(this.$().text().trim(), 2);
});

test('optionValuePath', function(assert) {
  let [male, female] = [{ id: 1, value: 'male' }, { id: 2, value: 'female' }];
  this.set('value', female);
  this.set('options', [male, female]);

  this.render(hbs`{{form-controls/power-select
    value=value options=options optionValuePath="id" optionLabelPath="value"}}`);

  this.$('.ember-power-select-trigger').trigger('mousedown');

  assert.equal($('.ember-power-select-dropdown li').text().replace(/\s/g, ''), 'malefemale');
});

test('groupLabelPath', function(assert) {
  let [dubbel, tripel, ipa, saison] = [
    { id: 1, label: 'Dubbel', type: 'Trappist' },
    { id: 2, label: 'Tripel', type: 'Trappist' },
    { id: 3, label: 'IPA', type: 'IPA' },
    { id: 4, label: 'Saison', type: 'Saison' }
  ];
  this.set('value', saison);
  this.set('options', [dubbel, tripel, ipa, saison]);

  this.render(hbs`{{form-controls/power-select value=value options=options
      optionValuePath="id" optionLabelPath="label" groupLabelPath="type"}}`);

  this.$('.ember-power-select-trigger').trigger('mousedown');

  assert.equal($('.ember-power-select-group-name:eq(0)').text().trim(), 'Trappist');
  assert.equal($('.ember-power-select-group-name').length, 3);
});

test('multiple select', function(assert) {
  let [dubbel, tripel, ipa, saison] = [
    { id: 1, label: 'Dubbel', type: 'Trappist' },
    { id: 2, label: 'Tripel', type: 'Trappist' },
    { id: 3, label: 'IPA', type: 'IPA' },
    { id: 4, label: 'Saison', type: 'Saison' }
  ];

  this.set('value', [saison, ipa]);
  this.set('options', [dubbel, tripel, ipa, saison]);

  this.render(hbs`{{form-controls/power-select value=value options=options multiple=true
      optionValuePath="id" optionLabelPath="label" groupLabelPath="type"}}`);

  this.$('.ember-power-select-trigger').trigger('mousedown');

  assert.equal($('.ember-power-select-option--selected:eq(0)').text().trim(), 'IPA');
  assert.equal($('.ember-power-select-option--selected:eq(1)').text().trim(), 'Saison');
});
