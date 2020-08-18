let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");
let name = document.getElementById("custName");
let email = document.getElementById("custEmail");

function modelClose() {
  if (document.cookie != "") {
    document.cookie = "modelClose=" + false;
  } else {
    document.cookie = "modelClose=" + true;
  }
  modal.classList.toggle("show-modal");
}

function toggleModal() {
  if (document.cookie == "") {
    console.log("hello");
    if (screen.availWidth > 460) {
      modal.classList.toggle("show-modal");
    } else {
      setTimeout(function () {
        modal.classList.toggle("show-modal");
      }, 5000);
    }
  } else {
    console.log("cookie present");
    return;
  }
}
closeButton.addEventListener("click", modelClose);

function formCookie(e) {
  cookieName = escape(name.value) + ";";
  cookieEmail = escape(email.value) + ";";
  document.cookie = "name=" + cookieName;
  document.cookie = "email=" + cookieEmail;
  modelClose();
  e.preventDefault();
}
