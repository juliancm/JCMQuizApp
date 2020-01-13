const STORE = [
    {
        question: 'who',
        options: [
            'chicken', 'taco', 'beef'
        ],
        answer: 'chicken'
        /*obj with question, answers (in a string), and correct choice*/
    },
    {
        question: 'what',
        options: [
            'sauce', 'juice', 'monkey'
        ],
        answer: 'juice'
        /*each question is it's own object in a string*/
    }
];


let score = 0;
let right = 0;

function test () {
    console.log('chicken');
    $('.contentDisplay').html(`
    <section>
        <h2>Welcome to the Bicycle Quiz!</h2>
        <p>Think you know everything about bicycles?</p>
    </section>
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
        $('.contentDisplay').append(
        `<input type="radio"

                   name="possibleAnswerTextOrIdForJs"

                   id="referstoID2"

                   value="${STORE[score].options[i]}"

                   required
            />
            <!-- name gets sent back for the input block </> --->

            <label for="referstoID2">${STORE[score].options[i]}</label>

            <br>
        `);}
    addSubmitButton();
}

function addSubmitButton(){

    $('.contentDisplay').append(`<button type="submit" class="submitAnswer"> Submit</button>

        </fieldset>
        </form>`);
}

function displayScore() {
    $('.alertArea').html(`
    <p>you are on question number ${score+1}/${STORE.length} you have ${right} correct!</p>
    `);
}

function updateScore() {
    score++;
    console.log(score);
}

function submitAnswerClick () {
    $('.submitAnswer').on('click', function(event) {
        event.preventDefault();
        if ($('input[name=possibleAnswerTextOrIdForJs]:checked').val() === undefined) {
            $('.contentDisplay').append('<p>choose something!</p>');
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
    <p>Good Job</p>
    <form>
        <button type="nextQuestion" class="nextQuestion">Next Question</button>
    </form>
    `);
        right++;
    } else {
        $('.contentDisplay').html(`
    <p>Nope, it's actually ${STORE[score].answer}</p>
    <form>
        <button type="nextQuestion" class="nextQuestion">Next Question</button>
    </form>
    `);
    }
}

function displayRestart() {
    $('.contentDisplay').html(
        `    <section>
        <h2>Welcome to the Bicycle Quiz!</h2>
        <p>Good Job, want to try again?</p>
        <form>
            <button type="restartQuiz" class="restartQuiz">Restart Quiz</button>
        </form>
    </section>`
    );
    restartQuizClick();
}

function restartQuizClick (){
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