"use strict";

const titleText = "Todo App";
const descriptionText = "Keep it up!";
const title = document.getElementById("title");
const inputTitle = document.getElementById("inputTitle");
const description = document.getElementById("description");
const taskDone = document.getElementById("taskDone");

const addBtn = document.getElementById("addBtn");
const closeTaskFormBtn = document.getElementById("closeTaskFormBtn");
const addOrUpdateTaskBtn = document.getElementById("addOrUpdateTaskBtn");

const informationInputCard = document.getElementById("informationInputCard");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

let addOrUpdateTaskTrigger;

const removeSpacialChars = (input) => {
    let value = input.trim();
    let RegEx = /[\p{Letter}\p{Mark}\d\s]+/gu;
    let result = value.match(RegEx).join("");
    return result;
}


const addOrUpdateTask = (addOrUpdate) => {
    if(addOrUpdate) {
        addTask();
        console.log("add task btn clicked");
    } else {
        updateTask();
        console.log("update task btn clicked");
    }
}

const createTask = () => {
    const taskTitle = removeSpacialChars(inputTitle.value);
    const taskFinishDate = inputDate.value;
    const taskDescription = removeSpacialChars(inputDescription.value);
    const today = new Date();
    const createdDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    const taskStatus = false;
    const taskId = `${taskTitle}-${today.getTime()}`;
    
    const newTask = {
        id: taskId,
        title: taskTitle,
        description: taskDescription,
        "created date": createdDate,
        "updated date": createdDate,
        "completed date": taskFinishDate,
        "status": taskStatus
    };
    return newTask;
}

const refreshTask = () => {
    const taskCompleted = taskData.filter((task) => task.status).length;
    taskDone.innerText = `${taskCompleted} / ${taskData.length}`;
}

const addTask = () => {
    const newTask = createTask();
    taskData.push(newTask);
    taskFormTrigger();
    refreshTask();
}

const updateTask = () => {
    console.log("task updated");
}

const todoListRead = () => {
    console.log("read task");
}


const deleteTask = () => {
    console.log("task deleted");
}

const resetTask = () => {
    console.log("task resetted");
}

let taskFormFlag = true;
const taskFormTrigger = () => {
    if (taskFormFlag) {
        informationInputCard.classList.remove("hidden");
        informationInputCard.classList.add("block");
        section1.classList.remove("block");
        section1.classList.add("hidden");
        section2.classList.remove("block");
        section2.classList.add("hidden");
        section3.classList.remove("block");
        section3.classList.add("hidden");
        taskFormFlag = false;
    } else {
        informationInputCard.classList.remove("block");
        informationInputCard.classList.add("hidden");
        section1.classList.remove("hidden");
        section1.classList.add("block");
        section2.classList.remove("hidden");
        section2.classList.add("block");
        section3.classList.remove("hidden");
        section3.classList.add("block");
        taskFormFlag = true;
    }
}
const main = () => {
    title.innerText = titleText;
    description.innerText = descriptionText;
    refreshTask();

    addBtn.addEventListener("click", () => {
        addOrUpdateTaskBtn.innerText = "Add new task";
        taskFormTrigger();
    });
    closeTaskFormBtn.addEventListener("click", () => {
        addOrUpdateTaskBtn.innerText = "Update task";
        taskFormTrigger();
    });
    addOrUpdateTaskBtn.addEventListener("click", () => addOrUpdateTask(true));
}


main();

