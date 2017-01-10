export type EasingFunction = (x: number) => number;
export type CssEasingFunction = EasingFunction & {
  cssString: string;
};

export type CubicBezierDefinition = ['cubic-bezier', number, number, number, number];
export type StepDefinition = ['step', number, number | 'start' | 'end'];
export type CssEasingDefinition = CubicBezierDefinition | StepDefinition;

export interface EasingDeclaration {
  name: string;
  js?: EasingFunction;
  css?: CssEasingDefinition;
};
