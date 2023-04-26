import Szemely from "./szemely.js";
$(function(){
    const szuloELEM = $(".tarolo");
    console.log("haho");
    const obj = {};
    const szemely1 = new Szemely("Béla",1969,szuloELEM)
    console.log(szemely1);
    console.log(szemely1.nev);
    szemely1.pontszam = 12;
    const szemely2 = new Szemely("Bálint",1998,szuloELEM);
    console.log(szemely2);
    szemely1.nev="Ignacz";
    console.log(szemely2);
    console.log(szemely2);
    

})