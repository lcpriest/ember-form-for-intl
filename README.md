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
  {{f.select-box "gender" "unknown male female"}}
  {{f.date-field "birthDate"}}

  {{f.email-field "emailAddress"}}
  {{f.text-field "userName"}}
  {{f.password-field "password"}}

  {{f.check-box "terms" label="I agree to the Terms of Service"}}

  {{f.reset  "Clear form"}}
  {{f.submit "Create account"}}
{{/form-for}}
```

## Installation

```sh
$ ember install ember-form-for
```
