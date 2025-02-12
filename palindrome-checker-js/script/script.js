const titleText = "Is it a Palindrome?";
const cardHintText = "💡 A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.";
const cardPalindromeCheckerTitleText = "Enter in text to check for a palindrome: ";
const cardPalindromeCheckerBtnText = "Check";

const title = document.getElementById("title");
const cardHintTitle = document.getElementById("cardHintTitle");
const cardPalindromeCheckerTitle = document.getElementById("cardPalindromeCheckerTitle");
const cardPalindromeCheckerInput = document.getElementById("cardPalindromeCheckerInput");
const cardPalindromeCheckerBtn = document.getElementById("cardPalindromeCheckerBtn");
const cardPalindromeCheckerResult = document.getElementById("cardPalindromeCheckerResult");

title.innerText = titleText;
cardHintTitle.innerText = cardHintText;
cardPalindromeCheckerTitle.innerText = cardPalindromeCheckerTitleText;
cardPalindromeCheckerBtn.innerText = cardPalindromeCheckerBtnText;

const isPalindrome = (text) => {
    for(let i = 0; i < Math.floor(text.length / 2); i++) {
       if(text[i] !== text[text.length - 1 - i]) {
           return false;
       }
    }
    return true;
}

const palindromeBtn = () => {
    const inputValue = cardPalindromeCheckerInput.value.trim();
    if(!inputValue) {
        console.log("[-] Input Empty");
        return;
    }
    const flag = isPalindrome(inputValue);
    const result = flag ? `${inputValue} is a palindrome` : `${inputValue} is not a palindrome`;
    cardPalindromeCheckerResult.innerText = result;
}

cardPalindromeCheckerBtn.addEventListener("click", palindromeBtn);

cardPalindromeCheckerInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        palindromeBtn();
    }
});
