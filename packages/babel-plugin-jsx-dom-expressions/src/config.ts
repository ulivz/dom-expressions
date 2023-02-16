import { PluginOptions } from "./types";

export const PLUGIN_OPTIONS: PluginOptions = {
  moduleName: "dom",
  generate: "dom",
  hydratable: false,
  delegateEvents: true,
  delegatedEvents: [],
  builtIns: [],
  requireImportSource: false,
  wrapConditionals: true,
  contextToCustomElements: false,
  staticMarker: "@once",
  effectWrapper: "effect",
  memoWrapper: "memo",
  validate: true
};
