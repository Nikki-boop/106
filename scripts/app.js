
function saveTask(){
    //get values
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, desc, color, date, status, budget);
    //build an object

    let taskToSave = new Task(title, desc, color, date, status, budget);
    console.log(taskToSave);

    //save to server (post)

    //display the task (get)
}

function init(){
    console.log("init");
    $("#btnSave").click(saveTask)
}


window.onload = init;