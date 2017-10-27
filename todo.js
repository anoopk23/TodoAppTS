var TodoList = (function () {
    function TodoList() {
        this.todoList = [];
    }
    TodoList.prototype.add = function (atodo) {
        this.todoList.push(atodo);
    };
    TodoList.prototype.delete = function (index) {
        this.todoList.splice(index, 1);
        // this.status.splice(index, 1);
    };
    TodoList.prototype.update = function (index, taskUpdate) {
        this.todoList[index].task = taskUpdate;
    };
    TodoList.prototype.changeStatus = function (index) {
        this.todoList[index].done = !this.todoList[index].done;
    };
    TodoList.prototype.getList = function () {
        return this.todoList;
    };
    TodoList.prototype.display = function () {
        // console.log('Tasks '+this.todo);
        // console.log('Status '+this.status);
        var a = 2;
    };
    return TodoList;
}());
// let atodo = {task : "kill him", done : "false"};
var list = new TodoList();
function addTodo(task, done) {
    list.add({
        task: task,
        done: false
    });
}
function deleteTodo(index) {
    list.delete(index);
}
function updateTodo(index, taskupdate) {
    list.update(index, taskupdate);
}
function changeStatusTodo(index) {
    list.changeStatus(index);
}
function getTodos() {
    return list.getList();
}
// list.add({task: "Learn Angular",done: false});
// Task name
// done
//mark as read
//delete
//update
// list.display()
