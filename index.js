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


function task1bettervariant() {
    const inputNumber = 15;
    let result;
    
    switch (true) {
        case inputNumber % 3 === 0 && inputNumber % 5 === 0:
            result = 'FizzBuzz';
            break;
        case inputNumber % 3 === 0:
            result = 'Fizz';
            break;
        case inputNumber % 5 === 0:
            result = 'Buzz';
            break;
        default:
            result = inputNumber.toString();
    }
    return result;
}


function task2() {
    const year = 2024;
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? (year + ' є високосним') : (year + ' не є високосним');
}

console.log(task1());
console.log(task2());