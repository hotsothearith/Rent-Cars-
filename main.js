let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.reveal('.services-container .box',{delay: 600, origin: 'top'})
sr.reveal('.about-container .box',{delay: 600, origin: 'top'})
sr.reveal('.reviews-container',{delay: 600, origin: 'top'})
sr.reveal('.newsletter .box',{delay: 400, origin: 'bottom'})

document.querySelectorAll('a[href="#"]').forEach(achor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.ScrollIntoView({ bevavior: 'scroll'});
    });
});

// founction search
function searchCars() {
    // Get the search input and convert it to lowercase
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    // Get all car boxes
    const carBoxes = document.querySelectorAll(".services-container .box");
    
    // Loop through each car box
    carBoxes.forEach(box => {
      // Get the car name inside the box and convert it to lowercase
      const carName = box.querySelector("h3").textContent.toLowerCase();
      
      // Check if the car name includes the search input
      if (carName.includes(searchInput)) {
        // Show the box if it matches
        box.classList.remove("hidden");
      } else {
        // Hide the box if it doesn't match
        box.classList.add("hidden");
      }
    });
  }