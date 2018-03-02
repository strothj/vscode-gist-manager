import { ExtensionContext, window, workspace } from "vscode";

// import GistTree from "./GistTree";
import LoginPage from "./LoginPage";
import { createStore, IStoreEnvironment } from "./store";

export function activate(context: ExtensionContext) {
  const storeEnvironment = createStoreEnvironment(context);
  const store = createStore(storeEnvironment);
  store.authenticate();

  // const gistTree = new GistTree(store);
  // const gistTreeDisposable = window.registerTreeDataProvider("gists", gistTree);
  const gistTreeDisposable = window.registerTreeDataProvider(
    "gists",
    store.gistTree,
  );

  const loginPage = new LoginPage();
  const loginPageDisposable = workspace.registerTextDocumentContentProvider(
    "gist-manager-login",
    loginPage,
  );

  context.subscriptions.push(gistTreeDisposable, loginPageDisposable);
}

export function deactivate() {
  //
}

/**
 * Create store environment using utilities from the extension context. The
 * returned environment is used to inject extension utilities into the store.
 *
 * @param context Extension context.
 */
function createStoreEnvironment(context: ExtensionContext): IStoreEnvironment {
  const storeEnvironment = {
    getStoredGithubAuthenticationToken: () => {
      const token = context.globalState.get<string>("githubToken");
      return token ? token : null;
    },
  };

  return storeEnvironment;
}
