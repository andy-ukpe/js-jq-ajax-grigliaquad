$(document).ready(function(){

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
          // se è > di 5 il quadrato diventa verde.
          // Il numero ottenuto appare al centro del quadrato
          if(numeroCasuale <= 5){
            $(elementSelected).removeClass('green');
            $(elementSelected).removeClass('yellow');
            $(elementSelected).addClass('yellow');
            $(elementSelected).children('.text').text(numeroCasuale);
            console.log(elementSelected);
          } else if (numeroCasuale > 5){
            $(elementSelected).removeClass('green');
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
  })

});
