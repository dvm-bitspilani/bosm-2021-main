var selected_sport = document.getElementsByClassName("selected-sports")[0];
var sports_opt = document.getElementById("sports_opt");
sportsarr = [];
var a = [];
var totalMembers = 0;
var yos_value;
var gender_value;
var collegeid;
var no_of_sports = 4;
var is_coach = false;
let membersArr = [];
var isMale = 1;
var isFemale = 0;
var male;
var female;
var totalMalesCopy = 0;
var totalFemalesCopy = 0;


let rulesArr = [
  {name: 'Athletics (100m) (Female)', link: 'https://docs.google.com/document/d/1fLfYwhk_cx_3cdWx4PSMDQOONFOBfcq-/edit'},
  {name: 'Athletics (100m) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (200m) (Female)', link: 'https://docs.google.com/document/d/1fLfYwhk_cx_3cdWx4PSMDQOONFOBfcq-/edit'},
  {name: 'Athletics (200m) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (400m 1-Lap) (Female)', link: 'https://docs.google.com/document/d/1fLfYwhk_cx_3cdWx4PSMDQOONFOBfcq-/edit'},
  {name: 'Athletics (400m 1-Lap) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (4x100m Relay) (Mix)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (4x400m Relay) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (800m 2-Lap) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (Long Jump) (Female)', link: 'https://docs.google.com/document/d/1fLfYwhk_cx_3cdWx4PSMDQOONFOBfcq-/edit'},
  {name: 'Athletics (Long Jump) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Athletics (Shot Put) (Male)', link: 'https://docs.google.com/document/d/1g0JxtB1iyDMgp1Zn1sNSV582IXavCrH6/edit'},
  {name: 'Badminton (Mix)', link: 'https://docs.google.com/document/d/1DMVK7zPAEKoIeakuiKZsSBG6u3BPPB45/edit'},
  {name: 'Basketball (Female)', link: 'https://docs.google.com/document/d/17UoTUdkWFjMHHU2repDxHlFNrvCtfPIyMzR25vEgTNs/edit'},
  {name: 'Basketball (Male)', link: 'https://docs.google.com/document/d/1EB7yxhM5SOZuQ0QSJqKAACi5BccBx0Q3/edit'},
  {name: 'Carrom (Male)', link: 'https://docs.google.com/document/d/15SrFpbGeAOJ39r6wgfnhdfyDQoHTD5TLnnYjOn7Cgh8/edit'},
  {name: 'Chess (Female)', link: 'https://docs.google.com/document/d/15SrFpbGeAOJ39r6wgfnhdfyDQoHTD5TLnnYjOn7Cgh8/edit'},
  {name: 'Chess (Female)', link: 'https://docs.google.com/document/d/15SrFpbGeAOJ39r6wgfnhdfyDQoHTD5TLnnYjOn7Cgh8/edit'},
  {name: 'Chess (Male)', link: 'https://docs.google.com/document/d/15SrFpbGeAOJ39r6wgfnhdfyDQoHTD5TLnnYjOn7Cgh8/edit'},
  {name: 'Chess (Mix)', link: 'https://docs.google.com/document/d/15SrFpbGeAOJ39r6wgfnhdfyDQoHTD5TLnnYjOn7Cgh8/edit'},
  {name: 'Chess (Mix)', link: 'https://docs.google.com/document/d/15SrFpbGeAOJ39r6wgfnhdfyDQoHTD5TLnnYjOn7Cgh8/edit'},
  {name: 'Cricket (Male)', link: 'https://docs.google.com/document/d/17Cvxjhd0EPUh7K-LG_QMU3M0FyGmCUuf/edit'},
  {name: 'Football (Male)', link: 'https://docs.google.com/document/d/1ukDYQf0mvneTZG-3AwQp4gWW1xzKKXjF/edit'},
  {name: 'Frisbee (Mix)', link: 'https://drive.google.com/file/d/1HynQ9cwamBYUYfxfigU3zEDPExYtEwj7/view?usp=sharing'},
  {name: 'Snooker (Female)', link: 'https://drive.google.com/file/d/1kCN4DvqbUzJcgZeWdiTBuCke8T-YII_f/view?usp=sharing'},
  {name: 'Snooker (Male)', link: 'https://drive.google.com/file/d/1kCN4DvqbUzJcgZeWdiTBuCke8T-YII_f/view?usp=sharing'},
  {name: 'Squash (Male)', link: 'https://docs.google.com/document/d/1XNh3mgdKyNUgRfaXFfvRtcAtHyZDFqUs8pVTTDlxcFw/edit'},
  {name: 'Table Tennis Double (Female)', link: 'https://docs.google.com/document/d/1azuwwqAaIGaPVBg957w6Gu2duivzSODU/edit'},
  {name: 'Table Tennis Double (Male)', link: 'https://docs.google.com/document/d/1azuwwqAaIGaPVBg957w6Gu2duivzSODU/edit'},
  {name: 'Table Tennis Single (Female)', link: 'https://docs.google.com/document/d/1azuwwqAaIGaPVBg957w6Gu2duivzSODU/edit'},
  {name: 'Table Tennis Single (Male)', link: 'https://docs.google.com/document/d/1azuwwqAaIGaPVBg957w6Gu2duivzSODU/edit'},
  {name: 'Tennis Double (Male)', link: 'https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit'},
  {name: 'Tennis Double (Mix)', link: 'https://docs.google.com/document/d/1r_tiaNa0JdCie--WigXAc8l7N3mX9HbxCWp7Gdk7pfM/edit'},
  {name: 'Tennis Single (Female)', link: 'https://docs.google.com/document/d/1r_tiaNa0JdCie--WigXAc8l7N3mX9HbxCWp7Gdk7pfM/edit'},
  {name: 'Tennis Single (Male)', link: 'https://docs.google.com/document/d/1BrAT6jcDlk-8nIRdxoao6FqHZ1K2bki0/edit'},
  {name: 'Volleyball (Male)', link: 'https://docs.google.com/document/d/1l2wiSFVtSArU8hNsvkCdNCVNlPileHTd/edit'},
  {name: 'Volleyball (Mix)', link: 'https://docs.google.com/document/d/1l3AcXJg6YmTc8aGVS6TrRtfRpQu3JEb5/edit'}
]

