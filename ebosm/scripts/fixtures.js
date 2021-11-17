const fixtureContainer = document.getElementsByClassName(".fixtures")[0];


var ids = [1, 2, 3, 4];
const developers = ids.map(() => {
  return [
    {
      year: 2017,
      members: [],
    },

    {
      year: 2018,
      members: [],
    },

    {
      year: 2019,
      members: [],
    },
    {
      year: 2020,
      members: [],
    },
  ];
});


const updategame = async (num) => {
  for (let j = 0; j < 5; j++) {
    let game;
    j == 0
      ? (game = "Frontend")
      : j == 1
      ? (game = "AppDev")
      : j == 2
      ? (game = "Video")
      : j == 3
      ? (game = "Design")
      : (game = "Backend");
    for (let i = 0; i < 4; i++) {
      const mem = await fetch(
        `https://bits-dvm.org/portfolio/members/20${i + 17}/${game}`
      );
      const data = await mem.json();
      developers[j][i].members = data;
    }
  }
  gameContainer.innerHTML = "";

  developers[num].map(({ year, members }) => {
    let gameName = document.createElement("h2");
    let createDiv = document.createElement("div");

    createDiv.innerHTML = "";
    gameName.className = "gameName";
    gameName.innerHTML = year;
    if (members.length != 0) {
      gameContainer.appendChild(gameName);
      gameContainer.appendChild(createDiv);
      createDiv.className = "gameMembers";

      members.map(
        ({
          name,
          designation,
          PhotoLink,
          TwitterLink,
          GithubLink,
          DribbleLink,
          InstagramLink,
          BehanceLink,
          LinkedInLink,
        }) => {
          let member = document.createElement("div");
          member.className = "member";
          member.innerHTML = `
          <div class="memberTopLine"></div>
          <div class="memberImage">
                        <img src="${PhotoLink}">
                    </div>
                    <div class="memberName hide">
                        ${name}
                    </div>
                    <div class="designation hide">
                        ${designation || "Sport"} 
                    </div>
                    <div class="links hide">
                    </div>`;

          createDiv.appendChild(member);
        }
      );
      gameContainer.appendChild(createDiv);
    }
  });
};

const gameChange = (e) => {
  let num = 0;

  for (let i = 0; i < elements.length; i++) {
    elements[i].className = "game";
    if (elements[i] === e) {
      num = i;
    }
  }
  e.classList.add("selected");

  updategame(num);
};
