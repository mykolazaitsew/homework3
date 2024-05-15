function task1() {
    const inputNumber = 7;
    if (inputNumber % 3 === 0 && inputNumber % 5 ===0) {
        return 'FizzBuzz';
    } else if (inputNumber % 3 === 0 ) {
        return 'Fizz';
    } else if (inputNumber % 5 === 0) {
        return 'Buzz';
    } else {
        return 'подане число не ділиться';
    }
}
console.log(task1());