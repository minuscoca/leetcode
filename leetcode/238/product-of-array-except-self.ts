export function productExceptSelf(nums: number[]): number[] {
  const record: Record<string, number> = {};

  nums.forEach((value, index) => {
    if (record[value] === undefined) {
      const copy = [...nums];
      copy.splice(index, 1);
      const total = product(copy);
      record[value] = total;
    }
  });

  return nums.map((current) => Number(String(record[current])));
}

function product(nums: number[]) {
  return nums.reduce((acc, current) => {
    acc = acc * current;
    return acc;
  }, 1);
}

// export function productExceptSelf(nums: number[]): number[] {
//   const result: number[] = [];
//   let prefix = 1;
//   let suffix = 1;

//   // prefix
//   for (let index = 0; index < nums.length; index++) {
//     const value = nums[index - 1] ?? 1;
//     prefix = prefix * value;
//     result[index] = prefix;
//   }

//   // suffix
//   for (let index = nums.length - 1; index >= 0; index--) {
//     const value = nums[index + 1] ?? 1;
//     suffix = suffix * value;
//     result[index] = Number(String(result[index] * suffix));
//   }

//   return result;
// }
