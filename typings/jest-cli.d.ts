declare module "jest-cli" {
  export function runCLI(
    jestConfig: object,
    projects: string[],
  ): Promise<{ results: object; globalConfig: object }>;
}

declare module "jest-cli/build/cli/args" {
  export const options: object;
  export const usage: object;
  export const docs: object;
  export const check: object;
}
