export function isValidSudoku(board: string[][]): boolean {
  const reversed: string[][] = [];
  const groupedRecord: Record<string, string[]> = {};
  let result = true;

  baseLoop: for (let rowId = 0; rowId < board.length; rowId++) {
    const record: Record<string, number> = {};
    const row = board[rowId];

    for (let colId = 0; colId < row.length; colId++) {
      const value = row[colId];

      // reverse col & row
      if (reversed[colId] === undefined) {
        reversed[colId] = [value];
      } else {
        reversed[colId][rowId] = value;
      }

      // create group
      const x = Math.floor(colId / 3);
      const y = Math.floor(rowId / 3);
      const coordinate = String(x) + String(y);
      if (groupedRecord[coordinate] === undefined) {
        groupedRecord[coordinate] = [value];
      } else {
        groupedRecord[coordinate].push(value);
      }

      if (value !== '.') {
        if (record[value] !== undefined) {
          result = false;
          break baseLoop;
        }
        record[value] = colId;
      }
    }
  }

  if (!result) return false;

  reversedLoop: for (let rowId = 0; rowId < reversed.length; rowId++) {
    const record: Record<string, number> = {};
    const row = reversed[rowId];

    for (let colId = 0; colId < row.length; colId++) {
      const value = row[colId];
      if (value !== '.') {
        if (record[value] !== undefined) {
          result = false;
          break reversedLoop;
        }
        record[value] = colId;
      }
    }
  }

  if (!result) return false;

  const grouped = Object.values(groupedRecord);
  groupedLoop: for (let rowId = 0; rowId < grouped.length; rowId++) {
    const record: Record<string, number> = {};
    const row = grouped[rowId];

    for (let colId = 0; colId < row.length; colId++) {
      const value = row[colId];
      if (value !== '.') {
        if (record[value] !== undefined) {
          result = false;
          break groupedLoop;
        }
        record[value] = colId;
      }
    }
  }

  return result;
}
