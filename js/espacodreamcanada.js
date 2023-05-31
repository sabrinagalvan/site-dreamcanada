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

const toggleSwitch = document.querySelector('.toggle-switch');

toggleSwitch.addEventListener('change', function() {
  const body = document.querySelector('body');
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});