import { types } from "mobx-state-tree";

const Credential = types.model("Credential", {
  token: types.maybe(types.string),
  provider: types.maybe(types.enumeration(["github"])),
});

export default Credential;

// user should be able to use stored credential from past session
// user should be presented a log in screen if no valid credential is present
// user should be given the option to log out / clear credential
// credential should be checked for validity
// user should be able to add credential
// user should be able to know status of credential check
