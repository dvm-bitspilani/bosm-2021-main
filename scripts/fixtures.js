const elements = document.getElementsByClassName("game");
const gameContainer = document.querySelector(".fixtureContainer");

var ids = [1, 2, 3, 4, 5];
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



var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);


  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    if (
      selElmnt.options[selElmnt.selectedIndex].innerHTML ==
      selElmnt.options[j].innerHTML
    ) {
      c.setAttribute("class", "same-as-selected");
    }
    c.addEventListener("click", function (e) {

      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (var p = 1; p < sl; p++) {
        if (s.options[p].innerHTML == this.innerHTML) {
          s.selectedIndex = p;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");

          updategame(p - 1);

          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
 
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {

    
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
