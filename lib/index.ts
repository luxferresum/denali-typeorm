export { default as TypeormAdapter } from './adapter';
export interface ModelRegistry {
  _: never;
};
export type Model = ModelRegistry[keyof ModelRegistry];
