var selected_sport = document.getElementsByClassName("selected-sports")[0];
var sports_opt = document.getElementById("sports_opt");
sportsarr = [];
var a = [];
var yos_value;
var gender_value;
var collegeid;
var no_of_sports = 4;
var is_coach = false;
let membersArr = [];

let rulesArr = [
  { name: "tennisdouble", link: "https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit" },
  { name: "bgmi", link: "https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit" },
  { name: "valorant", link: "https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit" },
  { name: "codmobile", link: "https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit" },
  { name: "clashroyale", link: "https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit" }
]

function runAnimations() { }

function getcollegeid() {
  const val = document.getElementById("college_opt").value;

  collegeid = parseInt(val);


}

// FORM Submission

function bosmreg() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const sport = document.getElementById("sports_opt").value;
  const gender = document.getElementById("member-gender").value.trim();
  const bits_id = document.getElementById("bits-id").value;
  const team_name = document.getElementById("team-name").value;

  const data = {
    name: name,
    email: email,
    phone: phone,
    bits_id: bits_id,
    game: sport,
    gender: gender,
    team_name: team_name,
    members: membersArr,
  };


  if (
    name == "" ||
    email == "" ||
    phone == ""
    // collegeid == null ||
    // yos_value == null ||
    // gender_value == null
  ) {
    alert("Please fill all mentioned feilds");
  } else {
    fetch("https://bits-bosm.org/bosm2021/registrations/register/", {
      headers: { "content-type": "application/json" },
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        alert(result.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

window.onload = function () {
  document.querySelector(".spinner").style.display = "none";

  fetch("https://bits-bosm.org/bosm2021/registrations/all_games/")
  .then(response => response.json())
  .then((result) =>{
   document.getElementById("sports_opt").innerHTML = `<option value="" selected disabled>Select Your Sport</option>`;
    result.data.forEach((game)=>{
      document.getElementById("sports_opt").innerHTML = document.getElementById("sports_opt").innerHTML + `<option value="${game.name}" class="sports-tag" id="2">${game.name} (${game.gender})</option>`;
    })
    console.log(result.data);
  })
};

$(document).ready(function () {
  $(".college_opt").select2({
    dropdownParent: $("#exampleModal"),
  });
});

function changeInput() {
  console.log("hanjii");
  $("#hideInput").hide();
  $("#newInput").show();
}

function addCollege() {
  const collegeName = document.querySelector("#newCollegeInput").value;
  fetch("https://bits-bosm.org/bosm2021/registrations/add_college/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: collegeName,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      window.location.reload();
    });
}

function showGenderStatus() {
  let sport = document.getElementById("sports_opt").value;
  const game = document.getElementById("sports_opt").value.trim();
  if(membersArr.length == 0){
    // let rule = rulesArr.filter(el => el.name == game)
    // console.log(rule[0].link);
    // window.open(rule[0].link, "_blank");
  }
  const data = {
    game: game,
  };
  console.log(data);
  fetch("https://bits-bosm.org/bosm2021/registrations/game_data/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json;charset=utf-8" }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      let totalMales = result.num_male;
      let totalFemales = result.num_female;
      if(result.team_size == 1){
        document.getElementById("add-team-wrapper").style.display = "none";
      }

      document.getElementById("add-team-wrapper").style.display = "block";
      membersArr.forEach((member) => {
        if (member.gender == "Male") {
          totalMales--;
        }
        else {
          totalFemales--;
        }
      })
      console.log(result);
      document.getElementById(
        "team-gender-status"
      ).innerHTML = `Remaining Team Members: ${totalMales} Males and ${totalFemales} Females `;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showMember(memberDetails) {
  if (memberDetails.name != "") {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(
      `${memberDetails.name} ( ${memberDetails.gender.slice(0, 1)} )`
    ); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("members").appendChild(node);
  }
}

// showMember(membersArr);

function showNewMemberForm() {
  document.querySelector(".add-team-member").style.display = "block";
}

function addTeamMember() {
  document.querySelector(".add-team-member").style.display = "none";
  const teamMemberName = document.getElementById("team-member-name").value;
  const teamemail = document.getElementById("team-email").value;
  const teambitsid = document.getElementById("team-bitsid").value;
  const teamphone = document.getElementById("team-phone").value;
  const membergender = document.getElementById("team-member-gender").value;

  let memberDetails = {
    name: teamMemberName,
    email: teamemail,
    phone: teamphone,
    bits_id: teambitsid,
    gender: membergender,
  };

  if (
    teamMemberName == "" ||
    teamemail == "" ||
    teambitsid == "" ||
    teamphone == "" ||
    membergender == ""
    // collegeid == null ||
    // yos_value == null ||
    // gender_value == null
  ) {
    alert("Please fill all details of member.");
  } else {
    membersArr.push(memberDetails);
    console.log(membersArr);

    showMember(memberDetails);
    showGenderStatus();
  }
}