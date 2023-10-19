// Separate JavaScript file for handling the toggle functionality
let navigate_icon = document.getElementById("navigate-icon");
let side_nav = document.getElementById("side-nav");
let bottom_nav_wrapper = document.getElementById("bottom-nav-wrapper");
let icon_element = document.getElementById("icon-element"); // Add this line to get the icon element

// Function to toggle the visibility of the side-nav and change the icon
function toggleSideNav() {
    if (side_nav.style.display === "none" || side_nav.style.display === "") {
        side_nav.style.display = "block";
        bottom_nav_wrapper.style.display = "none";
        // Change the icon to a different one when side-nav is shown
        icon_element.classList.remove("fa-bars-staggered");
        icon_element.classList.add("fa-close"); // You can use any other icon class you prefer
    } else {
        side_nav.style.display = "none";
        bottom_nav_wrapper.style.display = "block";
        // Change the icon back to the original one when side-nav is hidden
        icon_element.classList.remove("fa-close");
        icon_element.classList.add("fa-bars-staggered");
    }
}

// Get all the links inside the side-nav
let sideNavLinks = document.querySelectorAll("#side-nav a");

// Add a click event listener to each link to hide the side-nav
sideNavLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        toggleSideNav();
    });
});

// Add a click event listener to the navigate_icon
navigate_icon.addEventListener("click", toggleSideNav);


// more services btn
let more_services = document.getElementById("more-services");
let angel_btn = document.getElementById("angel-btn");
let services_links = document.getElementById("services-links");

// Function to toggle the visibility of the side-nav and change the icon
function more() {
    if (more_services.style.display === "none" || more_services.style.display === "") {
        more_services.style.display = "block";
        angel_btn.style.display = "none";
        services_links.style.paddingBottom = "1em";
       
    } else {
        more_services.style.display = "none"; 
    }
}

// Add a click event listener to the navigate_icon
angel_btn.addEventListener("click", more);



// live chat chip 
function toggleContactList() {
  var contactList = document.getElementById('contact-list');
  if (contactList.style.display === 'none' || contactList.style.display === '') {
      contactList.style.display = 'block';
  } else {
      contactList.style.display = 'none';
  }
}

function closeContactOption() {
  var contactOption = document.getElementById('contact-option');
  contactOption.style.display = 'none';
}


 
 
 // Get a NodeList of all elements with the "clickable" class
  var clickableElements = document.querySelectorAll('.clickable');

  // Add a click event listener to each clickable element
  clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
      // Get the target page URL from the data-href attribute of the clicked element
      var targetPage = element.getAttribute('data-href');
      
      // Navigate to the target page
      window.location.href = targetPage;
    });
  });








// platfrom list animation when mouse hover animation will stop, also when mouse out animation again start
const container = document.getElementById('slider-container');
const slider = document.getElementById('platform-slider');

let isPaused = false;

container.addEventListener('mouseenter', () => {
  isPaused = true;
  slider.style.animationPlayState = 'paused';
});

container.addEventListener('mouseleave', () => {
  isPaused = false;
  slider.style.animationPlayState = 'running';
});

// Check if the tab loses focus (e.g., user switches tabs)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    isPaused = true;
    slider.style.animationPlayState = 'paused';
  } else {
    if (!isPaused) {
      slider.style.animationPlayState = 'running';
    }
  }
});


// review slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".review-slider");
  const slides = document.querySelectorAll(".review-slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const progressBar = document.getElementById("progress");

  let currentSlide = 0;

  function updateSlider() {
      slides.forEach((slide, index) => {
          slide.style.display = index === currentSlide ? "block" : "none";
      });
      updateProgressBar();
  }

  function updateProgressBar() {
      const progressWidth = ((currentSlide + 1) / slides.length) * 100 + "%";
      progressBar.style.width = progressWidth;
  }

  prevButton.addEventListener("click", function () {
      if (currentSlide > 0) {
          currentSlide--;
          updateSlider();
      }
  });

  nextButton.addEventListener("click", function () {
      if (currentSlide < slides.length - 1) {
          currentSlide++;
          updateSlider();
      }
  });

  updateSlider();
});






  // Get a NodeList of all elements with the "clickable" class
  var clickableElements = document.querySelectorAll('.clickable');

  // Add a click event listener to each clickable element
  clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
      // Get the target page URL from the data-href attribute of the clicked element
      var targetPage = element.getAttribute('data-href');
      
      // Navigate to the target page
      window.location.href = targetPage;
    });
  });



// Accordion JavaScript
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");

// Open the first panel by default
acc[0].classList.add("active");
panels[0].style.maxHeight = panels[0].scrollHeight + "px";

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Close all panels and reset icons
        for (var j = 0; j < panels.length; j++) {
            panels[j].style.maxHeight = null;
            acc[j].classList.remove("active");
        }

        // Toggle the "active" class and open/close the clicked panel
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}




// client email collect from commencons and sent to google sheet
const forms = document.querySelectorAll('.subscribeForm');

        forms.forEach(form => {
            form.addEventListener('submit', e => {
                e.preventDefault();
                fetch(form.action, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        if (response.ok) {
                            alert('Subscription successful!');
                            form.reset();
                        } else {
                            alert('Error! Please try again later.');
                        }
                    })
                    .catch(error => {
                        alert('Error! Please try again later: ' + error.message);
                    });
            });
        });




// contact form data send to google sheet
const contactForms = document.querySelectorAll('.form');
contactForms.forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(form.action, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    // Show the success message
                    document.getElementById('successMessage').style.display = 'block';
                    form.reset();
                } else {
                    alert('Error! Please try again later.');
                }
            })
            .catch(error => {
                alert('Error! Please try again later: ' + error.message);
            });
    });
});

// Add an event listener to the "OK" button
document.getElementById('okButton').addEventListener('click', function() {
    // Hide the success message
    document.getElementById('successMessage').style.display = 'none';
});




document.addEventListener('DOMContentLoaded', function() {
   const links = document.querySelectorAll('a');

   links.forEach(function(link) {
      link.addEventListener('click', function(event) {
         event.preventDefault();

         // Get the href attribute of the clicked link
         const href = this.getAttribute('href');

         // Remove the ".html" extension
         const cleanHref = href.replace('.html', '');

         // Update the browser's address bar
         history.replaceState(null, null, cleanHref);

         // Navigate to the new URL
         window.location.href = cleanHref;
      });
   });
});





