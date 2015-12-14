# Ember Form For

[![npm version](https://badge.fury.io/js/ember-form-for.svg)](http://badge.fury.io/js/ember-form-for)
[![Build Status](https://travis-ci.org/martndemus/ember-form-for.svg?branch=master)](https://travis-ci.org/martndemus/ember-form-for)
[![Ember Observer Score](http://emberobserver.com/badges/ember-form-for.svg)](http://emberobserver.com/addons/ember-form-for)

This Ember Addon will give you a simple way to build nice looking forms.

__WARNING__: This addon uses __contextual helpers__ and is therefore only
compatible with apps built with Ember.js version __2.3__ and up.

__NOTE__: This addon is a work in progress, a full readme will be added soon.

#### Roadmap (but don't hold me to it)

* TextArea, Checkboxes, radios, select
* Picking or searching for an object from the Ember Data store
* Custom style options

## Using Ember Form For

```hbs
{{#form-for object as |f|}}
  {{f.text-field "firstName"}}
  {{f.text-field "lastName"}}
  {{f.date-field "birthDate"}}
  {{f.email-field "emailAddress"}}

  {{f.text-field "userName"}}
  {{f.password-field "password"}}

  {{f.submit}}
{{/form-for}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
