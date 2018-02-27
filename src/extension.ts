import { window, workspace, ExtensionContext } from "vscode";

import GistTree from "./GistTree";
import LoginPage from "./LoginPage";

import models from "./models";

export function activate(context: ExtensionContext) {
  const gistTree = new GistTree();
  const gistTreeDisposable = window.registerTreeDataProvider("gists", gistTree);

  const loginPage = new LoginPage();
  const loginPageDisposable = workspace.registerTextDocumentContentProvider(
    "gist-manager-login",
    loginPage,
  );

  context.subscriptions.push(gistTreeDisposable, loginPageDisposable);

  models();
}

export function deactivate() {
  //
}
