// function changeText() {
//   console.log("I am here");
//   if (
//     document.getElementsByClassName("student")[0].value === "School Student"
//   ) {
//     console.log("I'm school");
//     document.getElementsByClassName("studyYear")[0].innerHTML = "Class";
//     document.querySelector(".changeYear option:nth-child(1)").selected = true;
//     document.getElementsByClassName("className")[0].innerHTML =
//       "Select Your Class";
//     document.getElementById("hideGrad").style.display = "initial";
//     document.querySelector(".changeYear option:nth-child(1)").innerHTML =
//       "Class";
//     document.querySelector(".changeYear option:nth-child(2)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(3)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(4)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(5)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(6)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(7)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(8)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(9)").disabled = true;
//   } else if (
//     document.getElementsByClassName("student")[0].value === "Graduated"
//   ) {
//     document.getElementById("hideGrad").style.display = "none";
//   } else {
//     document.getElementsByClassName("studyYear")[0].innerHTML = "Year of Study";
//     document.getElementById("hideGrad").style.display = "initial";
//     document.querySelector(".changeYear option:nth-child(1)").selected = true;
//     document.querySelector(".changeYear option:nth-child(1)").innerHTML =
//       "Year of Study";
//     document.querySelector(".changeYear option:nth-child(2)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(3)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(4)").disabled = true;
//     document.querySelector(".changeYear option:nth-child(5)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(6)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(7)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(8)").disabled = false;
//     document.querySelector(".changeYear option:nth-child(9)").disabled = false;

//     document.getElementsByClassName("className")[0].innerHTML =
//       "Select Your Year of Study";
//   }
// }

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


/// This is for showing the rules of the game 

// function getsportsvalue() {
//   const URL = "https://bits-bosm.org/bosm2021/registrations/sports_rules";
//   fetch(URL, {
//     method: "GET", 
//     body: document.querySelector("#sports_opt").value
//   })
//   .then((resp) => resp.json())
//   .then(function (resp) {
//       console.log(resp);
//   })
//   .catch(function (error) {
//       console.log(error);
//   });
// }


//Lite


function getcollegeid() {
  const val = document.getElementById("college_opt").value;
  console.log(val);
  collegeid = parseInt(val);
  console.log(collegeid);
}

// FORM Submission

function bosmreg() {
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const sport = document.getElementById("sports_opt").value;
    const gender = document.getElementById("member-gender").value;
    const bits_id = document.getElementById("bits-id").value;
    const team_name = document.getElementById("team-name").value;;

    const data ={
      name: name,
      email: email,
      phone: phone,
      bits_id: bits_id,
      game: sport,
      gender: gender,
      team_name : team_name,
      members: membersArr,
    }

    console.log(data);


    if (
      name == "" ||
      email == "" ||
      phone == ""
      // collegeid == null ||
      // yos_value == null ||
      // gender_value == null
    ){
      alert("Please fill all mentioned feilds");
    } else {

      fetch("https://bits-bosm.org/bosm2021/registrations/register/", {
        headers: {'content-type': 'application/json'},
        method: "PUT",
        body: data,
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
  const URL = "https://bits-bosm.org/bosm2021/registrations/get_colleges";
  const college_opt = document.querySelector(".college_opt");

  fetch(URL)
    .then((resp) => resp.json())
    .then(function (resp) {
      console.log(resp);
      for (var i = 0; i < resp.data.length; i++) {
        var opt = document.createElement("option");
        opt.value = resp.data[i].id;
        opt.innerHTML = resp.data[i].name;
        college_opt.appendChild(opt);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
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

function showMember(memberDetails) {

  if (memberDetails.name != ""){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(memberDetails.name); // Create a text node
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
  }

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
  }else{
    
  
    membersArr.push(memberDetails);
    console.log(membersArr)
  
    showMember(memberDetails);
  }
  
}