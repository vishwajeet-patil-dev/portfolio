// cursor Code
const cursor = document.getElementById("cursor");
document.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});
document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});
document.addEventListener("mousemove", ({ clientX, clientY }) => {
  gsap.to(cursor, {
    x: clientX,
    y: clientY,
    duration: 0.5,
    ease: "back.out",
  });
});
gsap.from("#first_header", {
  y: "-100%",
  duration: 0.5,
  opacity: 0,
  delay: 0.3,
  ease: "power1.out",
});
gsap.from("#hero_section h1", {
  y: "-100%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from("#hero_skills", {
  y: "100%",
  opacity: 0,
  ease: "power1.out",
});
gsap.from("#hero_image", {
  y: "10%",
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  ease: "power1.out",
});
gsap.from("#approch_section h3 span", {
  y: "30%",
  opacity: 0,
  duration: 0.2,
  delay: 0.1,
  ease: "power1.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#approch_section h3",
    scroller: "body",
  },
});
// Combine animations into a single timeline with one ScrollTrigger
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#who_am_i_section",
      start: "top 20%",
      end: "+=300",
      scrub: 3,
      pin: true,
    },
  })
  .to("#who_am_i_section h3", {
    scale: 0.5,
  })
  .to(
    "#who_am_i_section > div:nth-child(3)",
    {
      y: "-300px",
    },
    0
  );
gsap.from("#what_i_bring_section h3", {
  y: "40%",
  opacity: 0,
  duration: 0.4,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#what_i_bring_section",
    scroller: "body",
    start: "top 60%",
  },
});
