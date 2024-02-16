//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    addScore(score){
        this.scores.push(score);
    }
    average(){
        let sum = this.scores.reduce((a, b) => a + b, 0);
        let avg = sum / this.scores.length;
        return Math.floor(avg * 10) / 10;
    }
    status(){
        let avg = this.average();
        if(avg >= 90){
            return "Accepted";
        } else if(avg >= 80){
            return "Reserve";
        } else if(avg >= 70){
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`)
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`)
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`)
console.log('') // for newline

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

console.log(`Current Status of ${gladGator.name}: ${gladGator.status()}`)

let i = 0;
while(gladGator.status() !== "Reserve" && gladGator.status() !== "Accepted"){
    gladGator.addScore(100);
    i++;
}
console.log(`${i} tests are needed for ${gladGator.name} to reach ${gladGator.status()} status.`);

while(gladGator.status() !== "Accepted"){
    gladGator.addScore(100);
    i++;
}
console.log(`${i} tests are needed for ${gladGator.name} to reach ${gladGator.status()} status.`);
