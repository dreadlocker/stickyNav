window.onload = function () {
  const nav = document.getElementsByClassName("nav")[0];
  const topOfNav = nav.offsetTop;
  const textStyle = document.getElementById("text").style;

  function checkScroll(e) {
    if (window.scrollY >= topOfNav) {
      nav.classList.add("fixed");
      textStyle.paddingTop = nav.offsetHeight + "px"; // give paddingTop to the DOM element under the Nav, so there is no glitch
      return;
    }

    nav.classList.remove("fixed");
    textStyle.paddingTop = "";
  }

  window.addEventListener("scroll", checkScroll);
}