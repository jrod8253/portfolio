////NAVBAR////
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector(".navbar_toggle-button");
  const dropdownMenu = document.querySelector(".navbar_dropdown");
  const navbarLinks = document.querySelectorAll(".navbar_link");


  toggleButton.addEventListener("click", function() {
    dropdownMenu.classList.toggle("show");
  });

  // Function to close the dropdown menu when a link is clicked
  function closeDropdownMenu() {
    dropdownMenu.classList.remove("show");
  }

  // Attach click event listener to each navbar link to close the dropdown
  navbarLinks.forEach(function(link) {
    link.addEventListener("click", closeDropdownMenu);
  });
});
