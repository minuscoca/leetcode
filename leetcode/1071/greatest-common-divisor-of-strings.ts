export function gcdOfStrings(string1: string, string2: string): string {
  const arr = [string1, string2].sort();
  const short = arr[0];
  const long = arr[1];

  if (short + long !== long + short) return '';

  let temp = short;
  for (let i = short.length - 1; i >= 0; i--) {
    const isCommon =
      long.split(temp).every((str) => str === '') &&
      short.split(temp).every((str) => str === '');
    if (isCommon) {
      return temp;
    }
    temp = short.slice(0, i);
  }

  return '';
}
