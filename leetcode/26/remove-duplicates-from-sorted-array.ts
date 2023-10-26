export function removeDuplicates(nums: number[]): number {
  const set: number[] = [];
  nums.forEach((ele) => {
    if (ele !== set[set.length - 1]) {
      set.push(ele);
    }
  });
  nums.length = 0;
  nums.push(...set);
  return set.length;
}