document.getElementById('newMemberBtn').disabled = 'true';
var genderSelect = document.getElementById("member-gender");
var sportSelect = document.getElementById("sports_opt");
genderSelect.addEventListener("change", function () {
    if(genderSelect.value === 'Male') {
        isMale = 1;
        isFemale = 0;
    }
    else {
        isFemale = 1;
        isMale = 0;
    }
    showGenderStatus();
})

sportSelect.addEventListener("change", function () {
  // console.log("changed")

      if (totalMalesCopy < 0 ){
        totalMalesCopy = 0;
        document.getElementById(
          "team-gender-status"
        ).innerHTML = `Remaining Team Members: ${totalMalesCopy} Males and ${totalFemalesCopy} Females `;
      }
      if (totalFemalesCopy < 0 ){
        totalFemalesCopy = 0;
        document.getElementById(
          "team-gender-status"
        ).innerHTML = `Remaining Team Members: ${totalMalesCopy} Males and ${totalFemalesCopy} Females `;
      }
      membersArr = [];
      document.getElementById("members").innerHTML = '';
})
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
    alert("Please fill all mentioned fields");
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
        console.log(result)
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
      document.getElementById("sports_opt").innerHTML = document.getElementById("sports_opt").innerHTML + `<option value="${game.name}" class="sports-tag" id="2">${game.name}</option>`;
    })
    let gamesArr = result.data;
    let newGamesArr = [];
    gamesArr.forEach((game)=>{
      let gameNew = {name: game.name, link: game.rules}
      newGamesArr.push(gameNew);
    })
    console.log(newGamesArr);

  
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

document.getElementById("sports_opt").addEventListener("change", ()=>{
  const game = document.getElementById("sports_opt").value.trim();
  if(membersArr.length == 0){
    let rule = rulesArr.filter(el => el.name == game)
    console.log(rule[0].link);
    window.open(rule[0].link, "_blank");
  }
})

function showGenderStatus() {
  const game = document.getElementById("sports_opt").value.trim();
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
      let totalMales = result.games[0].num_male;
      let totalFemales = result.games[0].num_female;
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
      if(totalMales - isMale <0 ){
        isMale = 0;
        isFemale = 1;
      }
      if(totalFemales - isFemale <0 ){
        isMale = 1;
        isFemale = 0;
      }
      totalMalesCopy = totalMales - isMale;
      totalFemalesCopy = totalFemales - isFemale;

      console.log(totalMales - isMale + totalFemales - isFemale)
      if(totalMales - isMale + totalFemales - isFemale === 0 ){
        document.getElementById('newMemberBtn').disabled = 'true';
        document.getElementById('newMemberAddBtn').disabled = 'true';
      }
      else {
        document.getElementById('newMemberBtn').disabled = '';
        document.getElementById('newMemberAddBtn').disabled = '';
      }
      document.getElementById(
        "team-gender-status"
      ).innerHTML = `Remaining Team Members: ${totalMales-isMale} Males and ${totalFemales-isFemale} Females `;
    })
    .catch(function (error) {
      console.log(error);
    });

}


function deleteMember(member){
  const bitsIdRemove = member.parentElement.dataset.bitsid;
  const removeMember = membersArr.filter(elem => elem.bits_id == bitsIdRemove)
  membersArr.pop(removeMember[0]);
  console.log(membersArr);

  const liArray = document.querySelectorAll("li");
  liArray.forEach((elem)=>{
    if(elem.dataset.bitsid == bitsIdRemove){
      elem.remove();
    }
  })
  showGenderStatus();
}

function showMember(memberDetails) {
  console.log(memberDetails);
  if (memberDetails.name != "") {
    document.getElementById("members").innerHTML = document.getElementById("members").innerHTML + `<li data-bitsid= "${memberDetails.bits_id}"> ${memberDetails.name} ( ${memberDetails.gender.slice(0, 1)} ) <img id ="delete" onclick="deleteMember(this)" src="../assets/cross.png"></img> </li>`;
  }
}



// showMember(membersArr);

function showNewMemberForm() {
  document.querySelector(".add-team-member").style.display = "block";
}

function clearTeamInput(){
  document.getElementById("team-member-name").value = "" ;
  document.getElementById("team-email").value = "" ;
  document.getElementById("team-bitsid").value = "" ;
  document.getElementById("team-phone").value = "" ;
  document.getElementById("team-member-gender").value = "" ;
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

  if(
    teamMemberName == "" ||
    teamemail == "" ||
    teambitsid == "" ||
    teamphone == "" ||
    membergender == ""
  ){
    alert("Please fill all details of member.");
  } else {
    membersArr.push(memberDetails);
    console.log(membersArr);
    showMember(memberDetails);
    showGenderStatus();
    clearTeamInput();
  }
  console.log(membergender);
  if (totalMalesCopy<=0){
    if(membergender==='Male'){
      alert("You have filled the maximum number of Males required");
      clearTeamInput();
      membersArr = [];
      document.getElementById("members").innerHTML = '';
    }

  }
  if (totalFemalesCopy<=0){
    if(membergender==='Female'){
      alert("You have filled the maximum number of Females required");
      clearTeamInput();
      membersArr = [];
      document.getElementById("members").innerHTML = '';
    }
  }
  
}



