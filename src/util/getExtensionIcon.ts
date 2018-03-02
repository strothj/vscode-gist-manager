import fs from "fs";
import path from "path";

interface IThemeIcons {
  light: string;
  dark: string;
}

const iconList = new Map<string, IThemeIcons>();
const iconBasePath = path.resolve(__dirname, "../../resources/icons");

fs.readdirSync(iconBasePath).forEach(filename => {
  const iconName = filename.replace(/-(dark|light)\.svg/, "");
  if (iconList.has(iconName)) return;

  iconList.set(iconName, {
    light: path.join(iconBasePath, `${iconName}-light.svg`),
    dark: path.join(iconBasePath, `${iconName}-dark.svg`),
  });
});

if (iconList.size === 0) throw new Error("Failed to create icon list.");

export function getExtensionIcon(iconName: string) {
  const icon = iconList.get(iconName);
  if (!icon) throw new Error("Icon not in icon list.");

  return icon;
}
