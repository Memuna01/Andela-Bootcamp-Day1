class HumanBeing{
    constructor(){
        //private properties in javascript prefixed with an underscore
        this._head = 1;
        this._hands = 2;
        this._legs = 2;
        this._eyes = 2;
        this._mouth = 1;
    }

    closeEyes(){
        return `I am closing my ${this._eyes}`;
    }

    sleep(hours){
        this.closeEyes();
        if(hours){
            return `I am going to sleep for ${hours} hours`;
        }
        return `I am going to sleep.`;
    }

    eat(food){
        if(food){
            return `I am eating ${food}`;
        }else{
            return 'Nothing to chew';
        }
    }

    speak(words){
        if(words){
            return words;
        }
        return 'I have nothing to say';
    }


}

class Employee extends HumanBeing{
    constructor(job_title){
        //inherits the constructor of 
        super();
        this._job_title = job_title || "software engineer";
        this._salary = 0;
    }

    receiveSalary(level){
        if(level == 'junior' && this._job_title === 'software engineer'){
            return this._salary + 150000;
        }else if(level === 'mid-level' && this._job_title === 'software engineer'){
            return this._salary + 250000;
        }else if(level === 'senior' && this._job_title === 'software engineer'){
            return this._salary + 350000;
        }else{
            return `Your salary is ${this._salary}. Please see the HR for more details.`;
        }
    }
}

module.exports = {
    HumanBeing: HumanBeing,
    Employee: Employee
}