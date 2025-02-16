"use strict";

const titleText = "Todo App";
const descriptionText = "Keep it up!";
const title = document.getElementById("title");
const inputTitle = document.getElementById("inputTitle");
const description = document.getElementById("description");

const addBtn = document.getElementById("addBtn");
const closeTaskFormBtn = document.getElementById("closeTaskFormBtn");
const addOrUpdateTaskBtn = document.getElementById("addOrUpdateTaskBtn");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

const removeSpacialChars = (input) => {

}


const addOrUpdateTask = () => {

}

const todoListRead = () => {

}

const editTask = () => {

}

const deleteTask = () => {

}

const resetTask = () => {

}

const main = () => {
    title.innerText = titleText;
    description.innerText = descriptionText;
}


main();

