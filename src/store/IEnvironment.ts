export default interface IEnvironment {
  globalStateGet(key: string): string | null;
};
