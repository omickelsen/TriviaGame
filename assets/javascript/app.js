
//game of thrones trivia


    // jQuery methods go here...
  
// function to call the jquery to on load window 
//var in the game such as: options to choose from, questions that need asked, answers to those questions var trivia

// object questions related to thrones 
//create an opject that has options: 


//I want the game to load on start with a start button that begins the game of thrones triva. The questions will be displayed on after start button is clicked along with a global timer that will count down for the total length of the game. that timer will be 5 minutes long.  correct/incorrect answers will be logged but hidden until the question is over. once all questions have been answered display total score. if user gets a 50% say something witty etc for percentages up to 100 % if user runs out of time show white walker gif/ some dying gif from thrones and say you lose the game of thrones and end game/ restart

//create var trivia with a bunch of different properties that I can call a bunch.
$(document).ready(function(){
    $('#submit').hide();
    $('#play-again').hide();



    
    var correctAnswers = 0;
    var incorrectAnswers = 0;
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

    function showQuestions(){
        $('#submit').show();
        var questionsDiv = document.getElementById('questions');
        for(var i = 0; i < shuffledQuestions.length; i++){
            var questionEl = document.createElement('p');
            questionEl.innerHTML = shuffledQuestions[i].question + '<br>';
            var optionsContainer = document.createElement('div');
            for(var j = 0; j < shuffledQuestions[i].possibleAnswers.length; j++){
                var option = document.createElement('input');
                option.setAttribute('type', 'radio');
                option.setAttribute('value', shuffledQuestions[i].possibleAnswers[j]);
                option.setAttribute('name', i);
                optionsContainer.appendChild(option);
                var text = document.createElement('span');
                text.innerHTML = shuffledQuestions[i].possibleAnswers[j] + '<br>';
                optionsContainer.appendChild(text);
            }
            questionsDiv.appendChild(questionEl);
            questionsDiv.appendChild(optionsContainer);
        }
    }

    function gradeQuiz(){
        for(var i = 0; i < shuffledQuestions.length; i++){
            var radioInput = $('input[name="' + i + '"]:checked').val();
            if(radioInput === shuffledQuestions[i].correctAnswer){
                correctAnswers++;
            }
            else{
                incorrectAnswers++;
            }
        }
        $('#score').html('<div>Correct: ' + correctAnswers + '</div><div>Incorrect Answers:' + incorrectAnswers + '</div>');
    }
    //create reset function
    function restart(){
        document.getElementById('questions').innerHTML = '';
        shuffledQuestions = shuffle(questions);
        showQuestions();
        $('#start-quiz').hide();
        correctAnswers = 0;
        incorrectAnswers = 0;
        $('#score').hide();
        $('#play-again').hide();
        
        
        
    }
    //start game function
    $('#start-quiz').on("click", function(){
        run();
        document.getElementById('questions').innerHTML = '';
        shuffledQuestions = shuffle(questions);
        showQuestions();
        $('#start-quiz').replaceWith(
            $('#submit').click(function(){
                gradeQuiz();
                $('#score').show();
                $('#play-again').show();
                $('#submit').hide();
                stop();

               
            }));
           
    });

    //on the startgame click, replace the button with the submit button.

    // $('#submit').click(function(){
    //     gradeQuiz();
    //     $('#score').show();
    //     $('#play-again').show();
    // });

    $('#play-again').click(function(){
        restart();
        run();
    });

    
       

    var timer = 300;

    var intervalId;


    function run() {
        clearInterval(intervalId);
        timer = 301;
        intervalId = setInterval(decrement, 1000);
        
      }
  
      //  The decrement function.
      function decrement() {
          //  Decrease number by one.
        timer--;
          //  Show the number in the #timer tag.
        $("#timer").html("<h2> Time left: " + timer + "</h2>");
    
                if (timer === 0) {
  
          stop();
         }
      }
  
         function stop() {
              clearInterval(intervalId);
      }
      
        // function resetTime(){
        //     timer = 


        // }




  });

    //create radio buttons in the javascript and link them to the html this is just an idea 
    // for (i = 0; i < 4; i++) {
    //     $('<input type="radio" name="radiobtn" >Yourtext'+i+'</input>').appendTo('#container');
    // }
        //timeout function
        // setTimeout(timeUp, 60000 * 5);

        // function timeup(){
    
        //     $('#time-left').append('times up');
    
        // };














  
  