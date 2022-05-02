// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", inputData)

var matchArr = JSON.parse(localStorage.getItem("schedule"))||[];

function inputData(){   
    event.preventDefault();
    var matchObj = {
        MatchNo : masaiForm.matchNum.value,
        TeamA : masaiForm.teamA.value,
        TeamB : masaiForm.teamB.value,
        Date : masaiForm.date.value,
        Venue : masaiForm.venue.value
    };
    matchArr.push(matchObj);
    localStorage.setItem("schedule", JSON.stringify(matchArr));
    window.location = "matches.html";
}
