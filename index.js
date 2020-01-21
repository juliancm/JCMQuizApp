const STORE = [
    {
        question: 'Bicycles come in many forms. What are some common ones used today?',
        options: [
            'Mountain, Road, Recumbent.', 'Penny Farthing, Road, BMX.', 'Mountain, Road, BMX.', 'Recumbent, BMX, Mountain.'
        ],
        answer: 'Mountain, Road, BMX.'
    },
    {
        question: 'Oil and grease are used differently. What are the uses for each?',
        options: [
            'Oil is for sautéeing; grease is for combustion.', 'Oil is for sealed components; grease is for exposed components.', 'Oil is for exposed components; grease is for sealed components.','Trick question; oil and grease are interchangeable.'
        ],
        answer: 'Oil is for exposed components; grease is for sealed components.'
    },
    {
        question: 'In competitive cycling there are three grand tours. What are they?',
        options: [
            'Tour de France, Vuelta a España, Paris–Roubaix.', 'Vuelta a España, Critérium du Dauphiné, Giro d\'Italia.', 'Tour de France, Paris–Roubaix, Critérium du Dauphiné.','Tour de France, Vuelta a España, Giro d\'Italia.'
        ],
        answer: 'Tour de France, Vuelta a España, Giro d\'Italia.'
    },
    {
        question: 'Who won (general classification) the 2019 Tour de France?',
        options: [
            'Egan Bernal', 'Peter Sagan', 'Gareth Bale','Julian Alaphilippe'
        ],
        answer: 'Egan Bernal'
    },
    {
        question: 'The act of lowering wind resistance by riding in formation is called?',
        options: [
            'Drifting', 'Slipstreaming', 'Drafting','Migration'
        ],
        answer: 'Drafting'
    },
    {
        question: 'What kind of venue is used for indoor cycling races?',
        options: [
            'Velodrome', 'Criterium', 'Peloton','Combini'
        ],
        answer: 'Velodrome'
    },
    {
        question: 'What are the two most common valve types?',
        options: [
            'Presta, Phillips', 'Schneider, Phillips', 'Prego, Ragu','Schrader, Presta'
        ],
        answer: 'Schrader, Presta'
    },
    {
        question: 'Pee-wee Herman was famous for having what color bike?',
        options: [
            'Green', 'Red', 'Blue','Sparkle'
        ],
        answer: 'Red'
    }
];

const loggers = {
    question: 0,
    score: 0
}

let current = loggers.question;
let right = loggers.score;

function startQuiz () {
    $('.contentDisplay').html(`
        <section>
            <p class="headline">Welcome to the Bicycle Quiz!</p>
            <p>Think you know everything about bicycles?</p>
        </section>
        <img class="image" alt="cyclists climbing a hill" src="images/start.jpg">
        <form>
            <button type="button" class="startQuiz button">Start</button>
        </form>
    `);
    $('.alertArea').html(`
    <p>Good Luck!</p>
    `);
    startQuizClick();
}

function startQuizClick () {
    $('.startQuiz').on('click', function(event) {
        event.preventDefault();
        $('.contentDisplay').html(displayNextQuestion());
        $('.alertArea').html(displayScore());
    });
}

function displayNextQuestion () {
    $('.contentDisplay').html(`
        <form>
            <fieldset>
                <legend class="question">${STORE[current].question}</legend>
                <label class="option-prompt">Choose one option:</label>
    `);
    addOptionList();
    submitAnswerClick();
    $('.alertArea').html(displayScore());
}

function addOptionList() {
    for (i = 0; i<STORE[current].options.length; i++) {

        /* fieldset and legend opening and closing tags are inserted and appended in the
        * previous and following functions, respectively.*/

        $('.contentDisplay').append(`
                <div class="options">
                    <input type="radio"
                        name="optionChoice"
                        id="${i}"
                        value="${STORE[current].options[i]}"
                    />
                    <label for="${i}">${STORE[current].options[i]}</label>
                </div>
        `);
    }
    addSubmitButton();
}

function addSubmitButton(){
    $('.contentDisplay').append(`
                <button type="submit" class="submitAnswer button"> Submit</button>
            </fieldset>
        </form>
    `);
}

function displayScore() {
    $('.alertArea').html(`
        <p>Question number ${current+1}/${STORE.length} - You have ${right} correct!</p>
    `);
}

function updateScore() {
    current++;
}

function emptySubmitDialog() {
    $('.alertArea').html(`
        <p class="alert">Choose an option, please.</p>
    `);
    /* setTimeout(() => $('.alertArea').html(`
        <h2>Choose an option, man.</h2>
    `), 4000); */
    setTimeout(displayScore, 4000);
}

function submitAnswerClick () {
    $('.submitAnswer').on('click', function(event) {
        event.preventDefault();
        if ($('input[name=optionChoice]:checked').val() === undefined) {
            emptySubmitDialog();
        } else {
            verifyAnswer();
            $('.alertArea').html(displayScore())
            updateScore();
            nextQuestionClick();
        }
    })
}



function verifyAnswer () {
    if ($('input[name=optionChoice]:checked').val() === STORE[current].answer) {
        $('.contentDisplay').html(`
             <p class="headline">Good Job "${STORE[current].answer}" is right!</p>
             <img class="image" alt="${STORE[current].answer}" src="images/${current+1}.jpg" width="200" height="200">
             <form>
                 <button type="submit" class="nextQuestion button">Next</button>
             </form>
        `);
        right++;
    } else {
        $('.contentDisplay').html(`
            <p class="headline">Nope, it's actually "${STORE[current].answer}"</p>
            <img class="image" alt="${STORE[current].answer}" src="images/${current+1}.jpg">
            <form>
                 <button type="submit" class="nextQuestion button">Next</button>
            </form>
        `);
    }
}

function displayRestart() {
    $('.contentDisplay').html(`
        <section>
            <p class="headline">You got ${right}/${STORE.length} correct!</p>
            <p>Want to try again?</p>
            <img class="image" alt="cyclists on top of a hill" src="images/end.jpg">
            <form>
                <button type="reset" class="restartQuiz button">Restart</button>
            </form>
        </section>`
    );
    restartQuizClick();
}

function restartQuizClick(){
    $('.restartQuiz').on('click', function(event) {
        event.preventDefault();
        current = 0;
        right = 0;
        startQuiz();
    });
}

function nextQuestionClick () {
    $('.nextQuestion').on('click', function(event) {
        event.preventDefault();
        if (current < STORE.length) {
            $('.contentDisplay').html(displayNextQuestion());
        }
        else {
            displayRestart();
        };
    });
}

startQuiz();