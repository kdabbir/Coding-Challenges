
export default function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i += 1) {
    result *= i +1;
  }

  return result;
}
