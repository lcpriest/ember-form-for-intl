import Ember from 'ember';

const {
  String: { capitalize, decamelize }
} = Ember;

const WORD_SEPERATORS = new RegExp('[-_ ]');

export default (string) =>
  decamelize(string)
    .split(WORD_SEPERATORS)
    .map((w) => capitalize(w))
    .join(' ');
