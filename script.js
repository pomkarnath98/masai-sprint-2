window.addEventListener('load', indexPage)

var player1, player2;

var turn =  document.getElementById('turn');
function indexPage(snakesId){

    player1 = document.createElement('input')
    player1.setAttribute('placeholder', 'Player1 (Max length: 9)')
    player1.maxLength = '9';
    document.body.append(player1)

    player2 = document.createElement('input')
    player2.setAttribute('placeholder', 'Player2 (Max length: 9)')
    player2.maxLength = '9';
    document.body.append(player2)
    
    var startBtn = document.createElement('button')
    startBtn.textContent = "START"
    startBtn.setAttribute('id', 'startBtn')
    document.body.append(startBtn)
    startBtn.addEventListener('click', initiate)

}

function initiate(){
    turn.textContent = player1.value + ' turn'

    var element1 = document.createElement('div')
    element1.setAttribute('id', 'element1')
    element1.setAttribute('class', 'blueBox')
    document.getElementById('1').append(element1)

    var showElement1Box = document.createElement('div')
    showElement1Box.setAttribute('id', 'showElement1Box')
    document.body.append(showElement1Box)

    var showElement1 = document.createElement('div')
    // showElement1.setAttribute('id', 'showElement1')
    showElement1.setAttribute('class', 'blueBox')
    document.getElementById('showElement1Box').append(showElement1)
    document.getElementById('showElement1Box').append(player1.value)
    
    var element2 = document.createElement('div')
    element2.setAttribute('id', 'element2')
    element2.setAttribute('class', 'yellowBox')
    document.getElementById('1').append(element2)

    var showElement2Box = document.createElement('div')
    showElement2Box.setAttribute('id', 'showElement2Box')
    document.body.append(showElement2Box)
    
    var showElement2 = document.createElement('div')
    showElement2.setAttribute('class', 'yellowBox')
    // showElement2.textContent = "Player2"
    document.getElementById('showElement2Box').append(showElement2)
    document.getElementById('showElement2Box').append(player2.value)
    
    var dice = document.createElement('img')
    dice.setAttribute('src','resources/dice-1.JPG')
    dice.setAttribute('id','dice')
    // dice.textContent = "ROLL DICE"
    document.body.append(dice)
    alert('Hurrah! You have entered the Game! Roll the dice to play...')
    event.target.remove()
    player1.remove()
    player2.remove()

    dice.addEventListener('click', gameProcess)
}

var sum1 = 1
var sum2 = 1
var count = 0
function gameProcess(){
    if(turn.textContent === player1.value + ' turn')
        turn.textContent = player2.value + ' turn'
    else
        turn.textContent = player1.value + ' turn'

    count++;

    var diceValue = random(6)
    dice.setAttribute('src','resources/dice-' + diceValue + '.JPG')
    // var snakes = [96, 58] //96-->18; 58-->27
    // var ladders = [15, 46] //15-->64; 46-->88
    
    if (count%2 !== 0){
        sum1 += diceValue

        if (sum1 === 58){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('27').append(element1) 
                sum1 = 27
            },1000)
        }
        else if( sum1 === 96){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('18').append(element1) 
                sum1 = 18
            },1000)
        }
    
        else if (sum1 === 15){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('64').append(element1) 
                sum1 = 64
            },1000)
        }
        else if( sum1 === 46){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('88').append(element1) 
                sum1 = 88
            },1000)
        }
        else if (sum1 > 100){
            sum1 -= diceValue
            document.getElementById(sum1).append(element1)
        }
        else if (sum1 === 100){
            document.getElementById(sum1).append(element1)
            alert('Congrats! '+ player1.value + ' Wins!\n'+ 'If You want to restart then refresh the page')
            event.target.remove()
        }
        else
            document.getElementById(sum1).append(element1)
    }
    else{
        sum2 += diceValue
        if (sum2 === 58){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('27').append(element2) 
                sum2 = 27
            },1000)
        }
        else if( sum2 === 96){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('18').append(element2) 
                sum2 = 18
            },1000)
        }
    
        else if (sum2 === 15){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('64').append(element2) 
                sum2 = 64
            },1000)
        }
        else if( sum2 === 46){
            document.getElementById(sum2).append(element2)
            setTimeout(function(){
                document.getElementById('88').append(element2) 
                sum2 = 88
            },1000)
        }
        else if (sum2 > 100){
            sum2 -= diceValue
            document.getElementById(sum2).append(element2)
        }
        else if (sum2 === 100){
            document.getElementById(sum2).append(element2)
            alert('Congrats! '+ player2.value + ' Wins!\n'+ 'If You want to restart then refresh the page')
            event.target.remove()
        }
        else
            document.getElementById(sum2).append(element2)
    }

}

function random(number){
    return Math.ceil(Math.random()*number);
}