/**
 * Expose the Visual Studio Code extension api. Importing from unit tests within
 * the Jest sandbox is not possible. The api is passed from the custom Jest
 * environment as a replacement for the module import.
 *
 * See /src/test/jest.environment.vscode.js
 */

// @ts-ignore
module.exports = global.vscode;
