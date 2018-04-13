var cardDeck = [];
var suitKey =['.club','.heart','.spade','.diamond'];

for(var suitIterator =0; suitIterator<suitKey.length; suitIterator++){
    var suitArray =[];
    for (var cardIterator = 0; cardIterator<=13; cardIterator++){
        var newCard = {
            suit: suitKey[suitIterator],
            value: cardIterator
        };
        suitArray.push(newCard);
    }
    cardDeck.push(suitArray);
}