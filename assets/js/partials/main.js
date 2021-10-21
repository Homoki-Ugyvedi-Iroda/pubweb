const scrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

const scrollToSection = (itemId) => {
  const element = document.getElementById(itemId);
  window.scrollTo({
    top: element.offsetTop - 80,
    left: element.offsetLeft,
    behavior: 'smooth',
  });
};

const displayLogoPictogramOnHomepage = () => {
  if (document.querySelector('.page-home')) {
    document.querySelector('.page-home .navbar-brand').style.display =
      window.pageYOffset > window.innerHeight ? 'block' : 'none';
  }
};

window.onscroll = () => {
  displayLogoPictogramOnHomepage();
};

window.location.hash && scrollToSection(window.location.hash.replace('#', ''));
