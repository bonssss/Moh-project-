// // function scrollMedicine(direction) {
// //     const medicineContainer = document.getElementById('medicine');
// //     const containerWidth = medicineContainer.offsetWidth;

// //     if (direction === 'left') {
// //       medicineContainer.scrollBy({
// //         left: -containerWidth,
// //         behavior: 'smooth'
// //       });
// //     } else if (direction === 'right') {
// //       medicineContainer.scrollBy({
// //         left: containerWidth,
// //         behavior: 'smooth'
// //       });
// //     }
// //   }

// // document.querySelector('.menu-toggle').addEventListener('click', function() {
// //   document.querySelector('.navbarlist').classList.toggle('show');
// // });

// // JavaScript to handle the click event and toggle the menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navbarList = document.querySelector('.navbarlist');

// menuToggle.addEventListener('click', function(event) {
//   event.stopPropagation(); // Prevent click event from reaching document
//   navbarList.classList.toggle('show');
// });

// // Event listener to hide menu when anywhere on the screen is clicked
// document.addEventListener('click', function(event) {
//   // Check if the clicked element is not inside the menu or the menu toggle button
//   if (!navbarList.contains(event.target) && event.target !== menuToggle) {
//     navbarList.classList.remove('show');
//   }
// });

// JavaScript to handle the click event and toggle the menu
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbarlist');
const menuItems = document.querySelectorAll('.listitems');

menuToggle.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent click event from reaching document
  navbarList.classList.toggle('show');
});

// Event listener to hide menu when a menu item is clicked
menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
    navbarList.classList.remove('show');
  });
});

// Event listener to hide menu when anywhere on the screen is clicked except for the menu toggle button and menu items
document.addEventListener('click', function(event) {
  if (!navbarList.contains(event.target) && event.target !== menuToggle) {
    navbarList.classList.remove('show');
  }
});

