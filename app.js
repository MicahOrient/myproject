// alert"Aye Weclome The Squad Of G-Bomber!!!!!!!" 
var applicationState = "stopped";
var t;

function changeDate(){
    var date = new Date()
   
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var millisecons = date.getMilliseconds();
    var midday = ( hour >= 12) ? "PM" : "AM";
        
    var months = ['January',  'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Sectember', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var currentDay = days[date.getDay()];
    var day = date.getDay();
    var currentMonth = months[date.getMonth()];
    var year = date.getFullYear();
    
    var date = currentDay + " " + day + " " + currentMonth + " " + year;

    document.getElementById("date-value").innerText = date;

    document.getElementById("time-value" ).innerText = hour + " : " + minutes + " : " + seconds + " : " + midday;

    t = setTimeout(changeDate, 1)
 }
                                                                                                           

document.getElementById("start").addEventListener('click', function (e){

    if (applicationState ==  "stopped"){
        changeDate();
        applicationState = "running";
        e.target.innerText = "Stop";
        document.getElementsByClassName('indicator')[0].style.backgroundColor = "green";

    } else if(applicationState == "running") {
        clearTimeout(t)
        applicationState = "stopped";
        e.target.innerText = "start";
        document.getElementsByClassName('indicator')[0].style.backgroundColor = "red";    
    }
})

// changeDate();














































