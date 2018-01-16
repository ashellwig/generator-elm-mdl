'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // Yeoman Greeting
  prompting() {
    this.log(yosay('Welcome to the ' + chalk.red('elm-mdl') + ' generator!'));
  }

  // Copy Scaffold
  writing() {
    this.fs.copy(
      this.templatePath('elm-package.json'),
      this.destinationPath('elm-package.json')
    );
    this.fs.copy(
      this.templatePath('src/Elm/Main.elm'),
      this.destinationPath('src/Elm/Main.elm')
    );
    this.fs.copy(
      this.templatePath('src/Elm/Components/Models.elm'),
      this.destinationPath('src/Elm/Components/Models.elm')
    );
    this.fs.copy(
      this.templatePath('src/Elm/Components/Types.elm'),
      this.destinationPath('src/Elm/Components/Types.elm')
    );
    this.fs.copy(
      this.templatePath('src/Elm/Components/Update.elm'),
      this.destinationPath('src/Elm/Components/Update.elm')
    );
    this.fs.copy(
      this.templatePath('src/Elm/Components/Views.elm'),
      this.destinationPath('src/Elm/Components/Views.elm')
    );
  }

  // Install Dependencies
  install() {
    this.spawnCommand('elm-package', ['install']);
  }
};
