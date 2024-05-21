// // Get the navbar element
// const navbar = document.getElementById('navbar-example');

// // Define a function to toggle the background color
// function toggleNavbarBackground() {
//     if (window.scrollY === 0) {
//         // When at the top, remove the background color
//         navbar.classList.remove('show-bg');
//         navbar.classList.add('.nav-link, .navbar-nav .nav-link.active');
//     } else {
//         // Otherwise, add the background color
//         navbar.classList.add('show-bg');
//         navbar.classList.remove('.nav-link, .navbar-nav .nav-link.active');
//     }
// }

// // Attach an event listener to the scroll event
// window.addEventListener('scroll', toggleNavbarBackground);

// // Initial call to set the background color based on the initial scroll position
// toggleNavbarBackground();

// -----------------
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  const scrolled = window.scrollY > 600;

  // Add or remove the "scrolled" class based on scroll position
  if (scrolled) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj1 = document.getElementById("value1");
  animateValue(obj1, 0, 850, 1500);
  const obj2 = document.getElementById("value2");
  animateValue(obj2, 0, 230, 1500);
  const obj3 = document.getElementById("value3");
  animateValue(obj3, 0, 9450, 1500);
  const obj4 = document.getElementById("value4");
  animateValue(obj4, 0, 780, 1500);

