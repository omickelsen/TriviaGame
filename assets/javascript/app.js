
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
            question: 'Where is the Iron Bank located?',
            possibleAnswers: [
                'Bravos',
                'High Garden',
                'Pyke',
                'Dorne'
            ],
            correctAnswer: 'Bravos'
        },
        {
            question: 'Which language does Daenerys Targaryen NOT speak?',
            possibleAnswers: [
                'Common Tongue',
                'High Valyrian',
                'Dothraki',
                'Old Tongue'
            ],
            correctAnswer: 'Old Tongue'
        },
        {
            question: "Who says, 'Chaos isn't a pit. It's a ladder'?",
            possibleAnswers: [
                'Varys',
                'Cersei Lannister',
                'Petyr Baelish',
                'Tyrion Lannister'
            ],
            correctAnswer: 'Petyr Baelish'
        },
        {
            question: 'Which city did Daenerys Targaryen visit first?',
            possibleAnswers: [
                'Meereen',
                'Qarth',
                'Yunkai',
                'Astapor'        
            ],
            correctAnswer: 'Qarth'
        },
        {
            question: 'Who has never been on the small council?',
            possibleAnswers: [
                'Renly Baratheon',
                'Mace Tyrell',
                'Cersie Lannister',
                'Olenna Tyrell'        
            ],
            correctAnswer: 'Olenna Tyrell'
        },
        {
            question: 'Who gives Daenerys Targaryen her dragon eggs?',
            possibleAnswers: [
                'Jorah Mormont',
                'Illyrio Mopatis',
                'Viserys Targaryen',
                'Khal Drogo'        
            ],
            correctAnswer: 'Illyrio Mopatis'
        },
        {
            question: 'Who has Petyr Baelish loved since he was a child?',
            possibleAnswers: [
                'Sansa Stark',
                'Lysa Arryn',
                'Catelyn Stark',
                'Cersei Lannister'        
            ],
            correctAnswer: 'Catelyn Stark'
        },
        {
            question: 'Who were the Unsullied NOT instructed to kill in Astapor?',
            possibleAnswers: [
                'The Council',
                'The Soldiers',
                'The Men Holding Whips',
                'The Masters'        
            ],
            correctAnswer: 'The Council'
        },
        {
            question: 'Which title does Viserys Targaryen NOT use?',
            possibleAnswers: [
                'First Of His Name',
                'King Of The Andals And The First Men',
                'Protector Of The Realm',
                'Lord Of The Seven Kingdoms'        
            ],
            correctAnswer: 'First Of His Name'
        },
        {
            question: 'What do the wildlings call those living south of the Wall?',
            possibleAnswers: [
                'Sheep',
                'Kneelers',
                'Followers',
                'Dunces'        
            ],
            correctAnswer: 'Kneelers'
        },
        {
            question: "Which House is supposedly 'first in battle?'",
            possibleAnswers: [
                'House Stark',
                'House Baratheon',
                'House Targaryen',
                'House Tarly'        
            ],
            correctAnswer: 'House Tarly'
        },
        {
            question: 'Which Stark siblings are closest in age?',
            possibleAnswers: [
                'Sansa And Arya',
                'Robb And Jon',
                'Arya And Bran',
                'Robb And Sansa'        
            ],
            correctAnswer: 'Robb And Jon'
        },
        {
            question: "Who does Olenna Tyrell say is very good at 'knocking men off horses with a stick'?",
            possibleAnswers: [
                'Loras Tyrell',
                'Renly Baratheon',
                'Brienne',
                'The Mountain'        
            ],
            correctAnswer: 'Loras Tyrell'
        },
        {
            question: "Who cuts off Jaime Lannister's hand?",
            possibleAnswers: [
                'Rickard Karstark',
                'Roose Bolton',
                'Locke',
                'Polliver'        
            ],
            correctAnswer: 'Locke'
        },
        {
            question: 'What infamous song plays during the Red Wedding?',
            possibleAnswers: [
                'The Rains Of Castamere',
                'Its Always Summer Under The Sea',
                'Gentle Mother, Font Of Mercy',
                'The Bear And The Maiden Fair'        
            ],
            correctAnswer: 'The Rains Of Castamere'
        },
        {
            question: 'Who suggests Viserys Targaryen should not join the khalasar?',
            possibleAnswers: [
                'Illyrio Mopatis',
                'Daenerys Targaryen',
                'Khal Drogo',
                'Jorah Mormont'        
            ],
            correctAnswer: 'Jorah Mormont'
        },
        {
            question: "Who says, 'Which do you favor, your fingers or your tongue?'",
            possibleAnswers: [
                'Ramsay Bolton',
                'Locke',
                'Joffrey Baratheon',
                'Mance Rayder'        
            ],
            correctAnswer: 'Joffrey Baratheon'
        },
        {
            question: "Which of the following is NOT a face of 'the Seven?'",
            possibleAnswers: [
                'The Maiden',
                'The Widow',
                'The Mother',
                'The Stranger'        
            ],
            correctAnswer: 'The Widow'
        },
        {
            question: "What is the name of Joffrey Baratheon's Valyrian steel blade?",
            possibleAnswers: [
                'Lions Tooth',
                'Dark Sister',
                'Hearteater',
                'Widows Wail'        
            ],
            correctAnswer: 'Widows Wail'
        },
        {
            question: 'Who is the Master of Whisperers?',
            possibleAnswers: [
                'Tyrion Lannister',
                'Varys',
                'Petyr Baelish',
                'Tywin Lannister'        
            ],
            correctAnswer: 'Varys'
        },
        // {
        //     question: '',
        //     possibleAnswers: [
        //         '',
        //         '',
        //         '',
        //         ''        
        //     ],
        //     correctAnswer: ''
        // },
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
            var questionEl = document.createElement('h4');
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
        run();
        
        
        
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
        
    });

    
       

    var timer = 201;

    var intervalId;


    function run() {
        clearInterval(intervalId);
        timer = 201;
        intervalId = setInterval(decrement, 1000);
        
      }
  
      //  The decrement function.
      function decrement() {
          //  Decrease number by one.
        timer--;
          //  Show the number in the #timer tag.
        $("#timer").html("<h2> Time left: " + timer + "</h2>");
    
                if (timer === 0) {
                    gradeQuiz();
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














  
  