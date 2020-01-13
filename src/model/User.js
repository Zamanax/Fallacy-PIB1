import "./Question"
const D = 1;

class User {
    constructor(name){
        this.name = name;
        this.theta = 0;
    }

    estimateTheta(answerToQuestion) {
        var newTheta = 1;

        answerToQuestion.forEach(answer => {
            if( answer.win ){
                newTheta *= (probS(this.theta - answer.question.delta))
            } else {
                newTheta *= (1-probS(this.theta - answer.question.delta))
            }
        });

        this.theta = newTheta
    }
    
}
// eslint-disable-next-line
var denis = new User("Denis"); 

function probS(theta, delta){
    return 1/(1+Math.exp(-D(theta - delta)));
}