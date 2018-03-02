import { IStoreEnvironment, Store } from "./Store";

export function createStore(env: IStoreEnvironment) {
  return Store.create({ status: "starting" }, env);
}
