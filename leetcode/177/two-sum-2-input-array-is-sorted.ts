export function twoSum(numbers: number[], target: number): number[] {
  let head = 0;
  let tail = numbers.length - 1;

  while (numbers[head] + numbers[tail] !== target) {
    // if is greater than target, tail--
    if (numbers[head] + numbers[tail] > target) tail--;
    // if is smaller than target, head++
    if (numbers[head] + numbers[tail] < target) head++;
  }

  return [head + 1, tail + 1];
}
