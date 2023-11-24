function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour fermer la modal
function closeTheModal() {
  modalbg.style.display = "none";
}

// Ajouter un écouteur d'événements sur l'élément 'close'
closeModal.addEventListener("click", closeTheModal);

document.forms["reserve"].addEventListener("submit", function(e) {
  var isValid = true;

  // Validation du prénom
  var firstName = document.getElementById("first").value;
  if(firstName.length < 2) {
    alert("Le prénom doit contenir au moins 2 caractères.");
    isValid = false;
  }

  // Validation du nom
  var lastName = document.getElementById("last").value;
  if(lastName.length < 2) {
    alert("Le nom doit contenir au moins 2 caractères.");
    isValid = false;
  }

  // Validation de l'email
  var email = document.getElementById("email").value;
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegEx.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    isValid = false;
  }

  // Validation du nombre de concours
  var quantity = document.getElementById("quantity").value;
  if(isNaN(quantity) || quantity === "") {
    alert("Veuillez entrer un nombre valide pour le nombre de concours.");
    isValid = false;
  }

  // Validation du choix d'un bouton radio
  var locations = document.forms["reserve"]["location"];
  var locationSelected = false;
  for(var i = 0; i < locations.length; i++) {
    if(locations[i].checked) {
      locationSelected = true;
      break;
    }
  }
  if(!locationSelected) {
    alert("Veuillez sélectionner un lieu pour le tournoi.");
    isValid = false;
  }

  // Validation de la case des conditions générales
  var termsChecked = document.getElementById("checkbox1").checked;
  if(!termsChecked) {
    alert("Vous devez accepter les conditions d'utilisation.");
    isValid = false;
  }

  // Empêcher l'envoi du formulaire si la validation échoue
  if(!isValid) {
    e.preventDefault();
  }
});
