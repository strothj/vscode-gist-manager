import { TextDocumentContentProvider, Uri } from "vscode";

export default class LoginPage implements TextDocumentContentProvider {
  public provideTextDocumentContent(uri: Uri): string {
    /* tslint:disable-next-line:no-console */
    console.log(uri);

    return "<body>Test</body>";
  }
}
