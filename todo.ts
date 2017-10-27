interface todo{
  task: string;
  done: boolean;
}

class TodoList{
    private todoList : todo [];

    constructor(){
        this.todoList = [];
    }

    add(atodo: todo){
        this.todoList.push(atodo)
    }

    delete(index: number){
        this.todoList.splice(index, 1);
        // this.status.splice(index, 1);
    }

    update(index: number, taskUpdate: string){
        this.todoList[index].task = taskUpdate;
    }

    changeStatus(index: number)
    {
        this.todoList[index].done = !this.todoList[index].done;
    }

    getList()
    {
        return this.todoList;
    }

    display(){
        // console.log('Tasks '+this.todo);
        // console.log('Status '+this.status);
        var a = 2;
    }
}

// let atodo = {task : "kill him", done : "false"};

var list  = new TodoList();


function addTodo(task: string, done: boolean){
  list.add({
    task: task,
    done: false
  })
}

function deleteTodo(index: number){
  list.delete(index);
}

function updateTodo(index: number, taskupdate: string){
  list.update(index, taskupdate);
}

function changeStatusTodo(index: number)
{
    list.changeStatus(index);
}

function getTodos(){
  return list.getList();
}


// list.add({task: "Learn Angular",done: false});

// Task name
// done
//mark as read
//delete
//update

// list.display()
