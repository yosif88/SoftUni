function printDeckOfCards(cards) {
   
    let result = []
   
    for (const tokens of cards) {
        let face = tokens.slice(0, -1);
        let suit = tokens.slice(-1);

        try {
            const card = createCard(face, suit);
            result.push(card);
        } catch (e) {
            result=[`Invalid card: ${tokens}`]
        }
    }

    console.log(result.join(" "));

    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let suits = {

            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!faces.includes(face) || !suits[suit]) {
            throw new Error('Error')
        }

        return {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`
            }
        }
    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])