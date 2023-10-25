export function evalRPN(tokens: string[]): number {
  const operatorsMap = new Map([
    ['+', (a: number, b: number) => a + b],
    ['-', (a: number, b: number) => a - b],
    ['*', (a: number, b: number) => a * b],
    ['/', (a: number, b: number) => a / b],
  ]);
  const stack: string[] = [];

  for (const string of tokens) {
    // if string is operator
    if (operatorsMap.has(string)) {
      const operatorFn = operatorsMap.get(string);
      // pop last curr and prev from stack
      const curr = stack.pop();
      const prev = stack.pop();
      // calcualte (curr operator prev)
      let calc = 0;
      if (curr && prev && operatorFn) {
        calc = operatorFn(parseInt(prev), parseInt(curr));
      }
      // push calcualted result to stack
      stack.push(String(calc));
    }

    // if string is number
    else {
      stack.push(string);
    }
  }

  // stack will be a number after loop
  return parseInt(stack[0]);
}
