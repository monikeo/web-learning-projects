const titleText = "Today's Date";
const title = document.getElementById("title");
const result = document.getElementById("result");
const dateOptions = document.getElementById("dateOptions");

const dateSelectOptions = {
    "dd-mm-yyyy": "Day, Month, Year",
    "yyyy-mm-dd": "Year, Month, Day",
    "mm-dd-yyyy-h-mm": "Month, Day, Year, Hours, Minutes"
};

const initialDateOptions = () => {
    for(const [key, value] of Object.entries(dateSelectOptions)) {
        const option = document.createElement("option");
        option.value = key;
        option.text = value;
        dateOptions.appendChild(option);
    }
    return true;
}

const optionTrigger = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    switch(dateOptions.value) {
        case "yyyy-mm-dd":
            result.innerText = `${year} - ${month} - ${day}`;
            break;
        case "mm-dd-yyyy-h-mm":
            result.innerText = `${month} - ${day} - ${year} - ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            result.innerText = `${day} - ${month} - ${year}`;
    }
}

title.innerText = titleText;
initialDateOptions();
setInterval(optionTrigger, 1000);

dateOptions.addEventListener("change", optionTrigger);
