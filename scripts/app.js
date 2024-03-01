function saveTask(){
    console.log("saving..")
    //get the values
    const title = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();

    console.log(title,description,color,date,status, budget)
    //build the object
    let x = new task(title,description,color,date,status, budget)
    console.log(x)
    //save to server

    //display the task
}

function init(){
    console.log("this is the task Manager")
    //load data

    //hook events
    $("#btnSave").click(saveTask)
    //document.getElementById("btnSave")
}
//when the page loads execute the init function
window.onload = init;