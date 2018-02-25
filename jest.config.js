module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  testEnvironment: "./test/jest.environment.vscode.js",
  globals: {
    "ts-jest": {
      tsConfigFile: "../tsconfig.json",
    },
  },
};
