gsap.from(".hero-section__img-container-1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60,
});

gsap.from(".hero-section__img-container-2", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  x: 60,
});

gsap.from(".hero-section__img-container-3", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60,
});

gsap.from("h1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
});

gsap.from("li>a", {
  opacity: 0,
  y: 100,
  duration: 1,
});
