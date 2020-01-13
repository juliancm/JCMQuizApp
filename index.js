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


let score = 0;
let right = 0;

function test () {
    $('.contentDisplay').html(`
        <section>
            <h2>Welcome to the Bicycle Quiz!</h2>
            <p>Think you know everything about bicycles?</p>
        </section>
        <img alt="cyclists climbing a hill" src="images/start.jpg"
         width="200" height="200">
        <br>
        <form>
            <button type="startQuiz" class="startQuiz">Start Quiz</button>
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
        <fieldset class="answerDisplay">
            <legend>${STORE[score].question}</legend>

            <label>Choose one option: </label>

            <br>
    `);
    createOptionList();
    submitAnswerClick();
    $('.alertArea').html(displayScore());
}

function createOptionList() {
    for (i = 0; i<STORE[score].options.length; i++) {
        $('.contentDisplay').append(`
            <input type="radio"
                   name="possibleAnswerTextOrIdForJs"
                   id="referstolabel"
                   value="${STORE[score].options[i]}"
                   required
            />
            <label for="referstolabel">${STORE[score].options[i]}</label>
            <br>
        `);
    }
    addSubmitButton();
}

function addSubmitButton(){
    $('.contentDisplay').append(`
                <button type="submit" class="submitAnswer"> Submit</button>
            </fieldset>
        </form>
    `);
}

function displayScore() {
    $('.alertArea').html(`
        <p>Question number ${score+1}/${STORE.length} - You have ${right} correct!</p>
    `);
}

function updateScore() {
    score++;
}

function submitAnswerClick () {
    $('.submitAnswer').on('click', function(event) {
        event.preventDefault();
        if ($('input[name=possibleAnswerTextOrIdForJs]:checked').val() === undefined) {
            alert('Please choose an answer');
        } else {
            verifyAnswer();
            $('.alertArea').html(displayScore())
            updateScore();
            nextQuestionClick();
        }
    })
}

function verifyAnswer () {
    if ($('input[name=possibleAnswerTextOrIdForJs]:checked').val() === STORE[score].answer) {
        $('.contentDisplay').html(`
             <p>Good Job "${STORE[score].answer}" is right!</p>
             <img alt="${STORE[score].answer}" src="images/${score+1}.jpg" width="200" height="200">
             <form>
                 <button type="nextQuestion" class="nextQuestion">Next Question</button>
             </form>
        `);
        right++;
    } else {
        $('.contentDisplay').html(`
            <p>Nope, it's actually "${STORE[score].answer}"</p>
            <img alt="${STORE[score].answer}" src="images/${score+1}.jpg" width="200" height="200">
            <form>
                 <button type="nextQuestion" class="nextQuestion">Next Question</button>
            </form>
        `);
    }
}

function displayRestart() {
    $('.contentDisplay').html(`
        <section>
            <h2>You got ${right}/${STORE.length} correct!</h2>
            <p>Want to try again?</p>
            <img alt="cyclists on top of a hill" src="images/end.jpg"
         width="200" height="200">
            <form>
                <button type="restartQuiz" class="restartQuiz">Restart Quiz</button>
            </form>
        </section>`
    );
    restartQuizClick();
}

function restartQuizClick(){
    $('.restartQuiz').on('click', function(event) {
        event.preventDefault();
        score = 0;
        right = 0;
        test();
    });
}

function nextQuestionClick () {
    $('.nextQuestion').on('click', function(event) {
        event.preventDefault();
        if (score < STORE.length) {
            $('.contentDisplay').html(displayNextQuestion());
        }
        else {
            displayRestart();
        };
    });
}

function callBack () {
    test ();
}

callBack();