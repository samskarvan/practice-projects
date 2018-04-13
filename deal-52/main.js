var cardDeck = [];
var suitKey =['.club','.heart','.spade','.diamond'];
var numberOfPlayers =4;
var players =[];

$(document).ready(determineHand);
function createNewDeck(){
    for(var suitIterator =0; suitIterator<suitKey.length; suitIterator++){
        var suitArray =[];
        for (var cardIterator = 1; cardIterator<=13; cardIterator++){
            var newCard = {
                suit: suitKey[suitIterator],
                value: cardIterator
            };
            suitArray.push(newCard);
        }
        cardDeck[suitIterator]=suitArray;
        // cardDeck[suitIterator].push(suitArray);
    }
    return cardDeck;
}

function determineHand(){
    var newCardDeck = createNewDeck();
    var handCount = 52/numberOfPlayers;
    console.log(newCardDeck);
    debugger;
    for(var playerIndex=0; playerIndex<numberOfPlayers; playerIndex++){
        var playerHand=[];
        for(var card=0; card<handCount; card++){
            var randomSuitIndex = createRandomNumberBetween(0,newCardDeck.length-1);
            var randomValueIndex = createRandomNumberBetween(0,newCardDeck[randomSuitIndex].length-1);
            var randomCard = newCardDeck[randomSuitIndex][randomValueIndex];
            newCardDeck[randomSuitIndex].splice(randomValueIndex,1);
            if(newCardDeck[randomSuitIndex].length===0){
                newCardDeck.splice(randomSuitIndex,1);
            }
            playerHand.push(randomCard);
        }
        players[playerIndex]=playerHand;
        // players[playerIndex].push(playerHand);
    }
    console.log(players);
}

function createRandomNumberBetween(min,max){
    var randomNum = Math.floor(Math.random()*(max-min+1)+min);
    return randomNum;
}