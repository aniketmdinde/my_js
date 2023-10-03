let blackjackGame = {
    'you' : {'scoreSpan':'#your-blackjack-result', 'div' : '#your-box', 'div-imgs' : '#your-box-imgs', 'score' : 0},
    'dealer' : {'scoreSpan':'#dealer-blackjack-result', 'div' : '#dealer-box', 'div-imgs' : '#dealer-box-imgs', 'score' : 0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardsMap' : {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isHit' : 0,
    'isStand' : false,
    'turnsOver' : false,
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('./sounds/swish.m4a');
const winSound = new Audio('./sounds/cash.mp3');
const lostSound = new Audio('./sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit()
{
    if(blackjackGame['isStand'] === false)
    {
        let card = randomCard();
        showCard(YOU,card);
        updateScore(YOU,card);
        showScore(YOU);
        blackjackGame['isHit'] = true;
    }
}

function randomCard()
{
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(activePlayer,card)
{
    if(activePlayer['score'] <= 21)
    {
        let cardImg = document.createElement('img');
        cardImg.src = `./images/${card}.png`;//focus on the apostrophe used
        document.querySelector(activePlayer['div-imgs']).appendChild(cardImg);
        hitSound.play();
    }
}

function blackjackDeal()
{
    if(blackjackGame['turnsOver'] === true)
    {
        blackjackGame['isHit'] = false;
        blackjackGame['isStand'] = false;

        let yourImgs = document.querySelector(YOU['div']).querySelectorAll('img');
        let dealerImgs = document.querySelector(DEALER['div']).querySelectorAll('img');
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector(YOU['scoreSpan']).textContent = '0';
        document.querySelector(DEALER['scoreSpan']).textContent = '0';
    
        document.querySelector(YOU['scoreSpan']).style.color = "white";
        document.querySelector(DEALER['scoreSpan']).style.color = "white";
    
        document.querySelector('#blackjack-result').textContent = "Let's Play!";
        document.querySelector('#blackjack-result').style.color = "black";
    
        for(let i=0; i<yourImgs.length; i++) 
            yourImgs[i].remove();
    
        for(let i=0; i<dealerImgs.length; i++)
            dealerImgs[i].remove();

        blackjackGame['turnsOver'] = false;
    }
}

function updateScore(activePlayer, card)
{
    if(card === 'A')
    {
        if(activePlayer['score']+blackjackGame['cardsMap'][card][1])
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        else
        activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
    else
        activePlayer['score'] += blackjackGame['cardsMap'][card];
}

function showScore(activePlayer)
{   if(activePlayer['score'] > 21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color = "red";
    }
    else
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}

function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function dealerLogic()
{
    if(blackjackGame['isHit'] === true)
    {
        blackjackGame['isStand'] = true;

        while(DEALER['score'] < 16 && blackjackGame['isStand'] == true)
        {
            let card = randomCard();
            showCard(DEALER, card);
            updateScore(DEALER, card);
            showScore(DEALER);
            await sleep(800);
        }
        
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResults(winner);
    }
}

function computeWinner()
{
    let winner;
    if(YOU['score'] <= 21)
    {
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
        {
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score'])
        {
            blackjackGame['losses']++;
            winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score'])
        {
            blackjackGame['draws']++;
        }
    }
    else if(YOU['score'] > 21 && DEALER['score'] <= 21)
    {
        blackjackGame['losses']++;
        winner = DEALER;
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21)
    {
        blackjackGame['draws']++;
    }

    console.log(blackjackGame);
    return winner;
}

function showResults(winner)
{
    let message, messageColor;

    if(winner === YOU)
    {
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = "You Won!";
        messageColor = 'green';
        winSound.play();
    }
    else if (winner === DEALER)
    {
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = "You Lost!";
        messageColor = 'red';
        lostSound.play(); 
    }
    else
    {
        document.querySelector('draws').textContent = blackjackGame['draws'];
        message = "Draw!";
        messageColor = 'black';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}