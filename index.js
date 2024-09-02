const inputBox = document.getElementById("input-box");
// variable to grab the input field.
const listContainer = document.getElementById("list-container");
// variable to grab the list items.

//function to add task.
function addTask(){
    if(inputBox.value === ""){
        alert("You must enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = " "
    saveTask()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask()
    }
}, false)

//function to save data in localstorage.
function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//function to display data
function displayTask(){
    listContainer.innerHTML =localStorage.getItem("data")
}
displayTask()