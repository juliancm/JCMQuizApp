function test () {
    console.log('chicken');
    $('.contentDisplay').html(`
    <section>
        <h2>Welcome to the Bicycle Quiz!</h2>
        <p>Think you know everything about bicycles?</p>
    </section>
    `);
    $('.alertArea').html(`
    <form>
        <button type="startQuiz" class="startQuiz">Start Quiz</button>
    </form>
    `);
}

function startQuizClick () {
    $('.startQuiz').on('click', function(event) {
        event.preventDefault();
        $('.contentDisplay').html(displayNextQuestion());
        $('.alertArea').html(`
        
        `)
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

                   value="thisCorrespondsToIndividualElement"

                   required

            />
            <!--- the name attribute needs to match all others in fieldset --->
            <label for="referstoID">Answer text 1 goes here</label>

            <br>

            <input type="radio"

                   name="possibleAnswerTextOrIdForJs"

                   id="referstoID2"

                   value="thisCorrespondsToIndividualElement"

                   required
            />
            <!-- name gets sent back for the input block </> --->

            <label for="referstoID2">Answer text 2 goes here</label>

            <br>

            <input type="radio"

                   name="possibleAnswerTextOrIdForJs"

                   id="referstoID3"

                   value="thisCorrespondsToIndividualElement"/>

            <label for="referstoID3">Answer text 3 goes here</label>



        </fieldset>
    </form>
`);
}

function callBack () {
    test ();
    startQuizClick();
}

callBack();

/*need to prevent default behavor for submit button*/