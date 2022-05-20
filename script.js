// alert("james")
function calculator() {
  var bmi;
  var category;
  var color;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  bmi =(weight/ Math.pow((height/100), 2)).toFixed(1);

  document.getElementById("weight-val").textContent = `${weight}kg`;
  document.getElementById("height-val").textContent = `${height}cm`;
  document.getElementById("result").textContent = bmi;

  if (bmi < 18.5) {
    category = "Under Weight";
    color = "#ffc44d";
  } else if ( bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
    color = "#0be881"
  } else if ( bmi >= 25 && bmi <= 29.9) {
    category = "Over Weight";
    color= "#ff884d";
  } else {
    category = "Obesse";
    color = "#ff5e57";
  }

  document.getElementById("category").textContent = category;
  document.getElementById("result").style.color = color;
}
