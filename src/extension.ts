import * as vscode from "vscode";
import GistTreeProvider from "./GistTreeProvider";

export function activate(_context: vscode.ExtensionContext) {
  vscode.window.registerTreeDataProvider("gists", new GistTreeProvider());
}

// this method is called when your extension is deactivated
export function deactivate() {
  //
}
