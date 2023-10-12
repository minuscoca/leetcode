export function topKFrequent(nums: number[], k: number): number[] {
  const record: Record<string, number> = {}; // counts of number
  for (const value of nums) {
    if (record[value] === undefined) {
      record[value] = 1; // set counts to 1
    } else {
      record[value] += 1; // increase counts by 1
    }
  }

  return (
    Object.entries(record)
      // sort record by counts from large to small
      .sort(([, a], [, b]) => b - a)
      // take the k most frequent elements
      .reduce<number[]>((acc, [key]) => {
        if (acc.length === k) return acc;
        acc.push(Number(key));
        return acc;
      }, [])
  );
}
