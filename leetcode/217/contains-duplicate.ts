// use hash map to record checked value

export function containsDuplicate(nums: number[]): boolean {
  const checked: Record<string, boolean> = {};
  for (const num of nums) {
    if (checked[num]) {
      return true;
    } else {
      checked[num] = true;
    }
  }
  return false;
}
