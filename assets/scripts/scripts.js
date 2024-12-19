  fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

  // Function to load body.html into index.html
  fetch('/components/pods.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('pods-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading body:', error));

  // Function to load footer.html into index.html
  fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));

  // Function to load modal.html into index.html
  fetch('/components/modal.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('modal-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));

  document.addEventListener('DOMContentLoaded', function() {
  // Function to load banner-panels.html into index.html
  fetch('/components/banner-panels.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('banner-panels').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));

  fetch('/components/menu-copyright.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('menu-copyright').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

});


// Sticky Header
let lastScrollTop = 0; // Track the last scroll position
window.addEventListener('scroll', function () {
  var currentScroll = window.scrollY;
  var headerContainer = document.getElementById('header-container');

  if (currentScroll > lastScrollTop) {
    // User is scrolling down
    headerContainer.classList.add('scrolled');
    headerContainer.classList.remove('scrolling-up');
  } else {
    // User is scrolling up
    headerContainer.classList.remove('scrolled');
    headerContainer.classList.add('scrolling-up');
  }

  // If at the top of the page, remove background
  if (currentScroll === 0) {
    headerContainer.classList.remove('scrolling-up', 'scrolled');
  }

  // Update the last scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scroll values
});


// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const addDivider = () => {
    // Find all nav-item elements
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    // Check if there are at least two elements for valid operations
    if (navItems.length > 3) {
      const secondNavItem = navItems[2]; // Second nav-item
      const secondLastNavItem = navItems[navItems.length - 2]; // Second-last nav-item

      // Create the divider span element
      const createDivider = () => {
        const span = document.createElement('span');
        span.className = 'divider';
        span.textContent = ''; // Divider content
        return span;
      };

      // Ensure dividers are not duplicated
      if (!secondNavItem.nextElementSibling?.classList.contains('divider')) {
        secondNavItem.insertAdjacentElement('afterend', createDivider());
      }
      if (!secondLastNavItem.previousElementSibling?.classList.contains('divider')) {
        secondLastNavItem.insertAdjacentElement('beforebegin', createDivider());
      }
    }
  };
  const addSeparator = () => {
    // Find all nav-item elements
    const sidenavItems = document.querySelectorAll('.sideNavItems ul li');
    // Check if there are at least two elements for valid operations
    if (sidenavItems.length > 2) {
      const secondNavItem = sidenavItems[1]; // Second nav-item
      const secondLastNavItem = sidenavItems[sidenavItems.length - 6]; // Second-last nav-item

      // Create the divider span element
      const createDivider = () => {
        const span = document.createElement('span');
        span.className = 'divider';
        span.textContent = ''; // Divider content
        return span;
      };

      // Ensure dividers are not duplicated
      if (!secondNavItem.nextElementSibling?.classList.contains('divider')) {
        secondNavItem.insertAdjacentElement('afterend', createDivider());
      }
      if (!secondLastNavItem.previousElementSibling?.classList.contains('divider')) {
        secondLastNavItem.insertAdjacentElement('beforebegin', createDivider());
      }
    }
  };
  

  // Add dividers immediately
  addDivider();
  addSeparator();

  // Optionally, add a periodic check if the menu is dynamically updated
  setInterval(addDivider, 100);
  setInterval(addSeparator, 100);
});

