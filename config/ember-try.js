/*jshint node:true*/
module.exports = {
  useVersionCompatibility: true,
  scenarios: [
    {
      name: 'ember-beta',
      command: 'echo DISABLED'
    },
    {
      name: 'ember-canary',
      command: 'echo DISABLED'
    }
  ]
};
