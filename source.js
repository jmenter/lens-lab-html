
const canvas = document.getElementById("sandbox");
const context = canvas.getContext("2d");

var focalDistance = 0;
var focalLength = 0;
var aperture = 0;

const reset = event => {
  draw();
};

const handleFocalDistanceOnChange = event => {
  focalDistance = event.target.value;
  var label = document.getElementById("label-hyperfocal");
  label.innerText = "Focal Distance: " + focalDistance;
  draw();
};

const handleFocalLengthOnChange = event => {
  focalLength = event.target.value;
  var label = document.getElementById("label-dof-far");
  label.innerText = "DoF Far: " + focalLength;
  draw();
};

const handleApertureOnChange = event => {
  aperture = event.target.value;
  var label = document.getElementById("label-focal-distance");
  label.innerText = "Aperture: " + aperture;
  draw();
};

const handleWindowResize = event => {
  draw();
}

const draw = () => {
  console.log("drawing canvas: ", canvas);
  console.log("drawing context: ", context);
  var height = window.innerHeight - 104;
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = height + "px";

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.lineWidth = 5;
  context.strokeStyle = "#ff0000";
  context.beginPath();
  context.moveTo(0, canvas.height / 2);

  context.lineTo(canvas.width * (focalDistance / 100), canvas.height / 1);
  context.stroke();

  context.lineWidth = 5;
  context.strokeStyle = "#00ff00";
  context.beginPath();
  context.moveTo(0, canvas.height / 2);

  context.lineTo(canvas.width * (focalLength / 100), canvas.height / 1.5);
  context.stroke();

  context.lineWidth = 5;
  context.strokeStyle = "#0000ff";
  context.beginPath();
  context.moveTo(0, canvas.height / 2);

  context.lineTo(canvas.width * (aperture / 100), canvas.height / 2);
  context.stroke();
};
