import { types } from "mobx-state-tree";
import getEnvironment from "./getEnvironment";
import IEnvironment from "./IEnvironment";

const keysDictionary: { [k in keyof IEnvironment]: true } = {
  globalStateGet: true,
};
const keys = Object.keys(keysDictionary);

describe("getEnvironment", () => {
  keys.forEach(key => {
    it(`should throw when "${key}" is missing in store environment`, () => {
      const env = createEnvironment();
      // @ts-ignore
      delete env[key];

      const store = createStore(env);

      expect(() => getEnvironment(store)).toThrowError(key);
    });
  });

  it("should not throw when expected providers were given to store environment", () => {
    const givenEnvironment = createEnvironment();
    const store = createStore(givenEnvironment);

    expect(() => {
      getEnvironment(store);
    }).not.toThrow();

    expect(getEnvironment(store)).toBe(givenEnvironment);
  });
});

function createEnvironment(): IEnvironment {
  return keys.reduce<IEnvironment>(
    (acc: IEnvironment, k) => {
      // @ts-ignore
      // tslint:disable-next-line:no-empty
      acc[k] = () => {};
      return acc;
    },
    // tslint:disable-next-line:no-object-literal-type-assertion
    {} as IEnvironment,
  );
}

function createStore(env: any) {
  return types.model({}).create({}, env);
}
