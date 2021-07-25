// variable containing the number of questions in the quiz and the question number
var quizLength = 10;
var questionNumber = 1;

// variable to store a session key for the timer
var timeLeft = 'timeLeft';

// variable to hold the time left in the quiz
var elapsedTime;

// variable to hold the score and highscore
var score = 0;
var highscore = 0;

// variable to hold the timer
var timerEl = document.querySelector("#timer");

// variable to display feedback
var feedbackEl = document.querySelector("#feedback");

// variable to change the look of the main section and header at the end of the quiz
var mainEl = document.getElementById("#main");

// variables that contain the elements of each part of the quiz
var titleEl = document.querySelector("#title");
var questionEl = document.querySelector("#question");
var optionOneEl = document.querySelector("#option-one");
var optionTwoEl = document.querySelector("#option-two");
var optionThreeEl = document.querySelector("#option-three");
var optionFourEl = document.querySelector("#option-four");

// variables that allow to check which answer is chosen
var choiceOneEl = document.querySelector("#choice-one");
var choiceTwoEl = document.querySelector("#choice-two");
var choiceThreeEl = document.querySelector("#choice-three");
var choiceFourEl = document.querySelector("#choice-four");

// variable to target the submit button
var submitEl = document.querySelector("#submit");

// array containing all of the questions and possible answers
var questions = [
    {
        q:"What is JavaScript?",
        a:"A coding language with many functions.",
        o1:"A script made of java!",
        o2:"A fun coffee name.",
        o3:"Something to do for fun!",
        title:"",
        id: 0,
    },

    {
        q:"How do we use JavaScript in HTML",
        a:"<script>",
        o1:"<JavaScript>",
        o2:"<js>",
        o3:"<scripting>",
        title:"",
        id: 1,
    },

    {
        q:"How Do you comment on a single line",
        a:"//",
        o1:"<!-- --1>",
        o2:"/* */",
        o3:"''",
        title:"",
        id: 2,
    },

    {
        q:"How do you write a array?",
        a:"[]",
        o1:"{}",
        o2:"()",
        o3:"||",
        title:"",
        id: 3,
    },

    {
        q:"Which is the correct way to create a function?",
        a:"function = yourFunction()",
        o1:"function = yourFunction[]",
        o2:"function = yourFunction||",
        o3:"function = yourFunction{}",
        title:"",
        id: 4,
    },

    {
        q:"How do you declare a variable",
        a:"var = variableName",
        o1:"v = variableName",
        o2:"variable = variableName",
        o3:"var = 'variableName'",
        title:"",
        id: 5,
    },

    {
        q:"Is JavaScript case-sensitive",
        a:"Yes",
        o1:"No",
        o2:"",
        o3:"",
        title:"",
        id: 6,
    },

    {
        q:"Which Operator is used to assign a value to a variable",
        a:"=",
        o1:"/",
        o2:"+",
        o3:"==",
        title:"",
        id: 7,
    },

    {
        q:"How does a for loop start?",
        a:"for (i=0; <=5; i++)",
        o1:"for (i <= 5; i++)",
        o2:"for (i = 0; i <= 5)",
        o3:"for i = 1 to 5",
        title:"",
        id: 8,
    },

    {
        q:"How do you create a browser alert messgage.",
        a:"window.alert('Message')",
        o1:"winows.message('Message)'",
        o2:"window.alert['Message']",
        o3:"window.alert{Message}",
        title:"",
        id: 9,
    },

    {
        q:"How Do you add a comment to several lines of code?",
        a:"",
        o1:"",
        o2:"",
        o3:"",
        title:"",
        id: 10,
    },

]
// variable to pick a random question from the array
var questionAsked = questions[Math.floor(Math.random() * questions.length)];

// function to choose a question that has not been asked
var generateQuestion = function() {
    // retrieves the quizId array from localStorage
    var existingQuizId = JSON.parse(localStorage.getItem("quizId"));
    
    // checks to see if the array in localStorage exists and if not creates it
    if (existingQuizId == null) {
        existingQuizId = [];
        localStorage.setItem("quizId", existingQuizId);
    };

    // checks to see if the question has been asked before and if it has generates another one
    // debugger;
    while (existingQuizId.includes(questionAsked.id)) {
        if (existingQuizId.includes(questionAsked.id)) {
            questionAsked = questions[Math.floor(Math.random() * questions.length)];
        };
    };
        

    // appends the id of the current question to and pushes it to localStorage
    quizId = questionAsked.id
    existingQuizId.push(quizId);
    localStorage.setItem("quizId", JSON.stringify(existingQuizId));

    // generates the options based on the question that is asked
    generateOptions(questionAsked);
};

