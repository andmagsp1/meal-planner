export function formatDescription(description: string): string {
  if (description.length > 50) {
    return `${description.slice(0, 100)}...`;
  }
  return description;
}
