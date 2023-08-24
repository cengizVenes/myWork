const takipCismi = document.querySelector(".takip-cismi");

document.addEventListener("mousemove", (e) => {
    const imlecX = e.clientX;
    const imlecY = e.clientY;
    takipCismi.style.left = imlecX + "px";
    takipCismi.style.top = imlecY + "px";
});