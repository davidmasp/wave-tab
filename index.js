

function preZero(number) {
    var numStringLen = number.toString().length;
    if (numStringLen < 2) {
        return "0" + number;
    } else {
        return number;
    }
}

function getWeekDay(now){
    var weekday = new Array(7);
    weekday[0] = "Sun.";
    weekday[1] = "Mon.";
    weekday[2] = "Tue.";
    weekday[3] = "Wed.";
    weekday[4] = "Thu.";
    weekday[5] = "Fri.";
    weekday[6] = "Sat.";
    
    const weekDay = weekday[now.getDay()];
    return weekDay;
}

function setClocks(){
    var now = new Date();
    //console.log(now.toLocaleTimeString());
    var id = "clock";
    var id2 = "clock2";
    var hours = preZero(now.getHours());
    var minutes = preZero(now.getMinutes());

    document.getElementById("test").innerHTML = now.toString();

    document.getElementById(id).innerHTML = `${hours}:${minutes}`;
    const weekDay = getWeekDay(now)

    var yearInst = now.getFullYear()
    var monthInst = preZero(now.getMonth() + 1);
    var dayInst = preZero(now.getDate());

    var stringDate = `${weekDay}, ${yearInst}-${monthInst}-${dayInst}`;
    document.getElementById(id2).innerHTML = stringDate;
    setInterval(setClocks(), 300);
}

setClocks();


// query to search
var inputVal = document.getElementById("searchBar");
console.log(inputVal);
inputVal.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        console.log("Enter");
        //checks whether the pressed key is "Enter"
        redirectSearch(e);
    }
});

function redirectSearch(e) {
    var query = e.target.value;
    var textValue = query.substring(3);
    console.log(textValue);
    if (query.startsWith("/g")) {
        redirectGoogleSearch(textValue);
    } else if (query.startsWith("/d")){
        redirectDDGSearch(textValue);
    } else{
        redirectGoogleSearch(query);
    }
}

function redirectGoogleSearch(query) {
    baseUrl = `https://www.google.com/search?q=${query}`;
    window.location.replace(baseUrl);
}

function redirectDDGSearch(query) {
    baseUrl = `https://duckduckgo.com/?q=${query}&kp=-1&kl=us-en`
    window.location.replace(baseUrl);
}

// focus in the search bar by default
document.getElementById("searchBar").focus();
document.getElementById("searchBar").select();
