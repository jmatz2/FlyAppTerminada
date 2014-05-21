function mostrarNombres(){
  var nom1= document.getElementById("adul1").value;
  var ape1= document.getElementById("apPat1").value;
  var nom2= document.getElementById("adul2").value;
  var nom3= document.getElementById("adul3").value;
  var nom4= document.getElementById("adul4").value;
  var nom5= document.getElementById("adul5").value;
  var nom6= document.getElementById("men1").value;
  var nom7= document.getElementById("men2").value;
  var nom8= document.getElementById("men3").value;
  var nom9= document.getElementById("inf1").value;
  var nom10= document.getElementById("inf2").value;
  var nom11= document.getElementById("inf3").value;
  
  var m1= document.getElementById("nomAdul1");
  var ma= document.getElementById("apAdul1");  
  var m2= document.getElementById("nomAdul2");
  var m3= document.getElementById("nomAdul3");
  var m4= document.getElementById("nomAdul4");
  var m5= document.getElementById("nomAdul5");
  var m6= document.getElementById("nomMen1");
  var m7= document.getElementById("nomMen2");
  var m8= document.getElementById("nomMen3");
  var m9= document.getElementById("nomInf1");
  var m10= document.getElementById("nomInf2");
  var m11= document.getElementById("nomInf3");
  
  m1.innerHTML=nom1;
  ma.innerHTML=ape1;
  m2.innerHTML=nom2;
  m3.innerHTML=nom3;
  m4.innerHTML=nom4;
  m5.innerHTML=nom5;
  m6.innerHTML=nom6;
  m7.innerHTML=nom7;
  m8.innerHTML=nom8;
  m9.innerHTML=nom9;
  m10.innerHTML=nom10;
  m11.innerHTML=nom11;
}