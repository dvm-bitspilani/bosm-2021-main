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
  for (let i = 0; i < 4; i++) {
    data[i].map(({ game, teamA, teamB, scoreA,scoreB, time }) => {
      let gameCard = document.createElement("div");
      let dateObj = new Date(time);
      if ((new Date()).getDate() <= dateObj.getDate()) {
        gameCard.className = "fixture-card";
        gameCard.innerHTML = `
  <h6>${game} match</h6>
  <div class="match-info">
      <div class="match-teams">
          <p>${teamA}</p>
          <p>${teamB}</p>
      </div>
      <div class="match-date">
          <p>${dateObj.toString().split(' ')[0]}<span class="match-date-no">${dateObj.getDate()}</span> ${dateObj.toLocaleString("default", {
          month: "short",
        })}</p>
          <h4 class="match-time-no">${dateObj.getHours() + ":" + dateObj.getMinutes()
          }</h4>
      </div>


  </div>>`;
      }

      else {
        gameCard.className = "fixture-card past-events";
        gameCard.innerHTML = `
        <div style="display:flex; justify-content:space-between">
        <h6>${game} match</h6> <span>${dateObj.toString().split(' ')[0]}, ${dateObj.getDate()} + ${dateObj.toLocaleString("default", {
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

    <h6 style="text-align: center;width: 100%;">${(scoreA>scoreB)?teamA:teamB} <span
            style="font-family:'affirmative'">WON</span></h6>
`;   

}
        document
          .getElementById(`${gameName + (i + 1)}`)
          .appendChild(gameCard);
            });
  }
}