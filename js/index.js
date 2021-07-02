//Carga dentro solo cuando el documento esté cargado
$(document).ready(function () {

  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      ///Efecto de desplazamiento
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });

  var subir = $('.back-to-top');

  //Función para subir
  subir.click(function (e) {
    //Previene el comportamiento por defecto
    e.preventDefault();
    //Selecciona los elementos, animate(Efecto y tiempo )
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  //Ocultamos el botón
  subir.hide();

  //Mandamos como parámetro al objeto window el cual es el princial en la web
  //Se realiza el efecto scroll
  $(window).scroll(function () {
    //Selecionamos una propiedad del parámetro enviado y comparamos
    ///Control del scroll
    if ($(this).scrollTop() > 200) {
      subir.fadeIn();
    } else {
      subir.fadeOut();
    }
  });

});
