document.addEventListener("DOMContentLoaded", () => {

  const roles = [
    "MCA Student",
    "Frontend Developer",
    "Future Full-Stack Engineer",
    "UI/UX Designer",
    "React Learner",
    "Django Developer (Upcoming)"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 120;
  const deleteSpeed = 60;
  const delayAfterType = 1600;

  const typingElement = document.getElementById("typing");

  function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), delayAfterType);
      }

    } else {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
  }

  typeEffect();

});
