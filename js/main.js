function openSection(evt, sectionName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Modals

const openBtns = document.querySelectorAll(".openBtn");

openBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const dialogId = event.target.dataset.dialogId;
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
  });
});

const dialogs = document.querySelectorAll("dialog");

dialogs.forEach((dialog) => {
  const closeBtn = dialog.querySelector(".closeBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      dialog.close();
    });
  }

  dialog.addEventListener("cancel", () => {
    dialog.close();
  });
});
