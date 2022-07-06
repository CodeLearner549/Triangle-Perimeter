// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let x3 = document.getElementById("x3");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");
let y3 = document.getElementById("y3");
let outputAB = document.getElementById("outputAB");
let outputAC = document.getElementById("outputAC");
let outputBC = document.getElementById("outputBC");
let outputPerimeter = document.getElementById("outputPerimeter");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked);

function determineBtnClicked() {
  // Input
  let xA = x1.value;
  let xB = x2.value;
  let xC = x3.value;
  let yA = y1.value;
  let yB = y2.value;
  let yC = y3.value;

  //Store AB, AC, BC
  let AB = dist(xA, yA, xB, yB);
  let AC = dist(xA, yA, xC, yC);
  let BC = dist(xB, yB, xC, yC);

  //Outputs
  outputAB.innerHTML = AB;
  outputAC.innerHTML = AC;
  outputBC.innerHTML = BC;
  outputPerimeter.innerHTML = AB + AC + BC;
}

//Distance
function dist(a, b, c, d) {
  let rise = c - d;
  let run = b - a;
  return Math.sqrt(rise ** 2 + run ** 2);
}
