function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Четное";
    } else {
        return "Нечетное";
    }
}
console.log(isEvenOrOdd(3)); // Нечетное
console.log(isEvenOrOdd(4)); // Четное