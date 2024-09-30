function sumAll(message: any, ...arr: number[]) {
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll("start counting", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum); // 55