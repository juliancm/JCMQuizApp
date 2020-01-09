function test () {
    console.log('chicken');
}


function startQuizClick () {
    $('.submitAnswer').on('click', function(event) {
        console.log('start chicken');
    });
}

function callBack () {
    test ();
    startQuizClick();
}

callBack();

/*need to prevent default behavor for submit button*/