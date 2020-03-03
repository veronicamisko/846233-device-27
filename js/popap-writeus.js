var link = document.querySelector(".contacts-button"); // кнопка Наипшите нам
var popup = document.querySelector(".modal-writeus"); // Модалка с формой
var close = popup.querySelector(".modal-close"); // Кнопка закрытия
var formName = popup.querySelector("[name=name]"); // фокус на поле Имя
var formEmail = popup.querySelector("[name=email]");
var form = popup.querySelector("form"); // для валиации

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("name");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		formName.value = storage;
		formEmail.focus();
	} else {
		formName.focus();
	}
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!formName.value || !formEmail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}else {
		if (isStorageSupport) {
			localStorage.setItem("name", formName.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
