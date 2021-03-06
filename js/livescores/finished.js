const prem = () => {
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.events;
      let home = result[0].strHomeTeam.split(" ")
      let away = result[0].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-big-match1').innerHTML = result[0].strStatus.substr(6,8)
      document.getElementById('card-round-big-match1').innerHTML = 'Fixtures '+result[0].intRound
      document.getElementById('card-league-img-big-match1').src = `../assets/img/leaguehome/${result[0].strLeague}.png`
      document.getElementById('card-hometeam-img-big-match1').src = `../assets/img/All Teams/${result[0].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-big-match1').innerHTML = home[home.length-1]
      document.getElementById('card-scorehome-big-match1').innerHTML = `${result[0].intHomeScore}`
      document.getElementById('card-scoreaway-big-match1').innerHTML = `${result[0].intAwayScore}`
      document.getElementById('card-date-big-match1').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-big-match1').src = `../assets/img/All Teams/${result[0].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-big-match1').innerHTML = away[away.length-1]


      let homeprem1 = result[1].strHomeTeam.split(" ")
      let awayprem1 = result[1].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem1').innerHTML = result[1].strStatus.substr(6,8)
      document.getElementById('card-round-prem1').innerHTML = 'Fixtures '+result[1].intRound
      document.getElementById('card-league-img-prem1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
      document.getElementById('card-hometeam-img-prem1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem1').innerHTML = homeprem1[homeprem1.length-1]
      document.getElementById('card-scorehome-prem1').innerHTML = `${result[1].intHomeScore}`
      document.getElementById('card-scoreaway-prem1').innerHTML = `${result[1].intAwayScore}`
      document.getElementById('card-date-prem1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem1').innerHTML = awayprem1[awayprem1.length-1]

      let homeprem2 = result[2].strHomeTeam.split(" ")
      let awayprem2 = result[2].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem2').innerHTML = result[2].strStatus.substr(6,8)
      document.getElementById('card-round-prem2').innerHTML = 'Fixtures '+result[2].intRound
      document.getElementById('card-league-img-prem2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
      document.getElementById('card-hometeam-img-prem2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem2').innerHTML = homeprem2[homeprem2.length-1]
      document.getElementById('card-scorehome-prem2').innerHTML = `${result[2].intHomeScore}`
      document.getElementById('card-scoreaway-prem2').innerHTML = `${result[2].intAwayScore}`
      document.getElementById('card-date-prem2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem2').innerHTML = awayprem2[awayprem2.length-1]

      let homeprem3 = result[3].strHomeTeam.split(" ")
      let awayprem3 = result[3].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem3').innerHTML = result[3].strStatus.substr(6,8)
      document.getElementById('card-round-prem3').innerHTML = 'Fixtures '+result[3].intRound
      document.getElementById('card-league-img-prem3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
      document.getElementById('card-hometeam-img-prem3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem3').innerHTML = homeprem3[homeprem3.length-1]
      document.getElementById('card-scorehome-prem3').innerHTML = `${result[3].intHomeScore}`
      document.getElementById('card-scoreaway-prem3').innerHTML = `${result[3].intAwayScore}`
      document.getElementById('card-date-prem3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem3').innerHTML = awayprem3[awayprem3.length-1]

      let homeprem4 = result[4].strHomeTeam.split(" ")
      let awayprem4 = result[4].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem4').innerHTML = result[4].strStatus.substr(6,8)
      document.getElementById('card-round-prem4').innerHTML = 'Fixtures '+result[4].intRound
      document.getElementById('card-league-img-prem4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
      document.getElementById('card-hometeam-img-prem4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem4').innerHTML = homeprem4[homeprem4.length-1]
      document.getElementById('card-scorehome-prem4').innerHTML = `${result[4].intHomeScore}`
      document.getElementById('card-scoreaway-prem4').innerHTML = `${result[4].intAwayScore}`
      document.getElementById('card-date-prem4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem4').innerHTML = awayprem4[awayprem4.length-1]

      let homeprem5 = result[5].strHomeTeam.split(" ")
      let awayprem5 = result[5].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem5').innerHTML = result[5].strStatus.substr(6,8)
      document.getElementById('card-round-prem5').innerHTML = 'Fixtures '+result[5].intRound
      document.getElementById('card-league-img-prem5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
      document.getElementById('card-hometeam-img-prem5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem5').innerHTML = homeprem5[homeprem5.length-1]
      document.getElementById('card-scorehome-prem5').innerHTML = `${result[5].intHomeScore}`
      document.getElementById('card-scoreaway-prem5').innerHTML = `${result[5].intAwayScore}`
      document.getElementById('card-date-prem5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem5').innerHTML = awayprem5[awayprem5.length-1]

      let homeprem6 = result[6].strHomeTeam.split(" ")
      let awayprem6 = result[6].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-prem6').innerHTML = result[6].strStatus.substr(6,8)
      document.getElementById('card-round-prem6').innerHTML = 'Fixtures '+result[6].intRound
      document.getElementById('card-league-img-prem6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
      document.getElementById('card-hometeam-img-prem6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-prem6').innerHTML = homeprem6[homeprem6.length-1]
      document.getElementById('card-scorehome-prem6').innerHTML = `${result[6].intHomeScore}`
      document.getElementById('card-scoreaway-prem6').innerHTML = `${result[6].intAwayScore}`
      document.getElementById('card-date-prem6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-prem6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-prem6').innerHTML = awayprem6[awayprem6.length-1]
    });
};
prem()

const laliga = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335"
      )
        .then((response) => response.json())
        .then((data) => {
          let result = data.events;
          let home = result[0].strHomeTeam.split(" ")
          let away = result[0].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-big-match2').innerHTML = result[0].strStatus.substr(6,8)
          document.getElementById('card-round-big-match2').innerHTML = 'Fixtures '+result[0].intRound
          document.getElementById('card-league-img-big-match2').src = `../assets/img/leaguehome/${result[0].strLeague}.png`
          document.getElementById('card-hometeam-img-big-match2').src = `../assets/img/All Teams/${result[0].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-big-match2').innerHTML = home[home.length-1]
          document.getElementById('card-scorehome-big-match2').innerHTML = `${result[0].intHomeScore}`
          document.getElementById('card-scoreaway-big-match2').innerHTML = `${result[0].intAwayScore}`
          document.getElementById('card-date-big-match2').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-big-match2').src = `../assets/img/All Teams/${result[0].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-big-match2').innerHTML = away[away.length-1]

          let homelaliga1 = result[1].strHomeTeam.split(" ")
          let awaylaliga1 = result[1].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga1').innerHTML = result[1].strStatus.substr(6,8)
          document.getElementById('card-round-laliga1').innerHTML = 'Fixtures '+result[1].intRound
          document.getElementById('card-league-img-laliga1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga1').innerHTML = homelaliga1[homelaliga1.length-1]
          document.getElementById('card-scorehome-laliga1').innerHTML = `${result[1].intHomeScore}`
          document.getElementById('card-scoreaway-laliga1').innerHTML = `${result[1].intAwayScore}`
          document.getElementById('card-date-laliga1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga1').innerHTML = awaylaliga1[awaylaliga1.length-1]

          let homelaliga2 = result[2].strHomeTeam.split(" ")
          let awaylaliga2 = result[2].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga2').innerHTML = result[2].strStatus.substr(6,8)
          document.getElementById('card-round-laliga2').innerHTML = 'Fixtures '+result[2].intRound
          document.getElementById('card-league-img-laliga2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga2').innerHTML = homelaliga2[homelaliga2.length-1]
          document.getElementById('card-scorehome-laliga2').innerHTML = `${result[2].intHomeScore}`
          document.getElementById('card-scoreaway-laliga2').innerHTML = `${result[2].intAwayScore}`
          document.getElementById('card-date-laliga2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga2').innerHTML = awaylaliga2[awaylaliga2.length-1]

          let homelaliga3 = result[3].strHomeTeam.split(" ")
          let awaylaliga3 = result[3].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga3').innerHTML = result[3].strStatus.substr(6,8)
          document.getElementById('card-round-laliga3').innerHTML = 'Fixtures '+result[3].intRound
          document.getElementById('card-league-img-laliga3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga3').innerHTML = homelaliga3[homelaliga3.length-1]
          document.getElementById('card-scorehome-laliga3').innerHTML = `${result[3].intHomeScore}`
          document.getElementById('card-scoreaway-laliga3').innerHTML = `${result[3].intAwayScore}`
          document.getElementById('card-date-laliga3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga3').innerHTML = awaylaliga3[awaylaliga3.length-1]

          let homelaliga4 = result[4].strHomeTeam.split(" ")
          let awaylaliga4 = result[4].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga4').innerHTML = result[4].strStatus.substr(6,8)
          document.getElementById('card-round-laliga4').innerHTML = 'Fixtures '+result[4].intRound
          document.getElementById('card-league-img-laliga4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga4').innerHTML = homelaliga4[homelaliga4.length-1]
          document.getElementById('card-scorehome-laliga4').innerHTML = `${result[4].intHomeScore}`
          document.getElementById('card-scoreaway-laliga4').innerHTML = `${result[4].intAwayScore}`
          document.getElementById('card-date-laliga4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga4').innerHTML = awaylaliga4[awaylaliga4.length-1]

          let homelaliga5 = result[5].strHomeTeam.split(" ")
          let awaylaliga5 = result[5].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga5').innerHTML = result[5].strStatus.substr(6,8)
          document.getElementById('card-round-laliga5').innerHTML = 'Fixtures '+result[5].intRound
          document.getElementById('card-league-img-laliga5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga5').innerHTML = homelaliga5[homelaliga5.length-1]
          document.getElementById('card-scorehome-laliga5').innerHTML = `${result[5].intHomeScore}`
          document.getElementById('card-scoreaway-laliga5').innerHTML = `${result[5].intAwayScore}`
          document.getElementById('card-date-laliga5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga5').innerHTML = awaylaliga5[awaylaliga5.length-1]

          let homelaliga6 = result[6].strHomeTeam.split(" ")
          let awaylaliga6 = result[6].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-laliga6').innerHTML = result[6].strStatus.substr(6,8)
          document.getElementById('card-round-laliga6').innerHTML = 'Fixtures '+result[6].intRound
          document.getElementById('card-league-img-laliga6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
          document.getElementById('card-hometeam-img-laliga6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-laliga6').innerHTML = homelaliga6[homelaliga6.length-1]
          document.getElementById('card-scorehome-laliga6').innerHTML = `${result[6].intHomeScore}`
          document.getElementById('card-scoreaway-laliga6').innerHTML = `${result[6].intAwayScore}`
          document.getElementById('card-date-laliga6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-laliga6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-laliga6').innerHTML = awaylaliga6[awaylaliga6.length-1]
        });
}
laliga()

const bundesliga = () => {
  fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4331"
    )
      .then((response) => response.json())
      .then((data) => {
        let result = data.events;

        let homebl1 = result[1].strHomeTeam.split(" ")
        let awaybl1 = result[1].strAwayTeam.split(" ")
        document.getElementById('finished-card-score-bl1').innerHTML = result[1].strStatus.substr(6,8)
        document.getElementById('card-round-bl1').innerHTML = 'Fixtures '+result[1].intRound
        document.getElementById('card-league-img-bl1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
        document.getElementById('card-hometeam-img-bl1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
        document.getElementById('card-hometeam-name-bl1').innerHTML = homebl1[homebl1.length-1]
        document.getElementById('card-scorehome-bl1').innerHTML = `${result[1].intHomeScore}`
        document.getElementById('card-scoreaway-bl1').innerHTML = `${result[1].intAwayScore}`
        document.getElementById('card-date-bl1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
        document.getElementById('card-awayteam-img-bl1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
        document.getElementById('card-awayteam-name-bl1').innerHTML = awaybl1[awaybl1.length-1]

        let homebl2 = result[2].strHomeTeam.split(" ")
        let awaybl2 = result[2].strAwayTeam.split(" ")
        document.getElementById('finished-card-score-bl2').innerHTML = result[2].strStatus.substr(6,8)
        document.getElementById('card-round-bl2').innerHTML = 'Fixtures '+result[2].intRound
        document.getElementById('card-league-img-bl2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
        document.getElementById('card-hometeam-img-bl2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
        document.getElementById('card-hometeam-name-bl2').innerHTML = homebl2[homebl2.length-1].substr(0,7)
        document.getElementById('card-scorehome-bl2').innerHTML = `${result[2].intHomeScore}`
        document.getElementById('card-scoreaway-bl2').innerHTML = `${result[2].intAwayScore}`
        document.getElementById('card-date-bl2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
        document.getElementById('card-awayteam-img-bl2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
        document.getElementById('card-awayteam-name-bl2').innerHTML = awaybl2[awaybl2.length-1]

        let homebl3 = result[3].strHomeTeam.split(" ")
        let awaybl3 = result[3].strAwayTeam.split(" ")
        document.getElementById('finished-card-score-bl3').innerHTML = result[3].strStatus.substr(6,8)
        document.getElementById('card-round-bl3').innerHTML = 'Fixtures '+result[3].intRound
        document.getElementById('card-league-img-bl3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
        document.getElementById('card-hometeam-img-bl3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
        document.getElementById('card-hometeam-name-bl3').innerHTML = homebl3[homebl3.length-1]
        document.getElementById('card-scorehome-bl3').innerHTML = `${result[3].intHomeScore}`
        document.getElementById('card-scoreaway-bl3').innerHTML = `${result[3].intAwayScore}`
        document.getElementById('card-date-bl3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
        document.getElementById('card-awayteam-img-bl3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
        document.getElementById('card-awayteam-name-bl3').innerHTML = awaybl3[awaybl3.length-1]

        let homebl4 = result[4].strHomeTeam.split(" ")
        let awaybl4 = result[4].strAwayTeam.split(" ")
        document.getElementById('finished-card-score-bl4').innerHTML = result[4].strStatus.substr(6,8)
        document.getElementById('card-round-bl4').innerHTML = 'Fixtures '+result[4].intRound
        document.getElementById('card-league-img-bl4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
        document.getElementById('card-hometeam-img-bl4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
        document.getElementById('card-hometeam-name-bl4').innerHTML = homebl4[homebl4.length-1]
        document.getElementById('card-scorehome-bl4').innerHTML = `${result[4].intHomeScore}`
        document.getElementById('card-scoreaway-bl4').innerHTML = `${result[4].intAwayScore}`
        document.getElementById('card-date-bl4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
        document.getElementById('card-awayteam-img-bl4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
        document.getElementById('card-awayteam-name-bl4').innerHTML = awaybl4[awaybl4.length-1]

        let homebl5 = result[5].strHomeTeam.split(" ")
        let awaybl5 = result[5].strAwayTeam.split(" ")
        document.getElementById('finished-card-score-bl5').innerHTML = result[5].strStatus.substr(6,8)
        document.getElementById('card-round-bl5').innerHTML = 'Fixtures '+result[5].intRound
        document.getElementById('card-league-img-bl5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
        document.getElementById('card-hometeam-img-bl5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
        document.getElementById('card-hometeam-name-bl5').innerHTML = homebl5[homebl5.length-1]
        document.getElementById('card-scorehome-bl5').innerHTML = `${result[5].intHomeScore}`
        document.getElementById('card-scoreaway-bl5').innerHTML = `${result[5].intAwayScore}`
        document.getElementById('card-date-bl5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
        document.getElementById('card-awayteam-img-bl5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
        document.getElementById('card-awayteam-name-bl5').innerHTML = awaybl5[awaybl5.length-1]

        let homebl6 = result[6].strHomeTeam.split(" ")
        let awaybl6 = result[6].strAwayTeam.split(" ")
        document.getElementById('finished-card-score-bl6').innerHTML = result[6].strStatus.substr(6,8)
        document.getElementById('card-round-bl6').innerHTML = 'Fixtures '+result[6].intRound
        document.getElementById('card-league-img-bl6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
        document.getElementById('card-hometeam-img-bl6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
        document.getElementById('card-hometeam-name-bl6').innerHTML = homebl6[homebl6.length-1]
        document.getElementById('card-scorehome-bl6').innerHTML = `${result[6].intHomeScore}`
        document.getElementById('card-scoreaway-bl6').innerHTML = `${result[6].intAwayScore}`
        document.getElementById('card-date-bl6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
        document.getElementById('card-awayteam-img-bl6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
        document.getElementById('card-awayteam-name-bl6').innerHTML = awaybl6[awaybl6.length-1]
      });
}

bundesliga()

const seria = () => {
    fetch(
        "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4332"
      )
        .then((response) => response.json())
        .then((data) => {
          let result = data.events;
          let home = result[0].strHomeTeam.split(" ")
          let away = result[0].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-big-match3').innerHTML = result[0].strStatus.substr(6,8)
          document.getElementById('card-round-big-match3').innerHTML = 'Fixtures '+result[0].intRound
          document.getElementById('card-league-img-big-match3').src = `../assets/img/leaguehome/${result[0].strLeague}.png`
          document.getElementById('card-hometeam-img-big-match3').src = `../assets/img/All Teams/${result[0].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-big-match3').innerHTML = home[home.length-1]
          document.getElementById('card-scorehome-big-match3').innerHTML = `${result[0].intHomeScore}`
          document.getElementById('card-scoreaway-big-match3').innerHTML = `${result[0].intAwayScore}`
          document.getElementById('card-date-big-match3').innerHTML = result[0].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-big-match3').src = `../assets/img/All Teams/${result[0].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-big-match3').innerHTML = away[away.length-1]

          let homesa1 = result[1].strHomeTeam.split(" ")
          let awaysa1 = result[1].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-sa1').innerHTML = result[1].strStatus.substr(6,8)
          document.getElementById('card-round-sa1').innerHTML = 'Fixtures '+result[1].intRound
          document.getElementById('card-league-img-sa1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
          document.getElementById('card-hometeam-img-sa1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-sa1').innerHTML = homesa1[homesa1.length-1]
          document.getElementById('card-scorehome-sa1').innerHTML = `${result[1].intHomeScore}`
          document.getElementById('card-scoreaway-sa1').innerHTML = `${result[1].intAwayScore}`
          document.getElementById('card-date-sa1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-sa1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-sa1').innerHTML = awaysa1[awaysa1.length-1]

          let homesa2 = result[2].strHomeTeam.split(" ")
          let awaysa2 = result[2].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-sa2').innerHTML = result[2].strStatus.substr(6,8)
          document.getElementById('card-round-sa2').innerHTML = 'Fixtures '+result[2].intRound
          document.getElementById('card-league-img-sa2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
          document.getElementById('card-hometeam-img-sa2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-sa2').innerHTML = homesa2[homesa2.length-1]
          document.getElementById('card-scorehome-sa2').innerHTML = `${result[2].intHomeScore}`
          document.getElementById('card-scoreaway-sa2').innerHTML = `${result[2].intAwayScore}`
          document.getElementById('card-date-sa2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-sa2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-sa2').innerHTML = awaysa2[awaysa2.length-1]

          let homesa3 = result[3].strHomeTeam.split(" ")
          let awaysa3 = result[3].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-sa3').innerHTML = result[3].strStatus.substr(6,8)
          document.getElementById('card-round-sa3').innerHTML = 'Fixtures '+result[3].intRound
          document.getElementById('card-league-img-sa3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
          document.getElementById('card-hometeam-img-sa3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-sa3').innerHTML = homesa3[homesa3.length-1]
          document.getElementById('card-scorehome-sa3').innerHTML = `${result[3].intHomeScore}`
          document.getElementById('card-scoreaway-sa3').innerHTML = `${result[3].intAwayScore}`
          document.getElementById('card-date-sa3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-sa3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-sa3').innerHTML = awaysa3[awaysa3.length-1]

          let homesa4 = result[4].strHomeTeam.split(" ")
          let awaysa4 = result[4].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-sa4').innerHTML = result[4].strStatus.substr(6,8)
          document.getElementById('card-round-sa4').innerHTML = 'Fixtures '+result[4].intRound
          document.getElementById('card-league-img-sa4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
          document.getElementById('card-hometeam-img-sa4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-sa4').innerHTML = homesa4[homesa4.length-1]
          document.getElementById('card-scorehome-sa4').innerHTML = `${result[4].intHomeScore}`
          document.getElementById('card-scoreaway-sa4').innerHTML = `${result[4].intAwayScore}`
          document.getElementById('card-date-sa4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-sa4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-sa4').innerHTML = awaysa4[awaysa4.length-1]

          let homesa5 = result[5].strHomeTeam.split(" ")
          let awaysa5 = result[5].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-sa5').innerHTML = result[5].strStatus.substr(6,8)
          document.getElementById('card-round-sa5').innerHTML = 'Fixtures '+result[5].intRound
          document.getElementById('card-league-img-sa5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
          document.getElementById('card-hometeam-img-sa5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-sa5').innerHTML = homesa5[homesa5.length-1]
          document.getElementById('card-scorehome-sa5').innerHTML = `${result[5].intHomeScore}`
          document.getElementById('card-scoreaway-sa5').innerHTML = `${result[5].intAwayScore}`
          document.getElementById('card-date-sa5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-sa5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-sa5').innerHTML = awaysa5[awaysa5.length-1]

          let homesa6 = result[6].strHomeTeam.split(" ")
          let awaysa6 = result[6].strAwayTeam.split(" ")
          document.getElementById('finished-card-score-sa6').innerHTML = result[6].strStatus.substr(6,8)
          document.getElementById('card-round-sa6').innerHTML = 'Fixtures '+result[6].intRound
          document.getElementById('card-league-img-sa6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
          document.getElementById('card-hometeam-img-sa6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
          document.getElementById('card-hometeam-name-sa6').innerHTML = homesa6[homesa6.length-1]
          document.getElementById('card-scorehome-sa6').innerHTML = `${result[6].intHomeScore}`
          document.getElementById('card-scoreaway-sa6').innerHTML = `${result[6].intAwayScore}`
          document.getElementById('card-date-sa6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
          document.getElementById('card-awayteam-img-sa6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
          document.getElementById('card-awayteam-name-sa6').innerHTML = awaysa6[awaysa6.length-1]
        });
}
seria()

const ligue1 = ()=>{
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4334"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.events;

      let homelg1 = result[1].strHomeTeam.split(" ")
      let awaylg1 = result[1].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-lg1').innerHTML = result[1].strStatus.substr(6,8)
      document.getElementById('card-round-lg1').innerHTML = 'Fixtures '+result[1].intRound
      document.getElementById('card-league-img-lg1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
      document.getElementById('card-hometeam-img-lg1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-lg1').innerHTML = homelg1[homelg1.length-1]
      document.getElementById('card-scorehome-lg1').innerHTML = `${result[1].intHomeScore}`
      document.getElementById('card-scoreaway-lg1').innerHTML = `${result[1].intAwayScore}`
      document.getElementById('card-date-lg1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-lg1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-lg1').innerHTML = awaylg1[awaylg1.length-1]

      let homelg2 = result[2].strHomeTeam.split(" ")
      let awaylg2 = result[2].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-lg2').innerHTML = result[2].strStatus.substr(6,8)
      document.getElementById('card-round-lg2').innerHTML = 'Fixtures '+result[2].intRound
      document.getElementById('card-league-img-lg2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
      document.getElementById('card-hometeam-img-lg2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-lg2').innerHTML = homelg2[homelg2.length-1]
      document.getElementById('card-scorehome-lg2').innerHTML = `${result[2].intHomeScore}`
      document.getElementById('card-scoreaway-lg2').innerHTML = `${result[2].intAwayScore}`
      document.getElementById('card-date-lg2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-lg2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-lg2').innerHTML = awaylg2[awaylg2.length-1]

      let homelg3 = result[3].strHomeTeam.split(" ")
      let awaylg3 = result[3].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-lg3').innerHTML = result[3].strStatus.substr(6,8)
      document.getElementById('card-round-lg3').innerHTML = 'Fixtures '+result[3].intRound
      document.getElementById('card-league-img-lg3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
      document.getElementById('card-hometeam-img-lg3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-lg3').innerHTML = homelg3[homelg3.length-1]
      document.getElementById('card-scorehome-lg3').innerHTML = `${result[3].intHomeScore}`
      document.getElementById('card-scoreaway-lg3').innerHTML = `${result[3].intAwayScore}`
      document.getElementById('card-date-lg3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-lg3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-lg3').innerHTML = awaylg3[awaylg3.length-1]

      let homelg4 = result[4].strHomeTeam.split(" ")
      let awaylg4 = result[4].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-lg4').innerHTML = result[4].strStatus.substr(6,8)
      document.getElementById('card-round-lg4').innerHTML = 'Fixtures '+result[4].intRound
      document.getElementById('card-league-img-lg4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
      document.getElementById('card-hometeam-img-lg4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-lg4').innerHTML = homelg4[homelg4.length-1]
      document.getElementById('card-scorehome-lg4').innerHTML = `${result[4].intHomeScore}`
      document.getElementById('card-scoreaway-lg4').innerHTML = `${result[4].intAwayScore}`
      document.getElementById('card-date-lg4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-lg4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-lg4').innerHTML = awaylg4[awaylg4.length-1]

      let homelg5 = result[5].strHomeTeam.split(" ")
      let awaylg5 = result[5].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-lg5').innerHTML = result[5].strStatus.substr(6,8)
      document.getElementById('card-round-lg5').innerHTML = 'Fixtures '+result[5].intRound
      document.getElementById('card-league-img-lg5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
      document.getElementById('card-hometeam-img-lg5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-lg5').innerHTML = homelg5[homelg5.length-1]
      document.getElementById('card-scorehome-lg5').innerHTML = `${result[5].intHomeScore}`
      document.getElementById('card-scoreaway-lg5').innerHTML = `${result[5].intAwayScore}`
      document.getElementById('card-date-lg5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-lg5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-lg5').innerHTML = awaylg5[awaylg5.length-1]

      let homelg6 = result[6].strHomeTeam.split(" ")
      let awaylg6 = result[6].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-lg6').innerHTML = result[6].strStatus.substr(6,8)
      document.getElementById('card-round-lg6').innerHTML = 'Fixtures '+result[6].intRound
      document.getElementById('card-league-img-lg6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
      document.getElementById('card-hometeam-img-lg6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-lg6').innerHTML = homelg6[homelg6.length-1]
      document.getElementById('card-scorehome-lg6').innerHTML = `${result[6].intHomeScore}`
      document.getElementById('card-scoreaway-lg6').innerHTML = `${result[6].intAwayScore}`
      document.getElementById('card-date-lg6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-lg6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-lg6').innerHTML = awaylg6[awaylg6.length-1]
    });
}
ligue1()

const eredivisi = ()=>{
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4337"
  )
    .then((response) => response.json())
    .then((data) => {
      let result = data.events;

      let homeed1 = result[1].strHomeTeam.split(" ")
      let awayed1 = result[1].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-ed1').innerHTML = result[1].strStatus.substr(6,8)
      document.getElementById('card-round-ed1').innerHTML = 'Fixtures '+result[1].intRound
      document.getElementById('card-league-img-ed1').src = `../assets/img/leaguehome/${result[1].strLeague}.png`
      document.getElementById('card-hometeam-img-ed1').src = `../assets/img/All Teams/${result[1].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-ed1').innerHTML = homeed1[homeed1.length-1]
      document.getElementById('card-scorehome-ed1').innerHTML = `${result[1].intHomeScore}`
      document.getElementById('card-scoreaway-ed1').innerHTML = `${result[1].intAwayScore}`
      document.getElementById('card-date-ed1').innerHTML = result[1].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-ed1').src = `../assets/img/All Teams/${result[1].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-ed1').innerHTML = awayed1[awayed1.length-1]

      let homeed2 = result[2].strHomeTeam.split(" ")
      let awayed2 = result[2].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-ed2').innerHTML = result[2].strStatus.substr(6,8)
      document.getElementById('card-round-ed2').innerHTML = 'Fixtures '+result[2].intRound
      document.getElementById('card-league-img-ed2').src = `../assets/img/leaguehome/${result[2].strLeague}.png`
      document.getElementById('card-hometeam-img-ed2').src = `../assets/img/All Teams/${result[2].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-ed2').innerHTML = homeed2[homeed2.length-1]
      document.getElementById('card-scorehome-ed2').innerHTML = `${result[2].intHomeScore}`
      document.getElementById('card-scoreaway-ed2').innerHTML = `${result[2].intAwayScore}`
      document.getElementById('card-date-ed2').innerHTML = result[2].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-ed2').src = `../assets/img/All Teams/${result[2].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-ed2').innerHTML = awayed2[awayed2.length-1]

      let homeed3 = result[3].strHomeTeam.split(" ")
      let awayed3 = result[3].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-ed3').innerHTML = result[3].strStatus.substr(6,8)
      document.getElementById('card-round-ed3').innerHTML = 'Fixtures '+result[3].intRound
      document.getElementById('card-league-img-ed3').src = `../assets/img/leaguehome/${result[3].strLeague}.png`
      document.getElementById('card-hometeam-img-ed3').src = `../assets/img/All Teams/${result[3].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-ed3').innerHTML = homeed3[homeed3.length-1]
      document.getElementById('card-scorehome-ed3').innerHTML = `${result[3].intHomeScore}`
      document.getElementById('card-scoreaway-ed3').innerHTML = `${result[3].intAwayScore}`
      document.getElementById('card-date-ed3').innerHTML = result[3].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-ed3').src = `../assets/img/All Teams/${result[3].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-ed3').innerHTML = awayed3[awayed3.length-1]

      let homeed4 = result[4].strHomeTeam.split(" ")
      let awayed4 = result[4].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-ed4').innerHTML = result[4].strStatus.substr(6,8)
      document.getElementById('card-round-ed4').innerHTML = 'Fixtures '+result[4].intRound
      document.getElementById('card-league-img-ed4').src = `../assets/img/leaguehome/${result[4].strLeague}.png`
      document.getElementById('card-hometeam-img-ed4').src = `../assets/img/All Teams/${result[4].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-ed4').innerHTML = homeed4[homeed4.length-1]
      document.getElementById('card-scorehome-ed4').innerHTML = `${result[4].intHomeScore}`
      document.getElementById('card-scoreaway-ed4').innerHTML = `${result[4].intAwayScore}`
      document.getElementById('card-date-ed4').innerHTML = result[4].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-ed4').src = `../assets/img/All Teams/${result[4].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-ed4').innerHTML = awayed4[awayed4.length-1]

      let homeed5 = result[5].strHomeTeam.split(" ")
      let awayed5 = result[5].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-ed5').innerHTML = result[5].strStatus.substr(6,8)
      document.getElementById('card-round-ed5').innerHTML = 'Fixtures '+result[5].intRound
      document.getElementById('card-league-img-ed5').src = `../assets/img/leaguehome/${result[5].strLeague}.png`
      document.getElementById('card-hometeam-img-ed5').src = `../assets/img/All Teams/${result[5].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-ed5').innerHTML = homeed5[homeed5.length-1]
      document.getElementById('card-scorehome-ed5').innerHTML = `${result[5].intHomeScore}`
      document.getElementById('card-scoreaway-ed5').innerHTML = `${result[5].intAwayScore}`
      document.getElementById('card-date-ed5').innerHTML = result[5].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-ed5').src = `../assets/img/All Teams/${result[5].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-ed5').innerHTML = awayed5[awayed5.length-1]

      let homeed6 = result[6].strHomeTeam.split(" ")
      let awayed6 = result[6].strAwayTeam.split(" ")
      document.getElementById('finished-card-score-ed6').innerHTML = result[6].strStatus.substr(6,8)
      document.getElementById('card-round-ed6').innerHTML = 'Fixtures '+result[6].intRound
      document.getElementById('card-league-img-ed6').src = `../assets/img/leaguehome/${result[6].strLeague}.png`
      document.getElementById('card-hometeam-img-ed6').src = `../assets/img/All Teams/${result[6].strHomeTeam}.png`
      document.getElementById('card-hometeam-name-ed6').innerHTML = homeed6[homeed6.length-1]
      document.getElementById('card-scorehome-ed6').innerHTML = `${result[6].intHomeScore}`
      document.getElementById('card-scoreaway-ed6').innerHTML = `${result[6].intAwayScore}`
      document.getElementById('card-date-ed6').innerHTML = result[6].dateEvent.split("-").reverse().join("/")
      document.getElementById('card-awayteam-img-ed6').src = `../assets/img/All Teams/${result[6].strAwayTeam}.png`
      document.getElementById('card-awayteam-name-ed6').innerHTML = awayed6[awayed6.length-1]
    });
}


