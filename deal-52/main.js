function createDeckArray() {
    var suitKeyArray=['club', 'spade', 'heart', 'diamond'];
    var cardDeck=[];
    for(var suitItorator=0; suitItorator<suitKeyArray.length; suitItorator++){
        var suitArray=[];
        for(var cardItorator=0; cardItorator<=13; cardItorator++){
            var newCard={
                suit: suitKeyArray[suitItorator],
                value:cardItorator,
            }
            suitArray.push(newCard);
        }
    }
}