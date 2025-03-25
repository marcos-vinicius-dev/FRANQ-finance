export function formatQuotesForDisplay(
  data: Record<string, any>,
  limit?: number,
  extraProps?: Record<string, any>,
) {
  return Object.entries(data)
    .map(([key, value]) => ({
      code: key,
      ...value,
      ...extraProps,
    }))
    .slice(0, limit);
}
