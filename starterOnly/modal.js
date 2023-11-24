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
  e.preventDefault();
  var isValid = true;

  // Validation du prénom
  var firstName = document.getElementById("first").value;
  var firstNameError = document.getElementById("first-name-error");
  var firstNameFormData = document.querySelector('.formData#first-form-data');
  if(firstName.length < 2) {
    firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameFormData.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    firstNameError.textContent = "";
    firstNameFormData.setAttribute('data-error-visible', 'false');
  }

  // Validation du nom
  var lastName = document.getElementById("last").value;
  var lastNameError = document.getElementById("last-name-error");
  var lastNameFormData = document.querySelector('.formData#last-form-data');
  if(lastName.length < 2) {
    lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    lastNameFormData.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    lastNameError.textContent = "";
    lastNameFormData.setAttribute('data-error-visible', 'false');
  }

  // Validation de l'email
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("email-error");
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailFormData = document.querySelector('.formData#email-form-data');
  if(!emailRegEx.test(email)) {
    emailError.textContent = "Veuillez entrer une adresse email valide.";
    emailFormData.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    emailError.textContent = "";
    emailFormData.setAttribute('data-error-visible', 'false');
  }

  var birthdate = document.getElementById("birthdate").value;
  var birthdateError = document.getElementById("birthdate-error");
  var birthdateFormData = document.querySelector('.formData#birthdate-form-data');
  if (!birthdate) {
    birthdateError.textContent = "Vous devez entrer votre date de naissance.";
    birthdateFormData.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    birthdateError.textContent = "";
    birthdateFormData.setAttribute('data-error-visible', 'false');
  }

  // Validation du nombre de concours
  var quantity = document.getElementById("quantity").value;
  var quantityError = document.getElementById("quantity-error");
  var quantityFormData = document.querySelector('.formData#quantity-form-data');
  if (isNaN(quantity) || quantity === "") {
    quantityError.textContent = "Veuillez entrer un nombre valide pour le nombre de tournois.";
    quantityFormData.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    quantityError.textContent = "";
    quantityFormData.setAttribute('data-error-visible', 'false');
  }

  // Validation du choix d'un bouton radio
  var locations = document.forms["reserve"]["location"];
  var locationError = document.getElementById("location-error");
  var locationSelected = false;
  for (var i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      locationSelected = true;
      break;
    }
  }
  if (!locationSelected) {
    locationError.textContent = "Vous devez choisir une option.";
    isValid = false;
  } else {
    locationError.textContent = "";
  }

  // Validation de la case des conditions générales
  var termsChecked = document.getElementById("checkbox1").checked;
  var termsError = document.getElementById("terms-error");
  if (!termsChecked) {
    termsError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  } else {
    termsError.textContent = "";
  }

  if (isValid) {
    // Cacher tous les autres éléments de la modal
    var formElements = document.querySelectorAll(".modal-body .formData, .modal-body .btn-submit, .modal-body .text-label");
    formElements.forEach(function(element) {
      element.style.display = 'none';
    });

    // Afficher le message de succès
    var successMessage = document.getElementById("success-message");
    successMessage.textContent = "Merci ! Votre réservation a été reçue.";
    successMessage.style.display = "block";

    // Afficher le bouton "Fermer"
    var closeButton = document.getElementById("close-button");
    closeButton.style.display = "block";

    // Gérer le clic sur le bouton "Fermer"

    closeButton.onclick = function() {
    modalbg.style.display = "none";
    };
  }
  // Empêcher l'envoi du formulaire si la validation échoue
  else {
    e.preventDefault();
  }
});
