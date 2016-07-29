# Ember Form For

[![npm version](https://badge.fury.io/js/ember-form-for.svg)](http://badge.fury.io/js/ember-form-for)
[![Build Status](https://travis-ci.org/martndemus/ember-form-for.svg?branch=master)](https://travis-ci.org/martndemus/ember-form-for)
[![Ember Observer Score](http://emberobserver.com/badges/ember-form-for.svg)](http://emberobserver.com/addons/ember-form-for)

This Ember.js addon will give you a simple way to build forms.
* Supports all HTML5 input types, textarea and select
* Is built with data down - actions up in mind
* Has basic accessibility support

__WARNING__: This addon uses __contextual helpers__ and is therefore only
compatible with apps built with Ember.js version __2.3__ and up.

__NOTE__: I'm working on rewriting docs, [click here](https://github.com/martndemus/ember-form-for/tree/1.4.1) for the old docs!

### Installation

```
ember install ember-form-for
```

### Quickstart Example

```hbs
{{#form-for newUser as |f|}}
  {{f.text-field "firstName"}}
  {{f.text-field "lastName"}}

  {{#fields-for newUser.address as |fa|}}
    {{fa.text-field "street"}}
    {{fa.text-field "city"}}
    {{fa.text-field "state"}}
    {{fa.text-field "zipCode"}}
  {{/fields-for}}

  {{f.select-field "gender" "unknown male female"}}

  {{f.date-field "birthDate"}}

  {{f.email-field "emailAddress"}}
  {{f.text-field "userName"}}
  {{f.password-field "password" hint="Must be atleast six characters long and include a capital letter"}}

  {{f.checkbox-field "terms" label="I agree to the Terms of Service"}}

  {{f.reset  "Clear form"}}
  {{f.submit "Create account"}}
{{/form-for}}
```

See this example in action: http://martndemus.github.io/ember-form-for/
