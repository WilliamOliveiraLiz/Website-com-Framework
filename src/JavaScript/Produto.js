document.querySelectorAll('.dropdown-submenu > a').forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const submenu = element.nextElementSibling;
    if (submenu) {
      const isOpen = submenu.classList.contains('show');

      const parentDropdownMenu = element.closest('.dropdown-menu');
      if (parentDropdownMenu) {
        parentDropdownMenu.querySelectorAll('.dropdown-menu.show').forEach(openSubmenu => {
          openSubmenu.classList.remove('show');
        });
      }

      if (!isOpen) {
        submenu.classList.add('show');
      }
    }
  });
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('hidden.bs.dropdown', () => {
    dropdown.querySelectorAll('.dropdown-menu.show').forEach(openSubmenu => {
      openSubmenu.classList.remove('show');
    });
  });
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

const openMobileMenu = () => {
  mobileMenu.classList.add('open');
  overlay.classList.add('active');
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('active');
};

menuToggle.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-submenu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = btn.nextElementSibling;
    const isOpen = submenu.classList.contains('open');

    if (isOpen) {
      submenu.classList.remove('open');
      btn.textContent = btn.textContent.replace('▼', '▶');
    } else {
      submenu.classList.add('open');
      btn.textContent = btn.textContent.replace('▶', '▼');
    }
  });
});
