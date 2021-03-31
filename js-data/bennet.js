"use strict";
/*JSON CONTIENE:

imagenPersonaje
imagenElemento
personaje 

numero -->INFO número de build

tipo
descripcion
arma1
nombreArma1
arma2
nombreArma2
stat1
stat2
stat3
artefacto1
nombreArtefacto1
artefacto2
nombreArtefacto2 */

$(document).ready(function () {
    var imagenPersonaje = $("#personajeUnico .personaje");
    var imagenElemento = $("#personajeUnico .miniElemento");
    var nobrePersonaje = $("#personajeUnico .nombrePersonaje");

    var tipo = $("#primera .tituloArtefacto");
    var descripcion = $("#primera .descripcion");
    var imagenArma1 = $("#primera .imagenArma1");
    var arma1 = $("#primera .Arma1");
    var imagenArma2 = $("#primera .imagenArma2");
    var arma2 = $("#primera .Arma2");
    var stat1 = $("#primera .stat1");
    var stat2 = $("#primera .stat2");
    var stat3 = $("#primera .stat3");
    var imagenArtefacto1 = $("#primera .imagenArtefacto1");
    var artefacto1 = $("#primera .Artefacto1");
    var imagenArtefacto2 = $("#primera .imagenArtefacto2");
    var artefacto2 = $("#primera .Artefacto2");

    $.getJSON("../json-data/bennett1.json", function (data) {
        imagenPersonaje.attr("src", "img/" + data.imagenPersonaje);
        imagenElemento.attr("src", "img/" + data.imagenElemento);
        nobrePersonaje.text(data.personaje);

        tipo.text(data.tipo);
        descripcion.text(data.descripcion);
        imagenArma1.attr("src", "img/espada/" + data.arma1);
        arma1.text(data.nombreArma1);
        imagenArma2.attr("src", "img/espada/" + data.arma2);
        arma2.text(data.nombreArma2);
        stat1.text(data.stat1);
        stat2.text(data.stat2);
        stat3.text(data.stat3);
        imagenArtefacto1.attr("src", "img/artefactos/" + data.artefacto1);
        artefacto1.text(data.nombreArtefacto1);
        imagenArtefacto2.attr("src", "img/artefactos/" + data.artefacto2);
        artefacto2.text(data.nombreArtefacto2);
    });
});


$(document).ready(function () {
    var tipo = $("#segunda .tituloArtefacto");
    var descripcion = $("#segunda .descripcion");
    var imagenArma1 = $("#segunda .imagenArma1");
    var arma1 = $("#segunda .Arma1");
    var imagenArma2 = $("#segunda .imagenArma2");
    var arma2 = $("#segunda .Arma2");
    var stat1 = $("#segunda .stat1");
    var stat2 = $("#segunda .stat2");
    var stat3 = $("#segunda .stat3");
    var imagenArtefacto1 = $("#segunda .imagenArtefacto1");
    var artefacto1 = $("#segunda .Artefacto1");
    var imagenArtefacto2 = $("#segunda .imagenArtefacto2");
    var artefacto2 = $("#segunda .Artefacto2");
    $.getJSON("../json-data/bennett2.json", function (data) {
        tipo.text(data.tipo);
        descripcion.text(data.descripcion);
        imagenArma1.attr("src", "img/espada/" + data.arma1);
        arma1.text(data.nombreArma1);
        imagenArma2.attr("src", "img/espada/" + data.arma2);
        arma2.text(data.nombreArma2);
        stat1.text(data.stat1);
        stat2.text(data.stat2);
        stat3.text(data.stat3);
        imagenArtefacto1.attr("src", "img/artefactos/" + data.artefacto1);
        artefacto1.text(data.nombreArtefacto1);
        imagenArtefacto2.attr("src", "img/artefactos/" + data.artefacto2);
        artefacto2.text(data.nombreArtefacto2);
    }); 
}); 