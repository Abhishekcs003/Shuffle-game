var array= [1, 2, 3, 4, 5, 6, 7, 8, -1];
let tempArray = [1, 2, 3, 4, 5, 6, 7, 8, -1];
let offset = 3;
function select() {
const dropdownValue = document.querySelector("#level").value;

  let array25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, -1]
  let array9 = [1, 2, 3, 4, 5, 6, 7, 8, -1];
  let array16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1];
 if( dropdownValue == 'Hard'){
   array = array25;
   offset = 5   
   document.querySelector(".stack").classList.add("array25");   
   document.querySelector(".stack").classList.remove("array9", "array16");
 }else if( dropdownValue == 'Easy'){
   array = array9;
   offset = 3
   document.querySelector(".stack").classList.add("array9");
   document.querySelector(".stack").classList.remove("array16", "array25");
 } else if(dropdownValue == 'Medium'){
    array = array16
    offset = 4
    document.querySelector(".stack").classList.add("array16");
    document.querySelector(".stack").classList.remove("array9", "array25");
 }
 shuffle();
 render();
}

function shuffle() {
var curIndex = array.length, tempValue, randomIndex;
  while (0 !== curIndex) {
    randomIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;  
    tempValue = array[curIndex];
    array[curIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
   }
 return array;
}

function move(event) {
let targetEle = event.target;
let indexOfEle = array.indexOf(parseInt(targetEle.innerHTML));
console.log(targetEle.innerHTML);
     if(array[indexOfEle-1] == -1){
         let blankIndex = indexOfEle-1;
         swap(indexOfEle,blankIndex);
       }else if(array[indexOfEle+1]== -1){
        let blankIndex = indexOfEle+1;
         swap(indexOfEle,blankIndex);
       }else if(array[indexOfEle+offset]== -1){
         let blankIndex = indexOfEle+offset;
         swap(indexOfEle,blankIndex);
      }else if(array[indexOfEle-offset]== -1){
         let blankIndex = indexOfEle-offset;
         swap(indexOfEle,blankIndex);
        }
   finalresult();
}

function finalresult() {
 var isSolved = true;
 const dropdownValue = document.querySelector("#level").value;
    let tarray3 = [1, 2, 3, 4, 5, 6, 7, 8, -1];
    let tarry4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1];
    let tarray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, -1];
    if(dropdownValue == 'Easy'){
      tempArray= tarray3;    
    }else if(dropdownValue == 'Medium'){
      tempArray = tarry4; 
    }else if(dropdownValue == 'Hard'){
      tempArray = tarray5;
    }
     for(let i=0; i<=array.length; i++){
       if(array[i] != tempArray[i]){
          isSolved = false;
       } 
     }
     if(isSolved) {
       alert('you win');
     }
    }

function render () {
  let renedrHTML = "";
  for(let i = 0; i<array.length;i++){
    if(array[i] == -1 ){
         renedrHTML = renedrHTML + `<button></button>`;
    }else{
       renedrHTML = renedrHTML + `<button>${array[i]}</button>`;    
    }
  }
  
console.log("renedrHTML");
console.log(renedrHTML);
document.querySelector(".stack").innerHTML = renedrHTML;
 }
 window.onload=function() {
  shuffle();
  render();
  document.querySelector("#level").addEventListener("change", select);
  document.querySelector(".again").addEventListener('click', function () {
    shuffle();
    render();
  });

  document.querySelector(".stack").addEventListener("click", move);
}

function swap(clickedIndex, blankIndex){
  let temp  = array[clickedIndex];
  array[clickedIndex] = array[blankIndex];
  array[blankIndex] = temp;
  console.log(array);
  render();
}

