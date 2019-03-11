
//game of thrones trivia


    // jQuery methods go here...
  
// function to call the jquery to on load window 
//var in the game such as: options to choose from, questions that need asked, answers to those questions var trivia

// object questions related to thrones 
//create an opject that has options: 


//I want the game to load on start with a start button that begins the game of thrones triva. The questions will be displayed on after start button is clicked along with a global timer that will count down for the total length of the game. that timer will be 5 minutes long.  correct/incorrect answers will be logged but hidden until the question is over. once all questions have been answered display total score. if user gets a 50% say something witty etc for percentages up to 100 % if user runs out of time show white walker gif/ some dying gif from thrones and say you lose the game of thrones and end game/ restart

//create var trivia with a bunch of different properties that I can call a bunch.

$(document).ready(function(){

    var timeRemaining = '';
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var shuffledQuestions = [];
    var questions = [
        {
            question: 'What color is the sky?',
            possibleAnswers: [
                'Green',
                'Blue',
                'Black',
                'Yellow'
            ],
            correctAnswer: 'Blue'
        },
        {
            question: 'What is Master Chief\'s spartan number?',
            possibleAnswers: [
                '123',
                '007',
                '117',
                '101'
            ],
            correctAnswer: '117'
        },
        {
            question: 'What is the AI called in Halo?',
            possibleAnswers: [
                'Orie',
                'Jess',
                'Schmidt',
                'Cortana'
            ],
            correctAnswer: 'Cortana'
        },
        {
            question: 'How old were Spartans when they were abducted as children?',
            possibleAnswers: [
                '6',
                '5',
                '3',
                '4'        
            ],
            correctAnswer: '4'
        } 
    ]
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        //if there are elements then we need to shuffle them.
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }
    
    $('#display-array').click(function(){
        shuffledQuestions = shuffle(questions);
        document.getElementById('array').innerHTML = JSON.stringify(shuffledQuestions);
    });

    //create a timer
   
    


    //create radio buttons in the javascript and link them to the html
    for (i = 0; i < 4; i++) {
        $('<input type="radio" name="radiobtn" >Yourtext'+i+'</input>').appendTo('#container');
    }


    //create a start game function
    $('#startGame').on("click", startGame());

    function startGame(){
        shuffledQuestions = shuffle(questions);

        setTimeout(timeUp, 60000 * 5);

        function timeup(){
    
            $('#time-left').append('times up');
    
        };

    }

    //create a reset function


    //create a total score function










  
  });