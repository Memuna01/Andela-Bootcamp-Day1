var app1 = require('../app/OOPexercise.js').HumanBeing;
var app2 = require('../app/OOPexercise.js').Employee;

describe("Human Being", function() {
    var human;
    //beforeEach function is executed before all the test cases
    //I am using it to create an instance of HumanBeing class.

    beforeEach(function() {
        human = new app1();
    });
    it("has 2 eyes", function() {
        expect(human.getEyes()).toEqual(2);
    });
    it("has 2 legs", function() {
        expect(human.getLegs()).toEqual(2);
    });
    it("can eat", function() {
    expect(human.eat("rice")).toBe("I am eating rice");
    });

});

describe("An Employee", function() {
    var employee;
    beforeEach(function() {
        employee = new app2();
    });
    it("has a head ", function() {
        expect(employee.getHead()).toEqual(1);
    });
    it("has 2 legs", function() {
        expect(employee.getLegs()).toEqual(2);
    });

    it("can receive salary", function() {
        expect(employee.receiveSalary("mid-level")).toEqual(250000);
    });
    it("is an instance of its parent class HumanBeing", function() {
        expect(employee instanceof app1).toBe(true)
    });
});