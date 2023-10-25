export function isPalindrome(s: string): boolean {
  const arr: string[] = [];
  let head = -1;
  let tail = -1;

  for (const c of s) {
    if (isAlphanumeric(c)) {
      // arr is empty
      // move head and tail to 0
      if (arr.length === 0) {
        head = 0;
        tail = 0;
      }
      // arr is not empty
      // move tail to the new index
      else {
        tail = arr.length;
      }

      // push lowercase char to arr
      arr.push(c.toLowerCase());
    }
  }

  while (head < tail) {
    if (arr[head] !== arr[tail]) return false; // head and tail no match
    head++;
    tail--;
  }

  return true;
}

function isAlphanumeric(c: string) {
  return Boolean(c.match(/[A-Z0-9]/i));
}
