//Fetch Trending Matches
//epl
const eplmatch = () =>{
  fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328')
  .then((response)=>response.json())
  .then((data) =>{
    let result = data.events
    document.getElementById('finished-card-score1').innerHTML = result[0].strStatus.substr(6,8)
    document.getElementById('card-round1').innerHTML = 'Fixtures '+result[0].intRound
    document.getElementById('card-league-img1').src = `./assets/img/leaguehome/${result[0].strLeague}.png`
    document.getElementById('card-hometeam-img1').src = `./assets/img/All Teams/${result[0].strHomeTeam}.png`
    document.getElementById('card-hometeam-name1').innerHTML = result[0].strHomeTeam
    document.getElementById('card-scorehome1').innerHTML = `${result[0].intHomeScore}`
    document.getElementById('card-scoreaway1').innerHTML = `${result[0].intAwayScore}`
    document.getElementById('card-date1').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
    document.getElementById('card-awayteam-img1').src = `./assets/img/All Teams/${result[0].strAwayTeam}.png`
    document.getElementById('card-awayteam-name1').innerHTML = result[0].strAwayTeam
  })
}
eplmatch()
//laliga
const laligamatch = () =>{
  fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335')
  .then((response)=>response.json())
  .then((data) =>{
    let result = data.events
    document.getElementById('finished-card-score2').innerHTML = result[0].strStatus.substr(6,8)
    document.getElementById('card-round2').innerHTML = 'Fixtures '+result[0].intRound
    document.getElementById('card-league-img2').src = `./assets/img/leaguehome/${result[0].strLeague}.png`
    document.getElementById('card-hometeam-img2').src = `./assets/img/All Teams/${result[0].strHomeTeam}.png`
    document.getElementById('card-hometeam-name2').innerHTML = result[0].strHomeTeam
    document.getElementById('card-scorehome2').innerHTML = `${result[0].intHomeScore}`
    document.getElementById('card-scoreaway2').innerHTML = `${result[0].intAwayScore}`
    document.getElementById('card-date2').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
    document.getElementById('card-awayteam-img2').src = `./assets/img/All Teams/${result[0].strAwayTeam}.png`
    document.getElementById('card-awayteam-name2').innerHTML = result[0].strAwayTeam
  })
}
laligamatch()
//bundesliga
const bundesligamatch = () =>{
  fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4331')
  .then((response)=>response.json())
  .then((data) =>{
    let result = data.events
    document.getElementById('finished-card-score3').innerHTML = result[0].strStatus.substr(6,8)
    document.getElementById('card-round3').innerHTML = 'Fixtures '+result[0].intRound
    document.getElementById('card-league-img3').src = `./assets/img/leaguehome/${result[0].strLeague}.png`
    document.getElementById('card-hometeam-img3').src = `./assets/img/All Teams/${result[0].strHomeTeam}.png`
    document.getElementById('card-hometeam-name3').innerHTML = result[0].strHomeTeam
    document.getElementById('card-scorehome3').innerHTML = `${result[0].intHomeScore}`
    document.getElementById('card-scoreaway3').innerHTML = `${result[0].intAwayScore}`
    document.getElementById('card-date3').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
    document.getElementById('card-awayteam-img3').src = `./assets/img/All Teams/${result[0].strAwayTeam}.png`
    document.getElementById('card-awayteam-name3').innerHTML = result[0].strAwayTeam
  })
}
bundesligamatch()


// Fetch League Standing
const laliga = () => {
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4335&s=2020-2021"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.table;
      result.sort((a,b)=>a.intRank - b.intRank);
      let maks = 5
      let temp = ""
      for(let i = 0;i<maks;i++){
          temp += "<tr>"
          temp += `<td><img src=${result[i].strTeamBadge} width="30px"></td>`
          temp += `<td>${result[i].strTeam}</td>`
          temp += `<td>${result[i].intPoints}</td></tr>`
      }
      document.getElementById("laligahomestanding").innerHTML = temp;
    });
};
const premierleague = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021"
    )
      .then((response) => response.json())
      .then((data) => {
        let result = data.table;
        result.sort((a,b)=>a.intRank - b.intRank);
        let maks = 5
        let temp = ""
        for(let i = 0;i<maks;i++){
            temp += "<tr>"
            temp += `<td><img src=${result[i].strTeamBadge} width="30px"></td>`
            temp += `<td>${result[i].strTeam}</td>`
            temp += `<td>${result[i].intPoints}</td></tr>`
        }
        document.getElementById("premierleaguehomestanding").innerHTML = temp;
      });
  };
  const ligue1 = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4334&s=2020-2021"
    )
      .then((response) => response.json())
      .then((data) => {
        let result = data.table;
        result.sort((a,b)=>a.intRank - b.intRank);
        let maks = 5
        let temp = ""
        for(let i = 0;i<maks;i++){
            temp += "<tr>"
            temp += `<td><img src=${result[i].strTeamBadge} width="30px"></td>`
            temp += `<td>${result[i].strTeam}</td>`
            temp += `<td>${result[i].intPoints}</td></tr>`
        }
        document.getElementById("ligue1homestanding").innerHTML = temp;
      });
  };
laliga()
premierleague()
ligue1()

