const canvas = document.getElementById('sandbox');
const context = canvas.getContext('2d');

var focalDistance = 0;
var focalLength = 0;
var aperture = 0;

const reset = event => {
    draw()
}

const handleFocalDistanceOnChange = event => {
    var label = document.getElementById("label-hyperfocal")
    foo = event.target.value
    label.innerText = foo
    draw()
}
const draw = () => {
    var height = window.innerHeight - 200
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = height + 'px';

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(0, canvas.height / 2)

    context.lineTo(canvas.width * (foo / 100), canvas.height / 2)
    context.stroke();

}

