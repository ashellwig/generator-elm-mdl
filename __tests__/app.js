'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-elm-mdl:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'));
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
    assert.file(['elm-package.json']);
    assert.file(['src/Elm/Main.elm']);
    assert.file(['src/Elm/Components/Models.elm']);
    assert.file(['src/Elm/Components/Types.elm']);
    assert.file(['src/Elm/Components/Update.elm']);
    assert.file(['src/Elm/Components/Views.elm']);
  });
});
