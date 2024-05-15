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


function task3() {
    const age = '22';

    let lastCharacter = age.toString().split("").pop();
  
    switch (lastCharacter) {    
        case '1':
            console.log('Вам ' + age + ' рік');
            break;
        case '2':
        case '3':
        case '4':
            console.log('Вам ' + age + ' роки');
            break;
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            console.log('Вам ' + age +  ' років');
            break;
        default:
            console.log('Помилка. Введіть свій вік правильно');
    }
}


console.log(task1());
console.log(task2());
console.log(task3());