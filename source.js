var canvas = document.getElementById('sandbox');


var context = canvas.getContext('2d');

var foo = 0;
const reset = event => {
    console.log("reset: ", event)
    draw()
}

function draw() {
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
const handleSliderOnChange = event => {
    console.log("handleSliderOnChange: ", event.target.value)
    var label = document.getElementById("label-hyperfocal")
    foo = event.target.value
    label.innerText = foo
    draw()
}