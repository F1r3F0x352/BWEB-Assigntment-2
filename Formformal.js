styleOne.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./img/Formal 1.png')";})
styleTwo.addEventListener("click",letter =>{document.getElementById("templatearea").style.backgroundImage = "url('./img/Formal 2.png')";})

var input = document.getElementById("nameInput"); 	//inputnya
var input2 = document.getElementById("dateInput");
var input3 = document.getElementById("timeInput");
var input4 = document.getElementById("locationInput");
var input5 = document.getElementById("birthdayPersonInput");

var display = document.getElementById("nameOutput");		//outputnya or displaynya
var display2 = document.getElementById("dateOutput");
var display3 = document.getElementById("timeOutput");
var display4 = document.getElementById("locationOutput");
var display5 = document.getElementById("birthdayPersonOutput");

var button = document.querySelector('.button');		//buttton save
var button1 = document.querySelector('.button1');

input.addEventListener('input', letter =>{display.textContent = letter.target.value;}) //apa yang ia taip arh "inputnya" ia kluar arah text which is "display"
input2.addEventListener('input', letter2 =>{display2.textContent = letter2.target.value;})
input3.addEventListener('input', letter3 =>{display3.textContent = letter3.target.value;})
input4.addEventListener('input', letter4 =>{display4.textContent = letter4.target.value;})
input5.addEventListener('input', letter5 =>{display5.textContent = letter5.target.value;})

var savetolocalstorage = save =>{
  localStorage.setItem("nameInput",display.textContent)
  localStorage.setItem("dateInput",display2.textContent)
  localStorage.setItem("timeInput",display3.textContent)
  localStorage.setItem("locationInput",display4.textContent)
  localStorage.setItem("birthdayPersonInput",display5.textContent)
}
var loadlocalstorage = load =>{
  nameInput.value = localStorage.getItem("nameInput")
  dateInput.value = localStorage.getItem("dateInput")
  timeInput.value = localStorage.getItem("timeInput")
  locationInput.value = localStorage.getItem("locationInput")
  birthdayPersonInput.value = localStorage.getItem("birthdayPersonInput")

  nameOutput.innerHTML = localStorage.getItem("nameInput");
  dateOutput.innerHTML = localStorage.getItem("dateInput");
  timeOutput.innerHTML = localStorage.getItem("timeInput");
  locationOutput.innerHTML = localStorage.getItem("locationInput");
  birthdayPersonOutput.innerHTML = localStorage.getItem("birthdayPersonInput");
}
button.addEventListener('click',savetolocalstorage)
button1.addEventListener('click',loadlocalstorage)

greeting1.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Assalamu'alaikum<br /> Warahmatullahi Wabarakatuh";})
greeting2.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Good Day!";})
greeting3.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Greetings!";})
greeting4.addEventListener("click", letter => {document.getElementById("greetings_result").innerHTML = "Hello!";})
