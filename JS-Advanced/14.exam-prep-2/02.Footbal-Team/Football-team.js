class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
      
    }

    findPlayer(name) {
        return this.invitedPlayers.find(p => p.name === name)
    }
    newAdditions(footballPlayers) {
     
        for (const line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');

            let player = this.findPlayer(name);

            if (!player) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue: Number(playerValue)
                })
            } else {
                if (player.playerValue < Number(playerValue)) {
                    player.playerValue = Number(playerValue);
                }
            }
        }


        let res = [];
        this.invitedPlayers.forEach(player => {
            res.push(player.name)
        })

        return `You successfully invite ${res.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let player = this.findPlayer(name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (player.playerValue > playerOffer) {
            let priceDifference = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);

        }
        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        let player = this.findPlayer(name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(player.age >= age){
            return `${name} is above age limit!`
        }

        if (age - player.age <= 5) {
            let ageDifference = age - player.age;
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`

        } else if (age - player.age > 5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
        
    }
    transferWindowResult() {
        let res = 'Players list:\n';

        this.invitedPlayers.forEach(player =>{
            res+=`Player ${player.name}-${player.playerValue}\n`
        })

        return res.trim();
    }

}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
