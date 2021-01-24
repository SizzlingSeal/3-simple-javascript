//-------------------------------CALCULATOR-----------------------------------------------------
function reset(){ //RESET ALL
    localStorage.x = "";
    localStorage.y = "";
    document.getElementById("headCal").innerHTML = 0;
    document.getElementById("prevCal").innerHTML = "";
}

function numbers(x){ // Happens when entering a number
  
      
     if(localStorage.x.length == 16){
       
     }else if(localStorage.x.includes(".") && x === "."){
      //nothing
      }else if(localStorage.x == "" &&  x == ""){
      //nothing
      }
      else if(localStorage.x.includes(".")){
        localStorage.x =String(localStorage.x)+x;
        document.getElementById("headCal").innerHTML = localStorage.x
      }
      else{
        localStorage.x =String(localStorage.x)+x;
      document.getElementById("headCal").innerHTML = localStorage.x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    
  }

function calculation(operator){  // Happens when entering a operator

  if(localStorage.y != "" && localStorage.x != ""){

    var a = parseFloat(localStorage.x);   
    var b = parseFloat(localStorage.y);
    var final = document.getElementById("prevCal").innerText;
    var res = final.charAt(final.length - 1);
    var total;

    switch(res){
      case '+':
       total = b + a;
        break;
      case '-':
        total = b - a;
        break;
      case 'x':
        total = b * a;
        break;
      case '÷':
        total = b / a;
        break;
    }
    if(total.toString().includes(".")){
      document.getElementById("prevCal").innerHTML = total + " " +  operator;
    }else{
      document.getElementById("prevCal").innerHTML = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " +  operator;
    }
    
    document.getElementById("headCal").innerHTML = 0;
    localStorage.y = total;
    localStorage.x = "";
    
  }else if (localStorage.y == "" && localStorage.x != ""){ // only happens when first operator enter
    localStorage.y = localStorage.x;
    localStorage.x = "";
    var output;
    if(localStorage.y.includes(".")){
      output = localStorage.y
    }else{
      output = localStorage.y.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    switch(operator){
      case '+':
        document.getElementById("prevCal").innerHTML = output + ' +';
        break;
      case '-':
        document.getElementById("prevCal").innerHTML = output + ' -';
        break;
      case 'x':
        document.getElementById("prevCal").innerHTML = output + ' x';
        break;
      case '÷':
        document.getElementById("prevCal").innerHTML = output + ' ÷';
        break;
    }
    document.getElementById("headCal").innerHTML = 0;
    
  }
}

function equals(){
  if(document.getElementById("headCal").innerText == '0' || localStorage.y == ""){
    
  }else{
  var final = document.getElementById("prevCal").innerText;
  var res = final.charAt(final.length - 1);

  calculation(res);

  final = document.getElementById("prevCal").innerText;
  document.getElementById("headCal").innerHTML = final.replace(res, "");
  document.getElementById("prevCal").innerHTML = "";
  localStorage.y = "";
}
}

window.addEventListener("keydown", checkKeyPress, false); //For numpad actions
function checkKeyPress(key){
  if(key.keyCode == "96"){
    document.getElementById("numzero").click();
  }else if (key.keyCode == "97"){
    document.getElementById("numone").click();
  }else if(key.keyCode == "98"){
    document.getElementById("numtwo").click();
  }else if(key.keyCode == "99"){
    document.getElementById("numthree").click();
  }else if(key.keyCode == "100"){
    document.getElementById("numfour").click();
  }else if(key.keyCode == "101"){
    document.getElementById("numfive").click();
  }else if(key.keyCode == "102"){
    document.getElementById("numsix").click();
  }else if(key.keyCode == "103"){
    document.getElementById("numseven").click();
  }else if(key.keyCode == "104"){
    document.getElementById("numeight").click();
  }else if(key.keyCode == "105"){
    document.getElementById("numnine").click();
  }else if(key.keyCode == "13"){
    document.getElementById("equals").click();
  }else if(key.keyCode == "110"){
    document.getElementById("dec").click();
  }else if(key.keyCode == "107"){
    document.getElementById("add").click();
  }else if(key.keyCode == "109"){
    document.getElementById("subtract").click();
  }else if(key.keyCode == "106"){
    document.getElementById("multiply").click();
  }else if(key.keyCode == "111"){
    document.getElementById("divide").click();
  }
}
//------------------------------------------------------------------------------------------------------------------------------
// TO DO LIST


function addlist(){
  var input = document.getElementById("todo").value;
  var iconnodeDelete = document.createTextNode("delete");//set the delete icon
  var iconnodeCheck = document.createTextNode("done");//set the done icon
  if(input == ""){
    //noinput
  }else{
  var node = document.createElement("li"); //creating the list item
  node.setAttribute("class", "todoItem");

  var trash =document.createElement("i"); //creating the delete icon
  trash.setAttribute("class", "material-icons");
  trash.appendChild(iconnodeDelete);

  var done =document.createElement("i"); //creating the done icon
  done.setAttribute("class", "material-icons");
  done.appendChild(iconnodeCheck);

  var textnode = document.createTextNode(input);
  node.appendChild(textnode);
  node.appendChild(trash);
  node.appendChild(done);
  
  document.getElementById("todoList").appendChild(node);
  document.getElementById("todo").value = "";
  function crossout(){
    node.classList.toggle("done");
  
  }
  done.addEventListener("click", crossout);

  function remove(){
    node.classList.toggle("delete");
  }
  trash.addEventListener("click", remove);
}

}

//Alarm Clock
var audio = new Audio('loud_alarm_clock.mp3');

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date().toLocaleDateString("en-US", options);
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("todayDate").innerText = today;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  var setTime = document.getElementById("set").innerText;
  var set = h + ":" + m + session;
  if (setTime == set && s == 00){
    audio.play();
  }
  setTimeout(showTime, 1000);
}

showTime();
function show(){
  var a = document.getElementById("time").value;
  if (a == ""){
    alert("No Time Set!");
  }else{
  var hset = a.substring(0, 2);
  var mset = a.substring(3, 5);
  var sessions = "AM";
 
  if(hset == 0){
    hset = 12;
}

if(hset > 12){
    hset = hset - 12;
    sessions = "PM";
    hset = (hset < 10) ? "0" + hset : hset; 
}
var set = hset+ ":" +mset +sessions;
document.getElementById("set").innerText = set; //for storing the set alarm

document.getElementById("alarmBtn").innerText = "Stop The Alarm";
document.getElementById("alarmBtn").setAttribute("onClick", "stopAlarm()");
document.getElementById("time").disabled = true;

}
}

function stopAlarm(){
  document.getElementById("alarmBtn").innerText = "Set The Alarm";
  document.getElementById("alarmBtn").setAttribute("onClick", "show()");
  document.getElementById("time").disabled = false;
  audio.pause();
}

