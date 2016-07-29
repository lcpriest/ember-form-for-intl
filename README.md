# Ember Form For

[![npm version](https://badge.fury.io/js/ember-form-for.svg)](http://badge.fury.io/js/ember-form-for)
[![Build Status](https://travis-ci.org/martndemus/ember-form-for.svg?branch=master)](https://travis-ci.org/martndemus/ember-form-for)
[![Ember Observer Score](http://emberobserver.com/badges/ember-form-for.svg)](http://emberobserver.com/addons/ember-form-for)

This Ember.js addon will give you an easy way to build good forms:
  * Supports all HTML5 input types, textarea and select, backed by [`ember-one-way-controls`](https://github.com/DockYard/ember-one-way-controls)
  * Automatically adds labels, hints and errors to the form controls
  * Is built with data down - actions up in mind
  * Standard markup has built-in accessibility support
  * Compatible with [`ember-changeset`](https://github.com/DockYard/ember-changeset)

__WARNING__: This addon uses __contextual helpers__ and is therefore only
compatible with apps built with Ember.js version __2.3__ and up.

__NOTE__: I'm working on rewriting docs, [click here](https://github.com/martndemus/ember-form-for/tree/1.4.1) for the old docs!

## Installation

```
ember install ember-form-for
```

## Quickstart Example

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

### Breaking down the quickstart example

Let's first take a look at the `form-for` component itself:

```hbs
{{#form-for newUser as |f|}}
  {{! form fields go here }}
{{/form-for}}
```

The `{{form-for}}` component takes an object as first parameter, `newUser` in
this case, this is the object where the form fields will be created for.

It then yields `f`, `f` contains all form controls as [contextual components](http://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_contextual-components).
This means that the components rendered with `f` already have `form-for`'s
context applied to it, you don't have to pass the target object to each
form control, `form-for` takes care of that.

For example `{{f.text-field "firstName"}}` will render an input that will update
the `firstName` property of the `newUser` object you have passed to the
`form-for` component. You didn't have to pass `newUser` again, because it's taken
from `form-for`'s context.

Next you see the `{{fields-for}}` component. This component is similar to
`form-for`, except it doesn't render a `<form>` element as outer element, this
is ideal to embed subsections to your form that operate on a different object.

Lastly there are the `{{f.reset}}` and `{{f.submit}}` button components. These
are getting passed the `reset` and `submit` action from the `form-for` component
respectively. By default the `reset` action will call the `rollback` function on
the object, the `submit` action will call the `save` function on the object.

## Reference

### Table of Contents

- [`form-for`](#form-for)


## form-for

The `{{form-for}}` component is the main component from this addon. All forms
built with this addon should start with this component.

### Syntax

```hbs
{{#form-for object
    update=(action update)
    submit=(action submit)
    reset=(action reset)
    as |f|
}}
  {{! block content }}
{{/form-for}}
```

### Parameters

#### object

The object the form fields are for

#### update

This action is called every time a field is updated. It will pass three
arguments: `object`, `property` and `value`. By default it will automatically
update the property on the object with the new value.

#### submit

This action is called when a submit button is clicked. It will pass the object
as first argument. By default it will call the `save` function on the object.

#### reset

This action is called when a reset button is clicked. It will pass the object
as first argument. By default it will call the `rollback` function on the
object.

### Yields

#### formControls

An object containing form controls as [contextual components](http://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_contextual-components).
The form controls have the `object` and the `update` action pre-bound to it.

The default form controls are:

 - checkbox-field
 - color-field
 - date-field
 - datetime-field
 - datetime-local-field
 - email-field
 - file-field
 - hidden-field
 - month-field
 - number-field
 - password-field
 - radio-field
 - radio-group
 - range-field
 - search-field
 - tel-field
 - text-field
 - textarea-field
 - time-field
 - url-field
 - week-field
 - custom-field

Additionally these buttons are also available:

 - button
 - reset
 - submit
