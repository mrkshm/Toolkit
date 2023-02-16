export default function kFormatter(num: number) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "k";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "m";
  } else if (num < 1000) {
    return num;
  }
}
