const takipCismi = document.querySelector(".takip-cismi");

document.addEventListener("mousemove", (e) => {
    const imlecX = e.clientX;
    const imlecY = e.clientY;
    takipCismi.style.left = imlecX + "px";
    takipCismi.style.top = imlecY + "px";
});
function boyama() {
    var
        canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        beginPath = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.addEventListener('mousemove', function (event) {
        var x = event.clientX, y = event.clientY;

        if (beginPath) {
            ctx.lineTo(x, y);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(x, y);
            beginPath = true;
        }
    }, false);
}