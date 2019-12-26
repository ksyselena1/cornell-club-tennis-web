$(document).ready(function () {

  // when user submits form
  $("#newsletterForm").on("submit", function() {
    // Assume that the form input is valid.
    var valid = true;

  // Check whether the email is valid and show an error if not.
  if ( $("#userEmail").prop("validity").valid ) {
    $("#emailError").addClass("hidden");
  } else {
    $("#emailError").removeClass("hidden");
    valid = false;
  };

  // Tell the browser whether the form is valid (sent form data to server).
  return valid;
  });
});
