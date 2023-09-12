$(document).ready(function () {
    // Ativa o Slick Slider para a seção de parceiros
    $("#partner-carousel").slick({
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 4, // Quantos logotipos de parceiros são mostrados em um slide
      slidesToScroll: 1, // Quantos logotipos de parceiros são movidos por vez
      autoplay: true, // Reproduz o carrossel automaticamente
      autoplaySpeed: 2000, // Tempo de espera entre cada movimento (em milissegundos)
      responsive: [
        {
          breakpoint: 992, // Tamanho de tela em que o carrossel se torna responsivo
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });


