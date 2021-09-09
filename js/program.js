//para movimiento de  departamentos
$(document).ready(function(){
    $('.mapa_sv_select').on("click", function(e){
      $('.active').removeClass('active');
      $(this).addClass('active');
    });
  });