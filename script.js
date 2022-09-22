/* .js files add interaction to your website */
var factList = [
  "Mental health conditions account for 16% of the global burden of disease and injury in people aged 10-19 years.",
  "Half of all mental health conditions start by 14 years of age but most cases are undetected and untreated.",
  "Globally, depression is one of the leading causes of illness and disability among adolescents.",
  "Suicide is the fourth leading cause of death in 15-19-year-olds.",
  "The consequences of not addressing adolescent mental health conditions extend to adulthood, impairing both physical and mental health and limiting opportunities to lead fulfilling lives as adults."];

  var fact = document.getElementById("fact");
  var btn = document.getElementById("btn");
  var count = 0;

  if (btn){
    btn.addEventListener("click", displayFact);
  }

  function displayFact(){
    fact.innerHTML = factList[count];
    count ++;
    if (count == factList.length){
      count = 0;
    }
  }