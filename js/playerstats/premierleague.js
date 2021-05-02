fetch('https://api.football-data.org/v2/competitions/PL/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "e88f743b2b444752a685b7d76e59b39e"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let temp = "";
    let i = 1;
    result.forEach(element => {
        temp += "<tr>"
        temp += `<td>${i}</td>`
        temp += `<td>${element.player.name}</td>`
        temp += `<td>${element.player.nationality}</td>`
        temp += `<td>${element.team.name}</td>`
        temp += `<td>${element.player.position}</td>`
        temp += `<td>${element.numberOfGoals}</td></tr>`
        i++
    });
    document.getElementById("topscorer-fetch").innerHTML = temp;
})