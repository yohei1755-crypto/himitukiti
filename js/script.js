document.querySelectorAll(".flip-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});
const modal = document.getElementById("imageModal");
const img = document.getElementById("menuImage");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

close.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}