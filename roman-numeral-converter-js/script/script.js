const titleText = "Roman Numeral Converter";
const inputTitleText = "Enter a Number:";
const convertBtnText = "Convert";
const resultErrorText = "Please Enter a valid number.";

const title = document.getElementById("title");
const inputTitle = document.getElementById("inputTitle");
const convertBtn = document.getElementById("convertBtn")
const result = document.getElementById("result");
const resultDiv = document.getElementById("resultDiv");

const resutlDivState = true;

const nums = [1,4,5,9,10,40,50,90,100,400,500,900,1000].reverse();
const syms = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"].reverse();

const inputValidation = (value) => {
    const regex = /\d+/g;
    return regex.test(value);

}

const EnterKeyTrigger = (key) => {
    // keyCode 13 === "Enter key"
    if(key.keyCode == 13) {
        decimalToRomanConverter();
    }
}

const decimalToRomanConverter = () => {
    decimalNumToRomanNum(inputValue.value);
}

const correctClasses = ["bg-slate-600", "border-white", "text-white"];
const errorClasses = ["bg-red-600", "border-red-800", "text-red-200"];

const resultDivAlertTrigger = (msg) => {
    result.innerText = msg;
    correctClasses.forEach((ch) => resultDiv.classList.remove(ch));
    errorClasses.forEach((ch) => resultDiv.classList.add(ch));
}

const printResult = (value) => {
    result.innerText = value;
    errorClasses.forEach((ch) => resultDiv.classList.remove(ch));
    correctClasses.forEach((ch) => resultDiv.classList.add(ch));

    if(nums.length !== syms.length){
        const msg = "Error Numeral System, Check Debug";
        console.log(msg);
        resultDivAlertTrigger(msg);
        return;
    }
}

const decimalNumToRomanNum = (decimalNum) => {
    if(!inputValidation(decimalNum)) {
        resultDivState = false;
        resultDivAlertTrigger(resultErrorText);
        return;
    }
    resultDivState = true;

    let result = "";
    while(decimalNum > 0) {
        for(let i = 0; i < nums.length; i++) {
            if(decimalNum >= nums[i]) {
                let div = Math.floor(decimalNum / nums[i]);
                console.log(nums[i]);
                decimalNum %= nums[i];
                while(div > 0){
                    result += syms[i];
                    div--;
                }
                break;
            }
        }
    }
    printResult(result);
}

const main = () => {
    title.innerText = titleText;
    inputTitle.innerText = inputTitleText;
    convertBtn.innerText = convertBtnText;

    inputValue.addEventListener("keydown", (key) => {
        EnterKeyTrigger(key);
    });

    convertBtn.addEventListener("click", () => {
        decimalToRomanConverter();
    });
}

main();
