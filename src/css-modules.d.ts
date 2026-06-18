// Tells TypeScript that CSS Module imports return a string-keyed object
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
