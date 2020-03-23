var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var form = document.querySelector(".write-us");
var map = document.querySelector(".map");
var bigMap = document.querySelector(".modal-map");
var close = document.querySelector(".modal-close");
var closeMap = document.querySelector(".map-modal-close");
var text = document.querySelector(".text");
var email = document.querySelector(".email");
var textarea = document.querySelector(".textarea");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!text.value || !email.value || !textarea.value) {
      evt.preventDefault();
      form.classList.remove("modal-invalid");
      form.classList.add("modal-invalid");
  }
    else {
      evt.preventDefault();
      form.classList.add("modal-invalid");
      form.classList.remove("modal-invalid");
    }
});
