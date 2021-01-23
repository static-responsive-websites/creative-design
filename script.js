const storybtn = document.querySelectorAll('.story-btn');

storybtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('change');
    btn.nextElementSibling.classList.toggle('change');
  });
});
