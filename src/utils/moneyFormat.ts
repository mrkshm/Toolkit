export const moneyFormat = (num: number) => {
  if (num % 1 === 0) return num;
  else return num.toFixed(2).replace(".", ",");
};
