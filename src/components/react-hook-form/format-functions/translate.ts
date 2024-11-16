export function translate(value?: string) {
  if (!value) return undefined;
  return value.charAt(0).toUpperCase() + value.slice(1);
}
