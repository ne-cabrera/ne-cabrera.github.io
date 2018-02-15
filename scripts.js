/* global $ */
"use strict";
var offset = 50;

// Según eslint las comillas deberían ser sencillas 

$('.nav-pills li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

$(".descripcion").hide();
$(".imgProyectos").on("click", function(){
    $(this).next().slideToggle(400);
});
