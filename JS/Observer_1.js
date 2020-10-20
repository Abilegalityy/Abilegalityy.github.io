const letters = document.querySelectorAll(".greet");

const appearOption = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScrolls = new IntersectionObserver(function (
  entries,
  appearOnScrolls
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appears");
      appearOnScrolls.unobserve(entry.target);
    }
  });
},
appearOption);

letters.forEach((fader) => {
  appearOnScrolls.observe(fader);
});


