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
    console.log('\n1. calc\n2. progression\n3. even\n4. gcd\n5. prime');
    r1.question('Твой выбор: ', (choice) => {
        if (choice === '1') calc(name);
        else if (choice === '2') progression(name);
        else if (choice === '3') even(name);
        else if (choice === '4') gcd(name);
        else if (choice === '5') prime(name);
        else {console.log('Попробуй еще раз'); menu(name); }
    });
};


// калькулятор

const calc = (name) => {
    const questions = [
        { text: '2 + 2', answer: 4 },
        { text: '2 + 3', answer: 5 },
        { text: '2 + 4', answer: 6 }
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
    const questions = [
        { text: '6', answer: 'да'},
        { text: '5', answer: 'нет'},
        { text: '8', answer: 'да'}
    ];

    let currentQuestion = 0;

    const askNext = () => {
        if (currentQuestion >= 3) {
            console.log(`Поздравляю, ${name}!`);
            menu(name);
            return;
        }
        
        console.log(`Вопрос: Это четное число? да/нет ${questions[currentQuestion].text}`);
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



//Определение простого числа.




// запуск

start();