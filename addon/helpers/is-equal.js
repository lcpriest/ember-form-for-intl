import Ember from 'ember';
import isEqual from '../utils/is-equal';

export default Ember.Helper.helper(([a, b]) => isEqual(a, b));
