import type { NodePath,  VisitNode, PluginPass } from "babeland";
import { t } from "babeland";

export { NodePath };
export { t };

export type JSXVisitNode = VisitNode<
  PluginPass<any> & {
  opts: any;
}, t.JSXElement>

export interface PluginOptions {
  moduleName: string;
  generate: 'dom' | 'ssr';
  hydratable: boolean;
  delegateEvents: boolean;
  delegatedEvents: string[];
  builtIns: string[];
  requireImportSource: boolean;
  wrapConditionals: boolean;
  contextToCustomElements: boolean;
  staticMarker: string;
  effectWrapper: string;
  memoWrapper: string;
  validate: boolean;
  renderers?: Array<{
    name: string;
    elements: string[];
    moduleName: string;
  }>;
}

export interface TransformResult {
  id?: t.Identifier;
  template?: string | string[];
  templateValues?: string[];
  // 
  decl?: any;
  exprs?: string[];
  dynamics?: string[];
  postExprs?: string[];
  tagName?: string;
  wontEscape?: boolean;
  text?: boolean;
  renderer?: string;
  skipTemplate?: boolean;
}

export interface TransformInfo {
  doNotEscape?: boolean;
  skipId?: boolean;
  topLevel?: boolean;
  componentChild?: boolean;
  fragmentChild?: boolean;
}
