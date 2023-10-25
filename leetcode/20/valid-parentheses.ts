export function isValid(input: string) {
  const stack = [];
  const closeToOpenMap = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  // input is empty string
  if (input.length === 0) return false;
  // input has odd length
  if (input.length % 2 === 1) return false;
  // input starting with close parentheses
  if (closeToOpenMap.has(input[0])) return false;

  for (const char of input) {
    // char is close parentheses
    if (closeToOpenMap.has(char)) {
      // has match
      if (stack[stack.length - 1] === closeToOpenMap.get(char)) {
        stack.pop();
      }
      // not match
      else {
        return false;
      }
    }

    // char is open parentheses
    else {
      stack.push(char);
    }
  }

  // match all parentheses
  return stack.length === 0;
}
