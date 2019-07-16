'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: A new feature',
    },
    {
      value: 'fix',
      name: 'fix: A bug fix',
    },
    {
      value: 'docs',
      name: 'docs: Documentation changes',
    },
    {
      value: 'style',
      name: 'style: Changes that do not affect the meaning of the code\n (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test: Adding or fixing tests',
    },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools\n and libraries such as documentation generation',
    },
    {
      value: 'WIP',
      name: 'WIP: Work in progress',
    },
  ],

  scopes: [
    {name: 'Build'},
    {name: 'Framework'},
    {name: 'Demo'},
    {name: 'Design Language'},
    {name: 'Testing'},
    // TODO: Update to official name
    {name: 'UI Library'},
    {name: 'UX Guidelines'},
  ],

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix', 'chore'],
};
