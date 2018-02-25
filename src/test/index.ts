/**
 * Wires in Jest as the test runner in place of the default Mocha.
 */

/* tslint:disable:no-implicit-dependencies no-console */
import path from "path";
import { runCLI } from "jest-cli";

async function run(
  testRoot: string,
  callback: (error: Error | null, failures?: any) => void,
) {
  process.chdir(path.resolve(__dirname, "../.."));

  try {
    // For some reason this seems to be required for Jest output to be streamed
    // to the Debug Console.
    const logger = (line: string) => {
      console.log(line);
      return true;
    };
    process.stdout.write = logger;
    process.stderr.write = logger;

    const { globalConfig, results } = await runCLI([], [testRoot]);
    const failures = collectFailures(results);

    if (failures.length > 0) {
      console.log("globalConfig:", globalConfig);
      callback(null, failures);
      return;
    }

    callback(null);
  } catch (e) {
    callback(e);
  }
}

module.exports.run = run;

function collectFailures(results: any): string[] {
  const failures = results.testResults.reduce(
    (acc: string[], testResult: any) => {
      if (testResult.failureMessage) acc.push(testResult.failureMessage);
      return acc;
    },
    [],
  );

  return failures;
}
