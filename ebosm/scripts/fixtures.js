async function fetchData() {
  for (let k = 0; k < 4; k++) {
    let gameName;
    k == 0
      ? (gameName = "valo")
      : k == 1
        ? (gameName = "csgo")
        : k == 2
          ? (gameName = "codm")
          : (gameName = "fifa");

    const allDates = await fetch(
      `https://bits-bosm.org/bosm2021/registrations/bosm_fixtures/${gameName}/`
    );
    const data = await allDates.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      data[i].map(({ Game, teamA, teamB, score, Time, Type, Status }) => {
    
        let matchType;
       switch (Type) {
          case 0: matchType = "Normal Match"
            break;
         case 1: matchType = "Quarter Finals"
           break;
         case 2: matchType = "Semi Finals"
           break;
case 3: matchType="Finals"
        }
        let scoreA = score.split('-')[0];
        let scoreB = score.split('-')[1];

        let gameCard = document.createElement("div");
        let dateObj = new Date(Time);
        if (Status===2||Status===1) {
          gameCard.className = "fixture-card";
          gameCard.innerHTML = `
  <h6>${matchType}</h6>
  <div class="match-info">
      <div class="match-teams">
          <p>${teamA}</p>
          <p>${teamB}</p>
      </div>
      <div class="match-date">
          <p>${dateObj.toString().split(' ')[0]} <span class="match-date-no">${dateObj.getDate()}</span> ${dateObj.toLocaleString("default", {
            month: "short",
          })}</p>
          <h4 class="match-time-no">${dateObj.getHours() + ":" + dateObj.getMinutes()
            }</h4>
      </div>


  </div>`;
        }

        else {
          gameCard.className = "fixture-card past-events";
          gameCard.innerHTML = `
        <div style="display:flex; justify-content:space-between">
        <h6>${matchType}</h6> <span>${dateObj.toString().split(' ')[0]}, ${dateObj.getDate()} ${dateObj.toLocaleString("default", {
            month: "short",
          })} </span>
    </div>
    <div class="match-info">
        <div class="match-teams">
            <p>${teamA}</p>
            <p>${teamB}</p>
        </div>
        <div class="scores">
            <p>${scoreA}</p>
            <p>${scoreB}</p>
        </div>
    </div>

    <h6 style="text-align: center;width: 100%;">${(scoreA > scoreB) ? teamA : teamB} <span
            style="font-family:'affirmative'">WON</span></h6>
`;

        }
        document
          .getElementById(gameName+ '-'+ (i+1))
          .appendChild(gameCard);
      });
    }
    
    
    let r;
switch (new Date().getDate()) {
  case 21: r=1
    break;
  case 22: r = 2
    break;
  case 23: r = 3
    break;
  case 24: r = 4
    break;
    
}

document.getElementById(gameName+'Tag').setAttribute('href','#'+ gameName +'-'+  r)

  }
}

fetchData();