// https://github.com/leoforfree/cz-customizable

module.exports = {
  types: [
    {
      value: 'build',
      name: 'build      Changes that affect the build system (involving scripts, configurations or tools) or external dependencies'
    },
    {
      value: 'ci',
      name: 'ci         Changes related to the continuous integration and deployment system'
    },
    {
      value: 'docs',
      name: 'docs       Changes in documentation'
    },
    {
      value: 'feat',
      name: 'feat       A new feature'
    },
    {
      value: 'fix',
      name: 'fix        A bug fix'
    },
    {
      value: 'perf',
      name: 'perf       Changes that improve performance'
    },
    {
      value: 'refactor',
      name: 'refactor   Development changes related to modifying the codebase, which neither adds a feature nor fixes a bug'
    },
    {
      value: 'revert',
      name: 'revert     Reverts a previous commit'
    },
    {
      value: 'test',
      name: 'test       Adding or fixing tests'
    }
  ],

  scopes: [
    { name: "frontend" },
    { name: "backend" },
    { name: "root" },
  ],

  subjectLimit: 72
};
