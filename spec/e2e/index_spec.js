var index = require("./index_po.js");

describe('angularjs homepage', function() {
    it('Template page should display', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://127.0.0.1:3000');
  });
});

describe('base tempalate header', function() {
  it("should be using a md-subheader element", function() {
      index.header;
  });
});

//   describe('todo list', function() {
//     var todoList;

//     beforeEach(function() {
//       browser.get('http://www.angularjs.org');

//       todoList = element.all(by.repeater('todo in todoList.todos'));
//     });

//     it('should list todos', function() {
//       expect(todoList.count()).toEqual(2);
//       expect(todoList.get(1).getText()).toEqual('build an angular app');
//     });

//     it('should add a todo', function() {
//       var addTodo = element(by.model('todoList.todoText'));
//       var addButton = element(by.css('[value="add"]'));

//       addTodo.sendKeys('write a protractor test');
//       addButton.click();

//       expect(todoList.count()).toEqual(3);
//       expect(todoList.get(2).getText()).toEqual('write a protractor test');
//     });
   // });
// });
