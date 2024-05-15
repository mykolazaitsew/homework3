function task1(inputNumber) {
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

function task2(year) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? (year + ' є високосним') : (year + ' не є високосним');
}


function task1TemplateString(inputNumber) {
    return (inputNumber % 3 === 0 && inputNumber % 5 === 0) ? 'FizzBuzz' :
           (inputNumber % 3 === 0) ? 'Fizz' :
           (inputNumber % 5 === 0) ? 'Buzz' :
           'подане число не ділиться';
}


function task2TemplateString(year) {
    return `${year} ${(year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 'є високосним' : 'не є високосним'}`;
}


function task3(age) {
    let lastCharacter = age.toString().split("").pop();
  
    switch (lastCharacter) {    
        case '1':
            return 'Вам ' + age + ' рік';
        case '2':
        case '3':
        case '4':
            return 'Вам ' + age + ' роки';
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return 'Вам ' + age +  ' років';
        default:
            return 'Помилка. Введіть свій вік правильно';
    }
}


console.log(task1(15));
console.log(task2(2024));
console.log(task3(22));
console.log(task1TemplateString(15));
console.log(task2TemplateString(2024));
