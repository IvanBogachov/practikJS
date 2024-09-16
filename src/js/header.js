function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Четное";
    } else {
        return "Нечетное";
    }
}
console.log(isEvenOrOdd(3)); // Нечетное
console.log(isEvenOrOdd(4)); // Четное

// function maxOfTwoNumbers(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// function maxOfTwoNumbers(a, b) {
//   return a > b ? a : b;
// }
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Базовый случай
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120
console.log(factorial(0));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); 

// function findShortestWordLength(str) {
//     return Math.min(...str.split(" ").map(w => w.length));
// }
function findShortestWordLength(str) {
  const words = str.split(' '); // Разделяем строку на массив слов
  let shortest = words[0].length; // Инициализируем переменную длиной первого слова

  // Начинаем цикл с 1, так как первое слово уже учтено
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length; // Если текущее слово короче, обновляем минимальную длину
    }
  }

  return shortest; // Возвращаем длину самого короткого слова
}
console.log(findShortestWordLength('hello me words'));