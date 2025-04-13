document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader-container");
  const mainWrapper = document.querySelector(".main-wrapper");

  // Initially hide the main content
  mainWrapper.style.opacity = "0";
  mainWrapper.style.visibility = "hidden";

  // Hide loader and show website content after animation
  setTimeout(() => {
    loader.style.opacity = "0";
    mainWrapper.style.visibility = "visible";
    mainWrapper.style.opacity = "1";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 4500); // Show loader for 1.5 complete animation cycles (3s × 1.5)
});
