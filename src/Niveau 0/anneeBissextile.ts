import * as readlineSync from 'readline-sync';

function is_leap(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
let yearInput: number = Number(readlineSync.question("Entrez a:"))
const resultLeapYear = is_leap(yearInput);
console.log(resultLeapYear ? `${yearInput} est une année bissextile` : `${yearInput} non année bissextile`);