$(document).ready(function(){

stampaQuadrati();

// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
  $('.square').click(function(){

    var elementSelected = this;
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method:"GET",
        success: function(data, stato){
          var numeroCasuale = data.response;
          console.log(numeroCasuale);
          // Se è <= 5 il quadrato diventa giallo,

          if(numeroCasuale <= 5){
            // Il numero ottenuto appare al centro del quadrato
            $(elementSelected).removeClass('green');
            $(elementSelected).addClass('yellow');
            $(elementSelected).children('.text').text(numeroCasuale);
            console.log(elementSelected);
          }
          // se è > di 5 il quadrato diventa verde.
          else if (numeroCasuale > 5){
            // Il numero ottenuto appare al centro del quadrato
            $(elementSelected).removeClass('yellow');
            $(elementSelected).addClass('green');
            $(elementSelected).children('.text').text(numeroCasuale);
            console.log(elementSelected);
          }
        },
        error: function(){
          alert('Si è verificato un erroe')
        }
      }
    )
  });

});

// funzione per stapare stampaQuadrati
function stampaQuadrati(){
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  for (var i = 1; i <= 36; i++) {

    var html = template({});
    $('.container-flex').append(html);
  }

}
