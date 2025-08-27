document.querySelectorAll('.dropdown-submenu > a').forEach(function(element){
  element.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const submenu = this.nextElementSibling;
    if(submenu){
      if(submenu.classList.contains('show')){
        submenu.classList.remove('show');
      } else {
        this.closest('.dropdown-menu').querySelectorAll('.dropdown-menu.show').forEach(function(openSubmenu){
          openSubmenu.classList.remove('show');
        });
        submenu.classList.add('show');
      }
    }
  });
});

document.querySelectorAll('.dropdown').forEach(function(dropdown){
  dropdown.addEventListener('hidden.bs.dropdown', function () {
    this.querySelectorAll('.dropdown-menu.show').forEach(function(openSubmenu){
      openSubmenu.classList.remove('show');
    });
  });
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  overlay.classList.add('active');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('active');
}

menuToggle.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-submenu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = btn.nextElementSibling;
    if(submenu.classList.contains('open')){
      submenu.classList.remove('open');
      btn.textContent = btn.textContent.replace('▼', '▶');
    } else {
      submenu.classList.add('open');
      btn.textContent = btn.textContent.replace('▶', '▼');
    }
  });
});
