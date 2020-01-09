function test () {
    console.log('chicken');
    $('.contentDisplay').html(`
        <section>
        <h2>Welcome to the Bicycle Quiz!</h2>
        <p>Think you know everything about bicycles?</p>
    </section>
    `)
}

function startQuizClick () {
    $('.startQuiz').on('click', function(event) {
        event.preventDefault();
        $('.contentDisplay').html(displayNextQuestion());
        $('')
    });
}

function displayNextQuestion () {
    $('.contentDisplay').html(`<p>Hello</p>`);
}

function callBack () {
    test ();
    startQuizClick();
}

callBack();

/*need to prevent default behavor for submit button*/