let input = document.getElementById(`inputP2`);
let inputBtn = document.getElementById(`inputBtnP2`);
let colSec = document.getElementById(`colSec`);
let toDoColumn = document.getElementById(`toDoCol`);


let columns = document.getElementsByClassName(`column`);
const columnArray = Array.from(columns)
console.log(columnArray);

// add column;

let addColBtn = document.createElement(`button`);
addColBtn.setAttribute(`id`,`addColBtn`)
addColBtn.classList.add(`rounded-pill`)
addColBtn.innerText= `create new column`;
 let inputSec = document.getElementById(`inputSec`);
 inputSec.appendChild(addColBtn);

 function addCol() {
  let newCol = document.createElement(`div`);
  newCol.classList.add(`column`);
  colSec.appendChild(newCol);
  let newColHeaderDiv = document.createElement(`div`);
  newColHeaderDiv.classList.add(`headerColDiv`);
  newCol.appendChild(newColHeaderDiv);
  let newColHeaderDivHeader = document.createElement(`h2`);
  newColHeaderDivHeader.classList.add(`text-center`,`text-white`)
  newColHeaderDivHeader.innerText = prompt(`what would you like to call your new column?`);
  newColHeaderDiv.appendChild(newColHeaderDivHeader);
  columnArray.push(newCol)
 }

 addColBtn.addEventListener(`click`,addCol)


//  tasks

function addTask() {
  let newTask = document.createElement(`div`);
  newTask.classList.add(`mainTaskDiv`);
  let taskText = document.createElement(`p`);
  taskText.classList.add(`text-center`)
  taskText.innerText= input.value;
  newTask.appendChild(taskText);


  let btnDiv = document.createElement(`div`);
  btnDiv.classList.add(`btnDiv`)
  newTask.appendChild(btnDiv)
function modify() {
  taskText.innerText=prompt(`change task to?`)
}
  let modifyBtn = document.createElement(`button`);
  modifyBtn.classList.add(`bg-warning`,`text-white`);
  modifyBtn.innerText = `modify`
  btnDiv.appendChild(modifyBtn)
  modifyBtn.addEventListener(`click`,modify)

  function msa7() {
    newTask.remove()
  }
  let deleteBtn = document.createElement(`button`);
  deleteBtn.classList.add(`bg-danger`,`text-white`);
  deleteBtn.innerText = `delete`
  btnDiv.appendChild(deleteBtn);
  deleteBtn.addEventListener(`click`,msa7)

  toDoColumn.lastElementChild.appendChild(newTask);
  input.value= ``;
// select
  let select = document.createElement(`select`);
  btnDiv.appendChild(select)
  columnArray.forEach(column => {
    
    let option = document.createElement(  `option`  );
    option.value = column.firstElementChild.firstElementChild.innerText;
    option.textContent = column.firstElementChild.firstElementChild.innerText;
    select.appendChild(option);
  }); 
  
  // make task change place with select
  function move() {
   if (select.value == `To Do`) {
    document.getElementById(`toDoCol`).appendChild(newTask)
   }else if (select.value == `Doing`) {
    document.getElementById(`doingCol`).appendChild(newTask)
   }else if (select.value == `Done`) {
    document.getElementById(`doneCol`).appendChild(newTask)
   }else{
    colSec.lastElementChild.appendChild(newTask)
   }
      
    }
  
  select.addEventListener(`change`,move);

}
inputBtn.addEventListener(`click`,addTask)
console.log(columns.length);

