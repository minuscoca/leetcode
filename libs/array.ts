export function toObject<T>(array: T[]) {
  return array.reduce<Record<string, T>>((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});
}
