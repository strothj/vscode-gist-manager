import { TreeItem, TreeItemCollapsibleState } from "vscode";
import { getExtensionIcon } from "./util";

export default class GistTreeLoginItem extends TreeItem {
  public iconPath = getExtensionIcon("login");

  constructor() {
    super("Login", TreeItemCollapsibleState.None);
  }
}
