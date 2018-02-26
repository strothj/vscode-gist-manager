import { TreeDataProvider, ProviderResult } from "vscode";
import GistTreeLoginItem from "./GistTreeLoginItem";

class GistTreeProvider implements TreeDataProvider<GistTreeEntry> {
  constructor() {
    /* tslint:disable-next-line:no-console */
    console.log("Constructor");
  }

  public getChildren(element?: GistTreeEntry): ProviderResult<GistTreeEntry[]> {
    /* tslint:disable-next-line:no-console */
    console.log("element:", element);
    if (element) return [];

    return [{ type: "LOGIN_BUTTON" }];
  }

  public getTreeItem(
    element: GistTreeEntry,
  ): GistTreeItem | Thenable<GistTreeItem> {
    /* tslint:disable-next-line:no-console */
    console.log("TEST");
    if (element.type !== "LOGIN_BUTTON") throw new Error("oh no");

    return new GistTreeLoginItem();
  }
}

export default GistTreeProvider;

type GistTreeEntry = { type: "LOGIN_BUTTON" } | { type: "GIST" };

type GistTreeItem = GistTreeLoginItem;
