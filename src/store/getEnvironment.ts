import { getEnv, IStateTreeNode } from "mobx-state-tree";
import IEnvironment from "./IEnvironment";

const keysDictionary: { [k in keyof IEnvironment]: any } = {
  globalStateGet: true,
};
const keys = Object.keys(keysDictionary);

const getEnvironment = (target: IStateTreeNode): IEnvironment => {
  const environment = getEnv(target);

  // Sanity check. Make sure environment was provided to parent store.
  keys.forEach(k => {
    if (!environment[k]) {
      /* tslint:disable-next-line:no-console */
      console.log("environment", environment);
      throw new Error(`"${k}" missing in store environment.`);
    }
  });

  return environment;
};

export default getEnvironment;
