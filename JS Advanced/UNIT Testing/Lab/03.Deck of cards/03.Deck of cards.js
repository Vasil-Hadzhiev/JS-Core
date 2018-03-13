function printDeckOfCards(deck) {
    let validDeck = [];

    for (let cardStr of deck) {
        let face = cardStr.substring(0, cardStr.length - 1);
        let suit = cardStr.substr(cardStr.length - 1, 1);

        try {
            validDeck.push(makeCard(face, suit));
        }
        catch (err) {
            console.log('Invalid card: ' + cardStr);
            return;
        }
    }

    console.log(validDeck.join(' '));

    function makeCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (validFaces.indexOf(face) < 0 || !validSuits.hasOwnProperty(suit)){
            throw new Error();
        }

        return {
            face,
            suit,
            toString: function () {
                return face + validSuits[suit];
            }
        }
    }
}

printDeckOfCards(['10D', '3D', 'QD', '10C']); // 10♦ 3♦ Q♦ 10♣
printDeckOfCards(['10D', '3D', 'QD', '1C']); // Invalid card: 1C