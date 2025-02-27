let employeeName = ['a','b','c','d','e','f','g','h','i','j'];
let taskList = [1,2,3,4,5,6,7,8,9,10];

function addName(){
    getValueName = document.querySelector('#name').value;
    employeeName.push(getValueName);
    console.log(employeeName);
    document.querySelector('#name').value = '';

}

function addTask(){
    getValueTask = document.querySelector('#task').value;
    taskList.push(getValueTask);
    console.log(taskList);
    document.querySelector('#task').value = '';
}

function randomize(){

    if (employeeName.length === 0 || taskList.length === 0){

        taskGiver = document.querySelector('#TaskAssigned');
        taskGiver.innerText = `'Please add name and task'`;
    }

    else{
        randomName = Math.floor(Math.random() * employeeName.length);
        randomTask = Math.floor(Math.random() * taskList.length);
    

        taskGiver = document.querySelector('#TaskAssigned');
        taskGiver.innerText = `${employeeName[randomName]} has to do ${taskList[randomTask]}`;

    
        employeeName.splice(randomName, 1);
        taskList.splice(randomTask, 1);
    }

}