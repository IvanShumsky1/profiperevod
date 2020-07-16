const accHeading = document.querySelectorAll(".acc-heading");

accHeading.forEach((el) => {
  el.addEventListener("click", function () {
    const nextEl = el.nextElementSibling;
    if (nextEl.style.maxHeight) {
      nextEl.style.maxHeight = null;
    } else {
      nextEl.style.maxHeight = nextEl.scrollHeight + "px";
    }
  });
});
