// Challenge 1: Your Age in Days
function ageInDays(){
    var birthYear = prompt ('What year were you born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old in 2020');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Generate Cat
function genCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flexCatGen');
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;
    botChoice = numToChoice(randToRpsInt());
    console.log('Computer chose: ', botChoice);
    results= decideWinner(humanChoice, botChoice); // [0,1] human lost| bot won
    console.log(results);
    message = finalMessage(results); // {'message':'You won!', 'color':'green'}
    console.log (message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numToChoice (number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, botChoice){
    var rpsDatabase={
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors':0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1}
    };

    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];
    return [yourScore,botScore];
}

function finalMessage([yourScore,botScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }else if (yourScore === 1){
        return {'message': 'You won!', 'color': 'green'};
    }else{
        return {'message': 'You tied!', 'color': 'yellow'};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +"' height= 150 width = 150 style='box-shadow: 0px 10px 50px rgba(0, 47, 255, 1);'>";
    messageDiv.innerHTML = "<h1 style = 'color: " +finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +"' height= 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    
    document.getElementById('flexBoxRpsDiv').appendChild(humanDiv);
    document.getElementById('flexBoxRpsDiv').appendChild(messageDiv);
    document.getElementById('flexBoxRpsDiv').appendChild(botDiv);
}

 // Challenge 4 Change the colour of All Buttons!
 var allButtons = document.getElementsByTagName('button');
 var coppyAllButtons=[];
 
 for (let i=0; i<allButtons.length;i++){
     coppyAllButtons.push(allButtons[i].classList[1]);
 }


 function buttonColourChange(buttonThing){
     if(buttonThing.value === 'red'){
        buttonRed();
     }else if (buttonThing.value === 'green'){
        buttonGreen();
     }else if (buttonThing.value === 'random'){
        buttonRandom();
     }else if (buttonThing.value === 'reset'){
        buttonReset();
     }
 }
 function buttonRed(){
     for(let i=0; i<allButtons.length;i++){
         allButtons[i].classList.remove(allButtons[i].classList[1]);
         allButtons[i].classList.add('btn-danger');

     }
 }
 function buttonGreen(){
     for(let i=0; i<allButtons.length;i++){
         allButtons[i].classList.remove(allButtons[i].classList[1]);
         allButtons[i].classList.add('btn-success');
     }
 }
 function buttonReset(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(coppyAllButtons[i]);
    } 
 }
 function buttonRandom(){
     var choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-info'];
     for(let i=0;i<allButtons.length;i++){
         let ranNum = Math.floor(Math.random()*4);
         allButtons[i].classList.remove(allButtons[i].classList[1]);
         allButtons[i].classList.add(choices[ranNum]);
     }
 }

// Challenge 5: Blackjack