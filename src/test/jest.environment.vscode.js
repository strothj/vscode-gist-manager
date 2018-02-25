/**
 * Exposes the Visual Studio Code extension API to the Jest testing environment.
 *
 * They would otherwise not have access because they are sandboxed.
 */
const vscode = require("vscode");
const NodeEnvironment = require("jest-environment-node");

class VsCodeEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.vscode = vscode;
  }

  async teardown() {
    this.global.vscode = {};
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = VsCodeEnvironment;
