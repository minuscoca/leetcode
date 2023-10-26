export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => (a > b ? 1 : -1));
  const result: number[][] = [];

  let target = 0;
  while (target < nums.length - 2) {
    // skip duplicates
    if (target > 0 && nums[target] === nums[target - 1]) {
      target++;
      continue;
    }

    let head = target + 1;
    let tail = nums.length - 1;

    while (head < tail) {
      const sum = nums[target] + nums[head] + nums[tail];

      if (sum === 0) {
        result.push([nums[target], nums[head], nums[tail]]);
        while (head < tail && nums[head] === nums[head + 1]) head++; // skip duplicates
        while (head < tail && nums[tail] === nums[tail - 1]) tail--; // skip duplicates
        head++;
        tail--;
      }
      if (sum < 0) head++;
      if (sum > 0) tail--;
    }
    target++;
  }

  return result;
}
