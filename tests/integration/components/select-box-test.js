import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('select-box', 'Integration | Component | {{select-box}}', {
  integration: true,

  setup() {
    this.set('object', { gender: 'female' });
    this.set('options', ['unknown', 'male', 'female']);

    this.render(hbs`
      {{select-box object=object propertyName="gender" options=options}}
    `);
  }
});

test('It renders a select box with options', function(assert) {
  assert.equal(this.$('option').length, 3);
});

test('A value is selected', function(assert) {
  assert.equal(this.$('option:selected').val(), 'female');
});

test('It renders with a label', function(assert) {
  assert.equal(this.$('label').text().trim(), 'Gender');
});

test('Selecting a value updates the selected value', function(assert) {
  this.$('select').val('male');
  this.$('select').trigger('change');
  assert.equal(this.$('option:selected').val(), 'male');
  assert.equal(this.get('object.gender'), 'male');
});

test('A custom update action can be given', function(assert) {
  assert.expect(1);
  this.on('update', (object, propertyName, value) => assert.equal(value, 'male'));
  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options update=(action 'update')}}`);
  this.$('select').val('male');
  this.$('select').trigger('change');
});

test('Accepts a space seperated string for options', function(assert) {
  this.render(hbs`{{select-box
    object=object propertyName="gender" options="male female"}}`);
  assert.equal(this.$('option').length, 2);
});

test('Can include a blank value', function(assert) {
  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options includeBlank=true}}`);
  assert.equal(this.$('option').length, 4);
});

test('Blank value can be given a text', function(assert) {
  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options includeBlank="Select one"}}`);
  assert.equal(this.$('option:eq(0)').text().trim(), 'Select one');
});

test('Prompt is an alias for includeBlank', function(assert) {
  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options prompt="Select one"}}`);
  assert.equal(this.$('option:eq(0)').text().trim(), 'Select one');
});

test('With prompt selection still works properly', function(assert) {
  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options prompt="Select one"}}`);
  this.$('select').val('male');
  this.$('select').trigger('change');
  assert.equal(this.$('option:selected').val(), 'male');
  assert.equal(this.get('object.gender'), 'male');
});

test('optionLabelPath', function(assert) {
  let [male, female] = [{ id: 1, value: 'male' }, { id: 2, value: 'female' }];
  this.set('object', { gender: female });
  this.set('options', [male, female]);

  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options optionValuePath="id"}}`);

  assert.equal(this.$('option').text().replace(/\s/g, ''), '12');
  assert.equal(this.$('option:selected').val(), 2);
});

test('optionValuePath', function(assert) {
  let [male, female] = [{ id: 1, value: 'male' }, { id: 2, value: 'female' }];
  this.set('object', { gender: female });
  this.set('options', [male, female]);

  this.render(hbs`{{select-box
    object=object propertyName="gender" options=options
              optionValuePath="id" optionLabelPath="value"}}`);

  assert.equal(this.$('option').text().replace(/\s/g, ''), 'malefemale');
});

test('groupLabelPath', function(assert) {
  let [dubbel, tripel, ipa, saison] = [
    { id: 1, label: 'Dubbel', type: 'Trappist' },
    { id: 2, label: 'Tripel', type: 'Trappist' },
    { id: 3, label: 'IPA', type: 'IPA' },
    { id: 4, label: 'Saison', type: 'Saison' }
  ];
  this.set('object', { beer: saison });
  this.set('options', [dubbel, tripel, ipa, saison]);

  this.render(hbs`{{select-box object=object propertyName="beer" options=options
      optionValuePath="id" optionLabelPath="label" groupLabelPath="type"}}`);

  assert.equal(this.$('optgroup').eq(0).attr('label'),  'Trappist');
  assert.equal(this.$('optgroup').length, 3);
});

test('multiple select', function(assert) {
  let [dubbel, tripel, ipa, saison] = [
    { id: 1, label: 'Dubbel', type: 'Trappist' },
    { id: 2, label: 'Tripel', type: 'Trappist' },
    { id: 3, label: 'IPA', type: 'IPA' },
    { id: 4, label: 'Saison', type: 'Saison' }
  ];

  this.set('object', { beers: [saison, ipa] });
  this.set('options', [dubbel, tripel, ipa, saison]);

  this.render(hbs`{{select-box
      object=object propertyName="beers" options=options multiple=true
      optionValuePath="id" optionLabelPath="label" groupLabelPath="type"}}`);

  assert.equal(this.$('option:selected:eq(0)').val(), 3);
  assert.equal(this.$('option:selected:eq(1)').val(), 4);
});

test('multiple select a value', function(assert) {
  let [dubbel, tripel, ipa, saison] = [
    { id: 1, label: 'Dubbel', type: 'Trappist' },
    { id: 2, label: 'Tripel', type: 'Trappist' },
    { id: 3, label: 'IPA', type: 'IPA' },
    { id: 4, label: 'Saison', type: 'Saison' }
  ];

  this.set('object', { beers: [saison, ipa] });
  this.set('options', [dubbel, tripel, ipa, saison]);

  this.render(hbs`{{select-box
      object=object propertyName="beers" options=options multiple=true
      optionValuePath="id" optionLabelPath="label" groupLabelPath="type"}}`);

  this.$('select').val(['1', '3', '4']);
  this.$('select').trigger('change');

  assert.equal(this.$('option:selected:eq(0)').val(), 1);
  assert.deepEqual(this.get('object.beers'), [dubbel, ipa, saison]);
});
