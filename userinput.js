
var todoList = document.getElementById('todos');



window.onload = function() {
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');

    var lst = getTodos();

    btn.onclick = function () {
        var value = input.value;
        addTodo(value, false);
        mydisplay();
    };

}


function mydelete(id){
    deleteTodo(id);
    mydisplay();
}

function mydisplay(){

    todoList.innerHTML = '';
    var lst = getTodos();
    for (let i=0; i<lst.length; i++) {
        var status = (lst[i].done) ? "done" : "undone";
        let todoListString = createHtmlString(lst[i].task, status, i);
        todoList.innerHTML += todoListString;
    }
}

function showEdit(id) {
    var txtinp = document.getElementById("txtinp" + id);
    if(txtinp.style.display == "none")
    {
        txtinp.style.display = "block";
    }


    var editbtn = document.getElementById("editbtn" + id);
    if(editbtn.style.display == "block")
    {
        editbtn.style.display = "none";
    }

    var savebtn = document.getElementById("savebtn" + id);
    console.log(savebtn);

    if(savebtn.style.display == "none")
    {
        savebtn.style.display = "block";
    }
}

function myedit(id) {
    var editbtn = document.getElementById("savebtn" + id);

    if(editbtn.style.display == "block")
    {
        editbtn.style.display = "none";
    }

    var txtinp = document.getElementById("txtinp" + id);
    var value = txtinp.value;
    updateTodo(id, value);

    // var txtinp = document.getElementById("txtinp");
    if(txtinp.style.display == "block")
    {
        txtinp.style.display = "none";
    }

    mydisplay();

}

function changeStatus(id) {
    changeStatusTodo(id);

    // var statusbtn = document.getElementById("statusbtn" + id);


    // if(statusbtn.innerText == "Do Task")
    //     statusbtn.innerText = "Undo Task";
    // else
    //     status.innerText = "Do Task";

    mydisplay();
}

function createHtmlString(task, done, id){

    var statusbtnValue = (done == "undone") ? "Do Task" : "Undo Task";

    var todoListString = '';
    todoListString += '<li>' + task + '</li>';
    todoListString += '<li> Status : ' +done+ '</li>';
    todoListString += '<button id="deletebtn" onclick="mydelete('+id+')">Delete</button>';

    todoListString += '<input id="txtinp' + id + '" type = "text" style="display: none" placeholder="Enter Updated Todo"/>';
    todoListString += '<button id = "editbtn' + id + '" onclick="showEdit(' + id + ')" style="display: block">edit</button>';
    todoListString += '<button id="savebtn' + id + '" onclick="myedit('+id+')" style="display: none">save</button>';

    todoListString += '<button id = "statusbtn' + id + '" onclick="changeStatus(' + id + ')">' +  statusbtnValue  + '</button>'
    // todoListString += '<button id="editbtn" onclick="myedit('+id+')">Delete</button>'
    todoListString += '<hr></hr>';
    return todoListString;
}