import { IModelType, types } from "mobx-state-tree";

interface IGistNode {
  id: string;
  label: string | null;
  iconPath: { light: string; dark: string } | null;
  children: IGistNode[] | null;
}

const IconPath = types.model({
  light: types.string,
  dark: types.string,
});

// Explicitly declaring the type due to issues with TypeScript type inference
// with circular types, see:
// https://www.bountysource.com/issues/50005584-recursive-mst-models-and-typescript
export const Gist: IModelType<Partial<IGistNode>, IGistNode> = types.model({
  id: types.identifier(types.string),
  label: types.maybe(types.string),
  iconPath: types.maybe(IconPath),
  children: types.maybe(types.array(types.late(() => Gist))),
});

export type IGist = typeof Gist.Type;
