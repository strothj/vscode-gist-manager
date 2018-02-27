import { types } from "mobx-state-tree";

export const Authentication = types.model({
  githubToken: types.union(types.string, types.null),
});

export default () => Authentication.create({ githubToken: "test" });
