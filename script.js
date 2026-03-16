

let rowNum = 0;
let rowWord = "row";

//input lists
const allInputs = Array.from(document.querySelectorAll('input'));
let inputs = Array.from(document.querySelectorAll('input[class="' + rowWord + rowNum + '"]'));


//random word generator/selector
function randomword(){
    var randWordList = ["APPLE"];
    var randIndex = Math.floor(Math.random() * randWordList.length);
    return randWordList[randIndex];
}
const answer = randomword();
console.log(answer);

//not comparing answer to guess word
function checkGuess(){
    let guessWord = Array.from(document.querySelectorAll('input[class="' + rowWord + (rowNum - 1) + '"]'));
    console.log(guessWord);
        for(let j = 0; j < 5; j++){
            if(guessWord[j].value === answer[j]){
                guessWord[j].style.backgroundColor = "green";
            } 
            else if(answer.includes(guessWord[j].value)){
                guessWord[j].style.backgroundColor = "yellow";
            }
            else{
                guessWord[j].style.backgroundColor = "gray";
            }
            console.log(answer[j]);


        }
};              


function resetInputs() {
  inputs.at(0).focus();
  //move to next input when a letter is typed
  inputs.forEach((input, idx) => {
    input.addEventListener('input', e => {
      const val = e.target.value;
      if (!val) return;
      e.target.value = val[0].toUpperCase();
      const next = inputs[idx + 1];
      if (next) next.focus();
    });
  //move to previous input when backspace is pressed and input is empty
    input.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !e.target.value) {
        const prev = inputs[idx - 1];
        if (prev) {
          prev.focus();
          prev.value = '';
          e.preventDefault();
        };
    } });

  });
};
resetInputs();
//when row is full and enter is pressed move to next row and other stuff
const endRow = [
  document.getElementById('4'),
  document.getElementById('9'), 
  document.getElementById('14'),
  document.getElementById('19'),
  document.getElementById('24')
];

endRow.forEach(row => {
  row.addEventListener('keydown', e => {
    if (e.key === 'Enter' && row.value !== '') {
      rowNum = (rowNum + 1);
      inputs = Array.from(document.querySelectorAll('input[class="' + rowWord + rowNum + '"]'));
      console.log(rowNum);
      const nextRow = inputs[0];
      if (nextRow) nextRow.focus();
      e.preventDefault();
      resetInputs();
      checkGuess();
    }
  });
});



const input0 = document.querySelector('input[id="0"]');
const input1 = document.querySelector('input[id="1"]');
const input2 = document.querySelector('input[id="2"]');
const input3 = document.querySelector('input[id="3"]');
const input4 = document.querySelector('input[id="4"]');
const input5 = document.querySelector('input[id="5"]');
const input6 = document.querySelector('input[id="6"]');
const input7 = document.querySelector('input[id="7"]');
const input8 = document.querySelector('input[id="8"]');
const input9 = document.querySelector('input[id="9"]');
const input10 = document.querySelector('input[id="10"]');
const input11 = document.querySelector('input[id="11"]');
const input12 = document.querySelector('input[id="12"]');
const input13 = document.querySelector('input[id="13"]');
const input14 = document.querySelector('input[id="14"]');
const input15 = document.querySelector('input[id="15"]');
const input16 = document.querySelector('input[id="16"]');
const input17 = document.querySelector('input[id="17"]');
const input18 = document.querySelector('input[id="18"]');
const input19 = document.querySelector('input[id="19"]');
const input20 = document.querySelector('input[id="20"]');
const input21 = document.querySelector('input[id="21"]');
const input22 = document.querySelector('input[id="22"]');
const input23 = document.querySelector('input[id="23"]');
const input24 = document.querySelector('input[id="24"]');
const input25 = document.querySelector('input[id="25"]');
const input26 = document.querySelector('input[id="26"]');
const input27 = document.querySelector('input[id="27"]');
const input28 = document.querySelector('input[id="28"]');
const input29 = document.querySelector('input[id="29"]');







