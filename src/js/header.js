// function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Четное";
//     } else {
//         return "Нечетное";
//     }
// }
// console.log(isEvenOrOdd(3)); // Нечетное
// console.log(isEvenOrOdd(4)); // Четное

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
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1; // Базовый случай
//     }

//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
// }
// console.log(factorial(5)); // 120
// console.log(factorial(0));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('hello'));

// function findShortestWordLength(str) {
//     return Math.min(...str.split(" ").map(w => w.length));
// }
// function findShortestWordLength(str) {
//   const words = str.split(' '); // Разделяем строку на массив слов
//   let shortest = words[0].length; // Инициализируем переменную длиной первого слова

//   // Начинаем цикл с 1, так как первое слово уже учтено
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < shortest) {
//       shortest = words[i].length; // Если текущее слово короче, обновляем минимальную длину
//     }
//   }

//   return shortest; // Возвращаем длину самого короткого слова
// }
// console.log(findShortestWordLength('hello me words'));

// function getRectangleArea(length, width) {
//   return length * width;
// }
// function getAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// function findMax(arr) {
//   return Math.max(...arr);
// }

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([1, 4, 54, 58, 34, 67]));
// function power(base, exponent) {
//   return base ** exponent;
// }
// console.log(max(2, 3));

// function strin(arr) {
//   return arr.join(',');
// }
// console.log(strin(['hello', 'me', 'words']));
// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       // Проверяем, является ли символ гласной
//       count++; // Увеличиваем счётчик, если гласная найдена
//     }
//   }

//   return count;
// }
// console.log(countVowels('Hello World'));

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function countGreaterThan(arr, threshold) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      count++;
    }
  }
  return count;
}
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargest([2, 34, 56, 76, 34, 23, 45, 67, 23]));
