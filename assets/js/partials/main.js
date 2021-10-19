const scrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

const scrollToSection = (itemId) => {
  const element = document.getElementById(itemId);
  window.scrollTo({
    behavior: 'smooth',
    left: element.offsetLeft,
    top: element.offsetTop - 80,
  });
};

const displayLogoPictogramOnHomepage = () => {
  if (document.querySelector('.page-home')) {
    document.querySelector('.page-home .navbar-brand').style.display =
      window.pageYOffset > window.innerHeight ? 'block' : 'none';
  }
};

window.onscroll = function () {
  displayLogoPictogramOnHomepage();
};
