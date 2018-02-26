import { TreeItem, TreeItemCollapsibleState } from "vscode";

export default class GistTreeLoginItem extends TreeItem {
  constructor() {
    super("Login", TreeItemCollapsibleState.None);
  }
}
