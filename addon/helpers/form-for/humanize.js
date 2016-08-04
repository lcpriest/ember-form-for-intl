import Ember from 'ember';
import { humanize } from '../../utils/strings';

export function formForHumanize([string]) {
  return humanize(string);
}

export default Ember.Helper.helper(formForHumanize);
