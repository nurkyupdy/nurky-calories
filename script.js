function calculate() {
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity = document.getElementById("activity").value;
  
  let currentIntake;
  let loseWeight;
  
  if (gender === "male") {
    currentIntake = Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5);
  } else {
    currentIntake = Math.round((10 * weight) + (6.25 * height) - (5 * age) - 161);
  }
  
  switch (activity) {
    case "sedentary":
      loseWeight = currentIntake * 0.8;
      break;
    case "lightly-active":
      loseWeight = currentIntake * 0.9;
      break;
    case "moderately-active":
      loseWeight = currentIntake * 1;
      break;
    case "very-active":
      loseWeight = currentIntake * 1.1;
      break;
    case "extra-active":
      loseWeight = currentIntake * 1.2;
      break;
  }
  
  document.getElementById("current-intake").textContent = currentIntake;
  document.getElementById("lose-weight").textContent = loseWeight;
}
