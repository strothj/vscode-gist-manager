import { TreeDataProvider, ProviderResult } from "vscode";
import GistTreeLoginItem from "./GistTreeLoginItem";

class GistTreeProvider implements TreeDataProvider<GistTreeEntry> {
  constructor() {
    //
  }

  public getChildren(element?: GistTreeEntry): ProviderResult<GistTreeEntry[]> {
    if (element) return [];

    return [{ type: "LOGIN_BUTTON" }];
  }

  public getTreeItem(
    element: GistTreeEntry,
  ): GistTreeItem | Thenable<GistTreeItem> {
    if (element.type !== "LOGIN_BUTTON") throw new Error("Not implemented.");

    return new GistTreeLoginItem();
  }
}

export default GistTreeProvider;

type GistTreeEntry = { type: "LOGIN_BUTTON" } | { type: "GIST" };

type GistTreeItem = GistTreeLoginItem;
