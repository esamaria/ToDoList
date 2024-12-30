let textElement = document.getElementById('text');
let addButton = document.getElementById('bt');
let taskList = document.getElementById('list');

addButton.addEventListener('click', function () {
    let taskText = textElement.value.trim(); 
    if (taskText === '') {
        alert('Please enter a task!'); 
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.style.marginLeft = "10px";
    

    
    completeButton.addEventListener('click', function () {
        li.style.textDecoration = "line-through";
    });


    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
   


    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    
    li.appendChild(completeButton);
    li.appendChild(deleteButton);


    taskList.appendChild(li);

    
    textElement.value = '';
});
