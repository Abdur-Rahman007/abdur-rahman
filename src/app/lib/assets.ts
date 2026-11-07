export function assetUrl(path: string): string {
  return /^https?:\/\//.test(path)
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
