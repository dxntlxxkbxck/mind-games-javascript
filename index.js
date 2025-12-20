// знакомство
const readline = require('readline'); // колхозим по максимуму

const r1 = readline.createInterface({
    input: process.stdin, // ввод
    output: process.stdout // вывод
});

// хеллоу

const start = () => {
    console.log('Привет, это игры разума!');
    r1.question('Ваше имя? ', (name) => {
        console.log(`Привет, ${name}!`);
        menu(name);
    });
};

// меню

const menu = (name) => {
    console.log('\nИГРЫ РАЗУМА');
    console.log('1. calc - Реши примеры: 2+2=?');
    console.log('2. progression - Найди пропуск: 2 .. 4 6 8');
    console.log('3. even - Чётное? 6 (да/нет)');
    console.log('4. gcd - НОД чисел: 30 25=?');
    console.log('5. prime - Простое? 7 (да/нет)');
    console.log('exit - Выход');
    r1.question('Твой выбор: ', (choice) => {
        if (choice === '1') calc(name);
        else if (choice === '2') progression(name);
        else if (choice === '3') even(name);
        else if (choice === '4') gcd(name);
        else if (choice === '5') prime(name);
        else if (choice.toLowerCase() === 'exit') {
            console.log('Пока, ' + name + '!');
            r1.close();
        }
        else { console.log('❌ Неверный выбор!'); menu(name); }
    });
};


// калькулятор

const calc = (name) => {
    console.log('Калькулятор');
    console.log('Реши арифметические примеры');
    const questions = [
        {text: '2 + 2', answer: 4 },
        {text: '2 + 3', answer: 5 },
        {text: '2 + 4', answer: 6 }
    ];
    
    let currentQuestion = 0;
    
    const askNext = () => {
        if (currentQuestion >= 3) {
            console.log(`Поздравляю, ${name}!`);
            menu(name);
            return;
        }
        
        console.log(`Вопрос: ${questions[currentQuestion].text}`);
        r1.question('Ответ: ', (answer) => {
            if (parseInt(answer) === questions[currentQuestion].answer) {
                console.log('Верно!');
                currentQuestion++;
                askNext();
            } else {
                console.log(`'${answer}' неправильно!`);
                menu(name);
            }
        });
    };
    
    askNext();
};


// прогрессия
const progression = (name) => {
    console.log('Прогрессия');
    console.log('Найди пропущенное число в последовательности');
    const questions = [
        {text: '2 .. 6 8 10', answer: 4},
        {text: '10 11 .. 13 14', answer: 12},
        {text: '200 500 800 .. 1400', answer: 1100},
    ];

    let currentQuestion = 0;

    const askNext = () => {
        if (currentQuestion >= 3) {
            console.log(`Поздравляю, ${name}!`);
            menu(name);
            return;
        }

        console.log(`Вопрос: ${questions[currentQuestion].text}`);
        r1.question('Ответ: ', (answer) => {
            if (parseInt(answer) === questions[currentQuestion].answer) {
                console.log('Верно!');
                currentQuestion++;
                askNext();
            } else {
                console.log(`'${answer}' неправильно!`);
                menu(name);
            }
        });
    };

    askNext();
}

// Определение четного числа.
const even = (name) => {
    console.log('\nЧЁТНОЕ ЧИСЛО');
    console.log('Ответь да/нет - чётное ли число?');
    const questions = [
        {text: '6', answer: 'да'},
        {text: '5', answer: 'нет'},
        {text: '8', answer: 'да'}
    ];

    let currentQuestion = 0;

    const askNext = () => {
        if (currentQuestion >= 3) {
            console.log(`Поздравляю, ${name}!`);
            menu(name);
            return;
        }
        
        console.log(`Вопрос: ${questions[currentQuestion].text}`);
        r1.question('Ответ ', (answer) => {
            if (answer.trim().toLowerCase() === questions[currentQuestion].answer) {
                console.log('Верно!');
                currentQuestion++;
                askNext();
            } else {
                console.log(`'${answer}' неправильно!`);
                menu(name);
            }
        });
    };

    askNext();
};


//Определение наибольшего общего делителя.
const gcd = (name) => {
    console.log('\nНОД');
    console.log('Найди наибольший общий делитель');
    const questions = [
        {text: '30 25', answer: 5 },
        {text: '18 24', answer: 6 },
        {text: '15 10', answer: 5 }
    ];

    let currentQuestion = 0;

    const askNext = () => {
        if (currentQuestion >= 3) {
            console.log(`Поздравляю, ${name}!`);
            menu(name);
            return;
        }
        
        console.log(`Вопрос: ${questions[currentQuestion].text}`);
        r1.question('Ответ: ', (answer) => {
            if (parseInt(answer) === questions[currentQuestion].answer) {
                console.log('Верно!');
                currentQuestion++;
                askNext();
            } else {
                console.log(`'${answer}' неправильно!`);
                menu(name);
            }
        });
    };

    askNext();
};



//Определение простого числа.
const prime = (name) => {
    console.log('\nПРОСТОЕ ЧИСЛО');
    console.log('Простое число? да/нет');
    const questions = [
        {text: '7', answer: 'да' },
        {text: '4', answer: 'нет' },
        {text: '11', answer: 'да' }
    ];

    let currentQuestion = 0;

    const askNext = () => {
        if (currentQuestion >= 3) {
            console.log(`Поздравляю, ${name}!`);
            menu(name);
            return;
        }
        
        console.log(`Вопрос: ${questions[currentQuestion].text}`);
        r1.question('Ответ: ', (answer) => {
            if (answer.trim() === questions[currentQuestion].answer) {
                console.log('Верно!');
                currentQuestion++;
                askNext();
            } else {
                console.log(`'${answer}' неправильно!`);
                menu(name);
            }
        });
    };

    askNext();
};



// запуск

start();