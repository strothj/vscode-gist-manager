import { types } from "mobx-state-tree";
import { TreeItem } from "vscode";
import { Gist, IGist } from "./Gist";

export const GistTree = types
  .model("GistTree", {
    rootItems: types.optional(types.array(Gist), []),
  })
  .actions(self => ({
    setRootItems(items: IGist[]) {
      self.rootItems = items as any;
    },
  }))
  .views(self => ({
    getChildren(element?: IGist) {
      if (!element) return self.rootItems;

      return element.children ? element.children : [];
    },

    getTreeItem(element: IGist) {
      const treeItem: TreeItem = {
        id: element.id,
        label: element.label ? element.label : undefined,
        iconPath: element.iconPath ? element.iconPath : undefined,
      };

      return treeItem;
    },
  }));