// a function to generate each questions with variety in the options
var generateOptions = function (questionOptions) {
    // variables to store random choices from the chosen question
    var optionChoice1 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice2 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice3 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice4 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];

    // adding while loops and if statements to ensure there are no duplicate answers
    while (optionChoice1 === optionChoice2 || optionChoice1 === optionChoice3 || optionChoice1 === optionChoice4) {
        if (optionChoice1 === optionChoice2 || optionChoice1 === optionChoice3 || optionChoice1 === optionChoice4) {
            optionChoice1 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice2 === optionChoice1 || optionChoice2 === optionChoice3 || optionChoice2 === optionChoice3) {
        if (optionChoice2 === optionChoice1 || optionChoice2 === optionChoice3 || optionChoice2 === optionChoice3) {
            optionChoice2 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice3 === optionChoice1 || optionChoice3 === optionChoice2 || optionChoice3 === optionChoice4) {
        if (optionChoice3 === optionChoice1 || optionChoice3 === optionChoice2 || optionChoice3 === optionChoice4) {
            optionChoice3 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice4 === optionChoice1 || optionChoice4 === optionChoice2 || optionChoice4 === optionChoice3) {
        if (optionChoice4 === optionChoice1 || optionChoice4 === optionChoice2 || optionChoice4 === optionChoice3) {
            optionChoice4 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    // setting the question to be displayed and the corresponding title
    titleEl.textContent = questionOptions.title;
    questionEl.textContent = questionOptions.q;

    // adding random choices to each option
    optionOneEl.textContent = optionChoice1;
    optionTwoEl.textContent = optionChoice2;
    optionThreeEl.textContent = optionChoice3;
    optionFourEl.textContent = optionChoice4;
};

// function to add to and set score
var increaseScore = function() {
    score = localStorage.getItem("score");
    score++;
    localStorage.setItem("score", score);
};

// function to reset the quiz numbers
var resetQuiz = function() {
    questionNumber = 0;
    localStorage.setItem("questionNumber", questionNumber);
    existingQuizId = [];
    localStorage.setItem("quizId", JSON.stringify(existingQuizId));
    score = 0;
    localStorage.setItem("score", score);
    feedbackEl.textContent = "";
    localStorage.setItem("feedback", feedbackEl.textContent);
    window.sessionStorage.removeItem(timeLeft);
    main();
};

// this timer creates persistance through sessionStorage
var timer = function(i, callback) {  
    //callback = callback || function(){};
    timer = setInterval(function() {
        minutes = parseInt(i / 60, 10);
        seconds = parseInt(i % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerEl.innerHTML = "Time Remaining: " + minutes + ":" + seconds;
        
        if ((i--) > 0) {
            window.sessionStorage.setItem(timeLeft, i);
        } else {
            window.sessionStorage.removeItem(timeLeft);
            clearInterval(timer);
            callback();
            }
    }, 1000);
}
// main function that runs the quiz
var main = function() {
    // gets the question number from local storage
    questionNumber = localStorage.getItem("questionNumber");
    score = localStorage.getItem("score");

    // this will check for the time left and persist the quiz timer through a browser refresh
    window.onload = function() {
        // you can change the length of the timer by changing the 900. The number must be in an amount of seconds.
        var countDownTime = window.sessionStorage.getItem(timeLeft) || 900;
        timer(countDownTime, function() {
            timerEl.textContent = countDownTime;
        });
        elapsedTime = countDownTime;
    };


    // checks to see if the questionNumber variable is less than the quiz length
    if (questionNumber < quizLength || elapsedTime > 0) {
        // displays the feedback from the previous question
        var feedback = localStorage.getItem("feedback");
        feedbackEl.textContent = feedback;

        // generates the question that is displayed on screen
        generateQuestion();

        submitEl.addEventListener("click", function(event) {

            // checks to see which option has been chosen and compares it to the answer of the question
            if (choiceOneEl.checked === true && optionOneEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "Correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else if (choiceTwoEl.checked === true && optionTwoEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "Correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else if (choiceThreeEl.checked === true && optionThreeEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "You are correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else if (choiceFourEl.checked === true && optionFourEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "Correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else {
                feedbackEl.textContent = "Wrong!"
                localStorage.setItem("feedback", feedbackEl.textContent);
            };

            console.log(score);

            // increments and sets the questionNumber variable to localStorage
            questionNumber = localStorage.getItem("questionNumber");
            questionNumber++;
            localStorage.setItem("questionNumber", questionNumber);

        });
    // after the number of questions reaches the quiz length it asks if the player would like to play again
    } else {
        // retrieves the score and highscore
        score = localStorage.getItem("score");

        if (score == null) {
            score = 0;
        };

        highscore = localStorage.getItem("highscore");

        if (highscore == null) {
            highscore = 0;
        }

        var playerName;

        // changes the html of the main element to display different information
        mainEl.innerHTML = "<div><h2 id='congrats'>Congratulations</h2></div><div><h3 id='score'></h3></div><div><h3 id='highscore'></h3></div><button type=submit id='play-again'>Play Again?</button>";

        // variable to select the new elements in the html
        var highscoreEl = document.querySelector("#highscore");
        var scoreEl = document.querySelector("#score");
        var playAgainEl = document.querySelector("#play-again");        

        // if the current score is higher than the highscore it changes the highscore to match the score
        if (score > highscore) {
            highscore = score;
            localStorage.setItem("highscore", highscore);
            playerName = prompt("What is your name so that you may be stored in the archives?");

            if (playerName == "") {
                playerName = "Somebody";
            };

            localStorage.setItem("playerName", playerName);
        };

        // this will retrieve the name of the player with the current highscore. If none exists and you scored 0 on the quiz it defaults to nobody
        playerName = localStorage.getItem("playerName");

        if (playerName == null) {
            playerName = "Nobody";
        }

        // displays the score and highscore of previous quizzes
        scoreEl.textContent = "You got " + score + " out of " + quizLength + " correct!";
        highscoreEl.textContent = playerName + " holds the highscore of " + highscore + " out of " + quizLength + "!";

        // places a listener on the play again button which resets the quiz
        playAgainEl.addEventListener("click", function() {
            resetQuiz();
            window.location.href = "./index.html";
        });
    };
};

// runs the quiz
main();