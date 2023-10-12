export function isAnagram(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return a.split('').sort().join() === b.split('').sort().join();
}
