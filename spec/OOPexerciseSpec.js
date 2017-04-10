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
        expect(human._eyes).toEqual(2);
    });
    it("has 2 legs", function() {
        expect(human._legs).toEqual(2);
    });
    it("can eat", function() {
    expect(human.eat("rice")).toBe("I am eating rice");
});

});

describe("employee", function() {
      var employee;
      beforeEach(function() {
          employee = new app2("software engineer");
      });
      it("has a head ", function() {
          expect(employee._head).toEqual(1);
      });
      it("can receive salary", function() {
          expect(employee.receiveSalary("mid-level")).toEqual(250000);
      });
  });