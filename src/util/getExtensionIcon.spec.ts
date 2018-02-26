import fs from "fs";
import { getExtensionIcon } from "./getExtensionIcon";

it("returns extension icon structure for specified icon name", () => {
  const existingIcon = getExtensionIcon("login");

  expect(fs.existsSync(existingIcon.light)).toEqual(true);
  expect(fs.existsSync(existingIcon.dark)).toEqual(true);
});

it("throws error for non-existent icon", () => {
  expect(() => {
    getExtensionIcon("non-existent-icon");
  }).toThrowErrorMatchingSnapshot();
});
