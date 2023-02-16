const encode = (num: number) => {
  return Number((num * 100).toFixed(0));
};

const decode = (num: number) => {
  return Number((num / 100).toFixed(2));
};

export const moneyMath = (
  arg: "add" | "subtract" | "mutliply" | "divide",
  num1: number,
  num2: number
) => {
  switch (arg) {
    case "add":
      return decode(encode(num1) + encode(num2));
    case "subtract":
      return decode(encode(num1) - encode(num2));
    case "mutliply":
      return decode(encode(num1) * encode(num2));
    case "divide":
      return decode(encode(num1) / encode(num2));
    default:
      return "no valid argument";
  }
};
