
window.onload = function () {
  document.querySelector(".spinner").style.display = "none";
};



function changeText() {
  if (document.getElementsByClassName('student')[0].value === '1st') {
    document.getElementsByClassName('studyYear')[0].innerHTML = 'Class'
    document.getElementsByClassName('collegeName')[0].innerHTML='Select Your School Name'
    document.getElementsByClassName('className')[0].innerHTML='Select Your Class'

    document.getElementById('hideGrad').style.display = 'initial'
  }
  else if (document.getElementsByClassName('student')[0].value === '4th') {
    document.getElementById('hideGrad').style.display = 'none'

  }
  else {
    document.getElementsByClassName('studyYear')[0].innerHTML = 'Year of Study'
    document.getElementById('hideGrad').style.display ='initial'
    document.querySelector('.changeYear option:nth-child(1)').innerHTML='1st'
    document.querySelector('.changeYear option:nth-child(2)').innerHTML='2nd'
    document.querySelector('.changeYear option:nth-child(3)').innerHTML='3rd'
    document.querySelector('.changeYear option:nth-child(4)').innerHTML = '4th'
    document.getElementsByClassName('collegeName')[0].innerHTML = 'Select Your College Name'
    document.getElementsByClassName('className')[0].innerHTML='Select Your Year of Study'
    
    
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
  div.onclick = function() {
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
  if (document.getElementById('no').checked) {
      console.log(document.getElementsByName('coach')[0].value);
      alert("You need to be above 18 to apply");
    } 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  if (
    name == "" ||
    email == "" ||
    phone == "" ||
    city == "" ||
    state == "" ||
    sportsarr == [] 
    // collegeid == null ||
    // yos_value == null ||
    // gender_value == null
  ) {
    alert("Please fill all mentioned feilds");
  } else {
    data = {
      name: name,
      email_id: email,
      phone: phone,
      // gender: gender_value,
      // year_of_study: yos_value,
      sports_ids: sportsarr,
      // college_id: collegeid,
      city: city,
      state: state,
      // captcha: v,
      // is_coach
    };

    fetch("https://bits-bosm.org/bosm2021/registrations/register", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        alert(result.message);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(data);
  }
}



