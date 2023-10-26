export function fib(n: number): number {
  const nums = [0, 1];
  let i = 0;
  while (i < n - 1) {
    const next = nums[i] + nums[i + 1];
    nums.push(next);
    i++;
  }
  return nums[n];
}
