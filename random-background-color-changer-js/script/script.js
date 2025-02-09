const titleText = "Random Background Color Changer";
const changeColorBtnText = "Change Background Color";
const title = document.getElementById("title");
const changeColorBtn = document.getElementById("changeColorBtn");
const colorCode = document.getElementById("colorCode");

title.innerText = titleText;
changeColorBtn.innerText = changeColorBtnText;

const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = "Current color: " + newColor;
    console.log(newColor);
}

changeColorBtn.onclick = changeBackgroundColor;
