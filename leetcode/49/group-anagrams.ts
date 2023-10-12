export function groupAnagrams(strs: string[]): string[][] {
  const sorted = [...strs].map((s) => s.split('').sort().join(''));
  const record: Record<string, number[]> = {};
  for (const [index, value] of sorted.entries()) {
    if (record[value] === undefined) {
      record[value] = [index];
    } else {
      record[value].push(index);
    }
  }
  return Object.values(record).map((indexes) =>
    indexes.map((index) => strs[index])
  );
}
