
function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
      var position = element.offsetTop - 100; // Ajuste o valor 100 para a quantidade de pixels acima do elemento desejado
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  }