let input=document.getElementById("input")
let btn=document.getElementById("btn")
let wrong=document.querySelector(".wrong")
let guesses=document.getElementById("guesses")

let answer= Math.floor(Math.random()*100)+1
console.log(answer);
let numGuesses=0;
btn.addEventListener("click",()=>{
    guessNumber();
})
function guessNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrong.innerHTML="Enter a number from 1 to 100";
        input.value=""
    }
    else{
        numGuesses++;
        guesses.innerHTML=`No. of Guesses: ${numGuesses}`;
        if(input.value>answer){
            wrong.innerHTML="Number is Higher!"
            input.value=""
        }
        else if(input.value<answer){
            wrong.innerHTML="Number is Lower!";
            input.value=""
        }
        else{
            wrong.innerHTML="Congratulation,you guessed the correct number!"
            btn.disabled=true;
            input.value="";
            setTimeout(()=>{restartGame()},5000)
        }
    } 
}

function restartGame(){
    numGuesses=0;
    answer= Math.floor(Math.random()*100)+1
    console.log(answer);
    input.value="";
    btn.disabled=false;
    guesses.innerHTML="No. of Guesses: 0"
    wrong.innerHTML="The Game has been restarted"

}

const inputField = document.getElementById('input');
const originalPlaceholder = inputField.placeholder;

inputField.addEventListener('focus', () => {
    inputField.placeholder = '';
});

inputField.addEventListener('blur', () => {
    inputField.placeholder = originalPlaceholder;
});
