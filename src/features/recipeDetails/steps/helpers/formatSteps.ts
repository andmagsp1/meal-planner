export function formatSteps(steps: string): string[] {
  return steps
    .split(/\d+\.\s*/)
    .filter((step) => step.trim() !== "")
    .map((step) => step.trim());
}
