function changeText() {
  console.log("I am here");
  if (
    document.getElementsByClassName("student")[0].value === "School Student"
  ) {
    console.log("I'm school");
    document.getElementsByClassName("studyYear")[0].innerHTML = "Class";
    document.querySelector(".changeYear option:nth-child(1)").selected = true;
    document.getElementsByClassName("className")[0].innerHTML =
      "Select Your Class";
    document.getElementById("hideGrad").style.display = "initial";
    document.querySelector(".changeYear option:nth-child(1)").innerHTML =
      "Class";
    document.querySelector(".changeYear option:nth-child(2)").disabled = false;
    document.querySelector(".changeYear option:nth-child(3)").disabled = false;
    document.querySelector(".changeYear option:nth-child(4)").disabled = false;
    document.querySelector(".changeYear option:nth-child(5)").disabled = true;
    document.querySelector(".changeYear option:nth-child(6)").disabled = true;
    document.querySelector(".changeYear option:nth-child(7)").disabled = true;
    document.querySelector(".changeYear option:nth-child(8)").disabled = true;
    document.querySelector(".changeYear option:nth-child(9)").disabled = true;
  } else if (
    document.getElementsByClassName("student")[0].value === "Graduated"
  ) {
    document.getElementById("hideGrad").style.display = "none";
  } else {
    document.getElementsByClassName("studyYear")[0].innerHTML = "Year of Study";
    document.getElementById("hideGrad").style.display = "initial";
    document.querySelector(".changeYear option:nth-child(1)").selected = true;
    document.querySelector(".changeYear option:nth-child(1)").innerHTML =
      "Year of Study";
    document.querySelector(".changeYear option:nth-child(2)").disabled = true;
    document.querySelector(".changeYear option:nth-child(3)").disabled = true;
    document.querySelector(".changeYear option:nth-child(4)").disabled = true;
    document.querySelector(".changeYear option:nth-child(5)").disabled = false;
    document.querySelector(".changeYear option:nth-child(6)").disabled = false;
    document.querySelector(".changeYear option:nth-child(7)").disabled = false;
    document.querySelector(".changeYear option:nth-child(8)").disabled = false;
    document.querySelector(".changeYear option:nth-child(9)").disabled = false;

    document.getElementsByClassName("className")[0].innerHTML =
      "Select Your Year of Study";
  }
}

var selected_sport = document.getElementsByClassName("selected-sports")[0];
var sports_opt = document.getElementById("sports_opt");
sportsarr = [];
var a = [];
var yos_value;
var gender_value;
var collegeid;
var no_of_sports = 4;
var is_coach = false;
// var membersArr = [
//   {
//     name: "Mohit Makwana",
//     email: "f2020xxxx@pilani.bits-pilani.ac.in",
//     phone: "8810608387",
//     bits_id: "2020A7PS0048P",
//     gender: "male",
//   },
//   {
//     name: "Mohit Makwana 2",
//     email: "f2020xxxx1@pilani.bits-pilani.ac.in",
//     phone: "8810608387",
//     bits_id: "2020A7xxx3P",
//     gender: "male",
//   },
//   {
//     name: "Mohit Makwana 3",
//     email: "f2020xxx2@pilani.bits-pilani.ac.in",
//     phone: "8810608387",
//     bits_id: "2020A7xxx2",
//     gender: "male",
//   },
//   {
//     name: "Mohit Makwana 4",
//     email: "f2020xxx3@pilani.bits-pilani.ac.in",
//     phone: "8810608387",
//     bits_id: "2020A7xxxxP",
//     gender: "male",
//   },
// ];

let membersArr = [];


/// This is for showing the rules of the game 

function getsportsvalue() {
  const URL = "https://bits-bosm.org/bosm2021/registrations/sports_rules";
  fetch(URL, {
    method: "GET", 
    body: document.querySelector("#sports_opt").value
  })
  .then((resp) => resp.json())
  .then(function (resp) {
      console.log(resp);
  })
  .catch(function (error) {
      console.log(error);
  });
}


//Lite


function getcollegeid() {
  const val = document.getElementById("college_opt").value;
  console.log(val);
  collegeid = parseInt(val);
  console.log(collegeid);
}

// FORM Submission

function bosmreg() {
  if (document.getElementById("no").checked) {
    console.log(document.getElementsByName("coach")[0].value);
    alert("You need to be above 18 to apply");
  } else {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const college = document.getElementById("college").value;
    const yearofstudy = document.getElementById("yearofstudy").value;
    const aadharFile = document.getElementById("myfile").files[0];

    console.log(aadharFile);
    const occupation = document.getElementById("occupation").value;

    var aadharFormData = new FormData();
    aadharFormData.append("file", aadharFile);
    aadharFormData.append("name", name);
    aadharFormData.append("email", email);
    aadharFormData.append("phone", phone);
    aadharFormData.append("city", city);
    aadharFormData.append("state", state);
    aadharFormData.append("college", college);
    aadharFormData.append("occupation", occupation);
    aadharFormData.append("is_eighteen", true);
    aadharFormData.append("games_ids", sportsarr);
    aadharFormData.append("year_of_study", yearofstudy);

    if (
      name == "" ||
      email == "" ||
      phone == "" ||
      city == "" ||
      state == "" ||
      sportsarr == [] ||
      aadharFile == null
      // collegeid == null ||
      // yos_value == null ||
      // gender_value == null
    ) {
      alert("Please fill all mentioned feilds");
    } else {
      data = {
        name: name,
        email: email,
        phone: phone,
        college: college,
        year_of_study: yearofstudy,
        games_ids: sportsarr,
        city: city,
        state: state,
        occupation: occupation,
        is_eighteen: true,
        file: aadharFormData,
      };

      fetch("https://bits-bosm.org/bosm2021/registrations/register/", {
        method: "PUT",
        body: aadharFormData,
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
      console.log(aadharFormData);
    }
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
  const teamname = document.getElementById("team-name").value;
  const teamemail = document.getElementById("team-email").value;
  const teambitsid = document.getElementById("team-bitsid").value;
  const teamphone = document.getElementById("team-phone").value;
  const membergender = document.getElementById("team-member-gender").value;

  console.log(teamname)

  let memberDetails = {
    name: teamname,
    email: teamemail,
    phone: teamphone,
    bits_id: teambitsid,
    gender: membergender,
  }
  membersArr.push(memberDetails);
  console.log(membersArr)

  showMember(memberDetails);
}