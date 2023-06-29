function scrollToTurismo() {
  var turismo = document.getElementById("turismo");
  window.scrollTo({ top: 900, behavior: 'smooth' });
}

function scrollToIntercambio() {
  var intercambio = document.getElementById("intercambio");
  window.scrollTo({ top: 1950, behavior: 'smooth' });
}

function scrollToImigrar() {
  var imigrar = document.getElementById("imigrar");
  window.scrollTo({ top: 2950, behavior: 'smooth' });
}

const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