// Fetch Local News
const mainnews = ()=>{
  fetch('./js/uefanews.json')
  .then((response) => response.json())
  .then((data)=>{
    let result = data.articles;
    let maks = 3;
    // document.getElementById('starting-news-home').style.backgroundImage = "url(result[0].urlToImage)";
    // head news image
    document.getElementById('starting-news-home').src = result[0].urlToImage
    document.getElementById('titletopnewshome').innerHTML = result[0].title
    // Other news Image (3)
    document.getElementById('sidenewsimg1').src = result[1].urlToImage
    document.getElementById('sidenewsimg2').src = result[2].urlToImage
    document.getElementById('sidenewsimg3').src = result[3].urlToImage
    // Other news Date (3)
    document.getElementById('sidenewsdate1').innerHTML = result[1].publishedAt
    document.getElementById('sidenewsdate2').innerHTML = result[2].publishedAt
    document.getElementById('sidenewsdate3').innerHTML = result[3].publishedAt
    // Other news Title (3)
    document.getElementById('sidenewstitle1').innerHTML = result[1].title
    document.getElementById('sidenewstitle2').innerHTML = result[2].title
    document.getElementById('sidenewstitle3').innerHTML = result[3].title
  })
}
mainnews()

//Fetch UCL
fetch('https://api.football-data.org/v2/competitions/CL/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "7cfca04522084b4e818a63ea68c6978f"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let maks = 1
    let playername = ""
    let clubname = ""
    let goals = ""
    for(let i = 0;i<maks;i++){
      playername = result[i].player.name
      clubname = result[i].team.name
      goals = result[i].numberOfGoals
    }
    document.getElementById('statscl-player-name').innerHTML = playername;
    document.getElementById('statscl-club-name').innerHTML = clubname;
    document.getElementById('statscl-goals').textContent += goals
    document.getElementById('statscl-goals').textContent += " Goals"
})


// Fetch Top Scorer EPL
fetch('https://api.football-data.org/v2/competitions/PL/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "73c5bf0c1c30422cbeb8b1d734a1859e"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let maks = 1
    let playername = ""
    let clubname = ""
    let goals = ""
    for(let i = 0;i<maks;i++){
      playername = result[i].player.name
      clubname = result[i].team.name
      goals = result[i].numberOfGoals
    }
    document.getElementById('statsepl-player-name').innerHTML = playername;
    document.getElementById('statsepl-club-name').innerHTML = clubname;
    document.getElementById('statsepl-goals').textContent += goals
    document.getElementById('statsepl-goals').textContent += " Goals"
})
//Fetch La Liga
fetch('https://api.football-data.org/v2/competitions/PD/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "73c5bf0c1c30422cbeb8b1d734a1859e"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let maks = 1
    let playername = ""
    let clubname = ""
    let goals = ""
    for(let i = 0;i<maks;i++){
      playername = result[i].player.name
      clubname = result[i].team.name
      goals = result[i].numberOfGoals
    }
    document.getElementById('statslaliga-player-name').innerHTML = playername;
    document.getElementById('statslaliga-club-name').innerHTML = clubname;
    document.getElementById('statslaliga-goals').textContent += goals
    document.getElementById('statslaliga-goals').textContent += " Goals"
    
})
//Fetch Bundesliga
fetch('https://api.football-data.org/v2/competitions/BL1/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "73c5bf0c1c30422cbeb8b1d734a1859e"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let maks = 1
    let playername = ""
    let clubname = ""
    let goals = ""
    for(let i = 0;i<maks;i++){
      playername = result[i].player.name
      clubname = result[i].team.name
      goals = result[i].numberOfGoals
    }
    document.getElementById('statsbl-player-name').innerHTML = playername;
    document.getElementById('statsbl-club-name').innerHTML = clubname;
    document.getElementById('statsbl-goals').textContent += goals
    document.getElementById('statsbl-goals').textContent += " Goals"
})

//Fetch SerieA
fetch('https://api.football-data.org/v2/competitions/SA/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "7cfca04522084b4e818a63ea68c6978f"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let maks = 1
    let playername = ""
    let clubname = ""
    let goals = ""
    for(let i = 0;i<maks;i++){
      playername = result[i].player.name
      clubname = result[i].team.name
      goals = result[i].numberOfGoals
    }
    document.getElementById('statsseriea-player-name').innerHTML = playername;
    document.getElementById('statsseriea-club-name').innerHTML = clubname;
    document.getElementById('statsseriea-goals').textContent += goals
    document.getElementById('statsseriea-goals').textContent += " Goals"
})
//Fetch Ligue1
fetch('https://api.football-data.org/v2/competitions/FL1/scorers',{
    "method" : "GET",
    "headers" : {
        "X-Auth-Token" : "7cfca04522084b4e818a63ea68c6978f"
    }
})
.then(response => response.json())
.then((data)=>{
    let result = data.scorers
    let maks = 1
    let playername = ""
    let clubname = ""
    let goals = ""
    for(let i = 0;i<maks;i++){
      playername = result[i].player.name
      clubname = result[i].team.name
      goals = result[i].numberOfGoals
    }
    document.getElementById('statsligue1-player-name').innerHTML = playername;
    document.getElementById('statsligue1-club-name').innerHTML = clubname;
    document.getElementById('statsligue1-goals').textContent += goals
    document.getElementById('statsligue1-goals').textContent += " Goals"
})