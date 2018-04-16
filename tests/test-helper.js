import { start } from 'ember-cli-qunit';
import resolver from './helpers/resolver';
import { setResolver } from '@ember/test-helpers';

setResolver(resolver);
start();
