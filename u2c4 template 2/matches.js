// write js code here corresponding to matches.html

var matchData = JSON.parse(localStorage.getItem("schedule"));
console.log(matchData);
var favArr = JSON.parse(localStorage.getItem("favourites"))||[];

ObjectData(matchData)

function ObjectData(data){
 
    data.forEach(function(elem){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.MatchNo;

    var td2 = document.createElement("td");
    td2.innerText = elem.TeamA;

    var td3 = document.createElement("td");
    td3.innerText = elem.TeamB;

    var td4 = document.createElement("td");
    td4.innerText = elem.Date;

    var td5 = document.createElement("td");
    td5.innerText = elem.Venue;

    var td6 = document.createElement("td");
    td6.innerText = "Add as favourites";
    td6.style.color = "green";
    td6.style.cursor =  "pointer";
    td6.addEventListener("click", function(){
        favourite(elem);
    })

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
    })}

    function favourite(elem){
        favArr.push(elem);
        localStorage.setItem("favourites",JSON.stringify(favArr));
        var arr = JSON.parse(localStorage.getItem("favourites"));
    }