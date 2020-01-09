let score = 0;

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
            <legend>Quiz Intro/Questions goes here/Right or Wrong Answer notification goes here</legend>

            <label>Choose one option: </label>

            <br>

            <input type="radio"

                   name="possibleAnswerTextOrIdForJs"

                   id="referstoID"

                   value="option1"

                   required

            />
            <!--- the name attribute needs to match all others in fieldset --->
            <label for="referstoID">Answer text 1 goes here</label>

            <br>

            <input type="radio"

                   name="possibleAnswerTextOrIdForJs"

                   id="referstoID2"

                   value="option2"

                   required
            />
            <!-- name gets sent back for the input block </> --->

            <label for="referstoID2">Answer text 2 goes here</label>

            <br>

            <input type="radio"

                   name="possibleAnswerTextOrIdForJs"

                   id="referstoID3"

                   value="option3"
                   
                   required
            />

            <label for="referstoID3">Answer text 3 goes here</label>

            <br>

            <button type="submit" class="submitAnswer"> Submit</button>

        </fieldset>
    </form>
`);
    submitAnswerClick();
}

function validateSubmission () {
    if ($('input[name=possibleAnswerTextOrIdForJs]:checked').val()===undefined) {
        console.log('choose something');
    }
    else {
        submitAnswerClick();
    }
}

function displayScore() {
    $('.alertArea').html(`
    <p>Hello Errybody This is Your Score</p>
    `);
}

function updateScore() {
    score++;
    console.log(score);
}

function submitAnswerClick () {
    $('.submitAnswer').on('click', function(event) {
        event.preventDefault();
        if ($('input[name=possibleAnswerTextOrIdForJs]:checked').val()===undefined) {
            console.log('choose something');
        }
        else {
        console.log($('input[name=possibleAnswerTextOrIdForJs]:checked').val());
        $('.contentDisplay').html(displayFeedback());
        $('.alertArea').html(displayScore());
        updateScore();});
}

function displayFeedback() {
    $('.contentDisplay').html(`
    <p>Good Job</p>
    <form>
        <button type="nextQuestion" class="nextQuestion">Next Question</button>
    </form>
    `);
    nextQuestionClick();
}

function nextQuestionClick () {
    $('.nextQuestion').on('click', function(event) {
        event.preventDefault();
        $('.contentDisplay').html(displayNextQuestion());
    });
}

function callBack () {
    test ();
    startQuizClick();
}

callBack();

/*need to prevent default behavor for submit button*/