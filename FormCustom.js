styleTwo.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./Cards Templets/ramadhan.png')";})
styleThree.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./Cards Templets/design3.png')";})
styleFour.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./Cards Templets/design4.png')";})
styleFive.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./Cards Templets/design5.png')";})
styleSix.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./Cards Templets/design6.png')";})
styleSeven.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./Cards Templets/design7.png')";})

var input = document.getElementById("nameInput"); 	//inputnya
var input2 = document.getElementById("dateInput");
var input3 = document.getElementById("timeInput");
var input32 = document.getElementById("timeInput2");
var input4 = document.getElementById("locationInput");
var input5 = document.getElementById("birthdayPersonInput");

var display = document.getElementById("nameOutput");		//outputnya or displaynya
var display2 = document.getElementById("dateOutput");
var display3 = document.getElementById("timeOutput");
var display32 = document.getElementById("timeOutput2");
var display4 = document.getElementById("locationOutput");
var display5 = document.getElementById("birthdayPersonOutput");

var button = document.querySelector('.button');		//buttton save
var button1 = document.querySelector('.button1');

input.addEventListener('input', letter =>{display.textContent = letter.target.value;}) //apa yang ia taip arh "inputnya" ia kluar arah text which is "display"
input2.addEventListener('input', letter2 =>{display2.textContent = letter2.target.value;})
input3.addEventListener('input', letter3 =>{display3.textContent = letter3.target.value;})
input32.addEventListener('input', letter32 =>{display32.textContent = letter32.target.value;})
input4.addEventListener('input', letter4 =>{display4.textContent = letter4.target.value;})
input5.addEventListener('input', letter5 =>{display5.textContent = letter5.target.value;})

var savetolocalstorage = save =>{
  localStorage.setItem("nameInput",display.textContent)
  localStorage.setItem("dateInput",display2.textContent)
  localStorage.setItem("timeInput",display3.textContent)
  localStorage.setItem("timeInput2",display32.textContent)
  localStorage.setItem("locationInput",display4.textContent)
  localStorage.setItem("birthdayPersonInput",display5.textContent)
}
var loadlocalstorage = load =>{
  nameInput.value = localStorage.getItem("nameInput")
  dateInput.value = localStorage.getItem("dateInput")
  timeInput.value = localStorage.getItem("timeInput")
  timeInput2.value = localStorage.getItem("timeInput2")
  locationInput.value = localStorage.getItem("locationInput")
  birthdayPersonInput.value = localStorage.getItem("birthdayPersonInput")

  nameOutput.innerHTML = localStorage.getItem("nameInput");
  dateOutput.innerHTML = localStorage.getItem("dateInput");
  timeOutput.innerHTML = localStorage.getItem("timeInput");
  timeOutput2.innerHTML = localStorage.getItem("timeInput2");
  locationOutput.innerHTML = localStorage.getItem("locationInput");
  birthdayPersonOutput.innerHTML = localStorage.getItem("birthdayPersonInput");
}
button.addEventListener('click',savetolocalstorage)
button1.addEventListener('click',loadlocalstorage)

function fontFamily(value){
  if(value==1){
    document.getElementById("templatebox").style.fontFamily = "Arial";
  }
  else if(value==1.5){
    document.getElementById("templatebox").style.fontFamily = "TImes New Roman";
  }
  else if(value==2){
    document.getElementById("templatebox").style.fontFamily = "Architects Daughter";
  }
  else if(value==3){
    document.getElementById("templatebox").style.fontFamily = "New Tegomin";
  }
  else if(value==4){
    document.getElementById("templatebox").style.fontFamily = "Open San";
  }
  else if(value==5){
    document.getElementById("templatebox").style.fontFamily = "Lobster";
  }
}

function peach(){
  document.getElementById("edittemplatebox").style.backgroundColor = "#f4ede5";
}
function blue(){
  document.getElementById("templatebox").style.backgroundColor = "#d1e4fa";
}
function yellow(){
  document.getElementById("templatebox").style.backgroundColor = "#fff67f";
}
function white(){
  document.getElementById("templatebox").style.backgroundColor = "#FFF";
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var isLeft = 'drag' == data || "drag1" == data || "drag2" == data;
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = "img" + ev.target.id;
  if (!isLeft) {
  sourceNode = document.getElementById(data);
  sourceNode.parentNode.removeChild(sourceNode);
  }
  ev.target.appendChild(nodeCopy);
  ev.stopPropagation();
  return false;
}

greeting1.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Assalamu'alaikum<br /> Warahmatullahi Wabarakatuh";})
greeting2.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Good Day!";})
greeting3.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Greetings!";})
greeting4.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Hello!";})
