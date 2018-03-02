import { flow, getEnv, types } from "mobx-state-tree";
import { getExtensionIcon } from "../util";
import { Gist } from "./Gist";
import { GistTree } from "./GistTree";

export interface IStoreEnvironment {
  getStoredGithubAuthenticationToken: () => string | null;
}

export const Store = types
  .model("Store", {
    status: types.enumeration("status", [
      "starting",
      "unauthenticated",
      "authenticating",
      "online",
      "offline",
    ]),
    gistTree: types.optional(GistTree, {}),
  })
  .actions(self => ({
    authenticate: flow(function* authenticate() {
      const { getStoredGithubAuthenticationToken }: IStoreEnvironment = getEnv(
        self,
      );

      const githubToken = getStoredGithubAuthenticationToken();
      self.status = githubToken ? "authenticating" : "unauthenticated";

      /* tslint:disable-next-line:prefer-const */
      let gists: typeof Gist.Type | null = null;

      // Show login item in tree view when unauthenticated.
      if (self.status === "unauthenticated") {
        self.gistTree.setRootItems([
          {
            id: "login-item",
            label: "Login",
            iconPath: getExtensionIcon("login"),
            children: null,
          },
        ]);
      }

      yield Promise.resolve(gists);
    }),
  }));

export type IStore = typeof Store.Type;
