const lettersz = document.querySelectorAll(".second");

const appearOptionz = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScrollsz = new IntersectionObserver(function (
  entries,
  appearOnScrollsz
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appearsz");
      appearOnScrolls.unobserve(entry.target);
    }
  });
},
appearOptionz);

lettersz.forEach((fader) => {
  appearOnScrollsz.observe(fader);
});


