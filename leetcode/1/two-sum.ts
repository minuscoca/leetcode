export function twoSum(numbers: number[], target: number) {
  const record: Record<string, number> = {};
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (record[current] !== undefined) {
      return [record[current], i];
    } else {
      const awaited = target - current;
      record[awaited] = i;
    }
  }
}
