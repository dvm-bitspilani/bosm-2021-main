window.onload = function () {
  document.querySelector(".spinner").style.display = "none";
};

function changeText() {
  console.log("I am here");
  if (
    document.getElementsByClassName("student")[0].value === "School Student"
  ) {
    console.log("I'm school");
    document.getElementsByClassName("studyYear")[0].innerHTML = "Class";
    document.getElementsByClassName("collegeName")[0].innerHTML =
      "Type Your School Name";
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
    document.getElementsByClassName("collegeName")[0].innerHTML =
      "Type Your College Name";
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

function getsportsvalue() {
  if (sportsarr.length == 0) {
    selected_sport.innerHTML = "";
  }
  const val = document.getElementById("sports_opt").value;
  const sports_id = document.getElementById("sports_opt")[
    document.getElementById("sports_opt").selectedIndex
  ].id;
  var div = document.createElement("div");
  div.className += "sports";
  var span = document.createElement("span");
  span.className += "sports-name";
  span.innerHTML = val;
  div.appendChild(span);
  selected_sport.appendChild(div);
  div.innerHTML +=
    '<i class="fas fa-times" style="padding-left:1vh;color:#34aafc"></i>';
  div.onclick = function () {
    this.parentNode.removeChild(this);
    const x = this.getElementsByTagName("span");
    console.log(x[0].innerHTML);
    console.log(document.getElementsByClassName("sports-tag")[5]);
    for (var i = 0; i < no_of_sports; i++) {
      if (
        x[0].innerHTML ==
        document.getElementsByClassName("sports-tag")[i].innerHTML
      ) {
        document.getElementsByClassName("sports-tag")[i].disabled = false;
        for (var j = 0; j < sportsarr.length; j++) {
          if (
            sportsarr[j] ==
            parseInt(document.getElementsByClassName("sports-tag")[i].id)
          ) {
            sportsarr.splice(j, 1);
            j--;
          }
        }
        console.log(sportsarr);
      }
    }
  };
  document.getElementById("sports_opt").options[
    document.getElementById("sports_opt").selectedIndex
  ].disabled = true;
  console.log(val);
  console.log(sports_id);
  sportsarr.push(parseInt(sports_id));
  console.log(sportsarr);
}

function getcollegeid() {
  const val = document.getElementById("college_opt").value;
  console.log(val);
  collegeid = parseInt(val);
  console.log(collegeid);
}

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
