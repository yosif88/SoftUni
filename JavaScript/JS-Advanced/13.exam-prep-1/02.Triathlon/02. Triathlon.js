class Triathlon {
    constructor(competitionName){
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
       

    }

    addParticipant (participantName, participantGender){
        if (this.participants.hasOwnProperty(participantName)){
            return `${participantName} has already been added to the list`
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }

    completeness (participantName, condition){
        
        if (!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`)
        }

        if(this.participants.hasOwnProperty(participantName) && condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }

        let completedCount = Math.floor(condition / 30);
        if (completedCount > 0 && completedCount < 3){
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }

        const gender = this.participants[participantName];
        
        this.listOfFinalists.push({
            name:participantName,
            gender
        });

        return `Congratulations, ${participantName} finished the whole competition`


    }
    rewarding (participantName){
        let hasFinished =  this.listOfFinalists.filter((finalist) =>{
                return finalist.name == participantName;
        })
    
        if (hasFinished.length === 0){
            return `${participantName} is not in the current finalists list`
        }
        return `${participantName} was rewarded with a trophy for his performance`
    }

    showRecord (criteria){
        if (this.listOfFinalists.length <= 0) {
            return `There are no finalists in this competition`;
          }
      
          if (criteria === "male" || criteria === "female") {
            return `${this.listOfFinalists[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
          }
      
          if (criteria === "all") {
            let resultMessage = [`List of all ${this.competitionName} finalists:`];
      
            const sortedFinalists = this.listOfFinalists.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
      
            sortedFinalists.forEach((finalist) =>
              resultMessage.push(`${finalist.name}`)
            );
      
            return resultMessage.join("\n");
          }
      
          return `There are no ${criteria}'s that finished the competition`;
        }
}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));
