
function pasaje(){
  var numadultos = document.getElementById("opcAdulto").value; 
  var nummenor = document.getElementById("opcmenor").value;
  var numinfante = document.getElementById("opcinfante").value;  
  
  if(numadultos=="Seleccione"){
    alert("Mínimo tiene que viajar un adulto");
  }else{
  
  if(numadultos=="1"){    
    $("#divAdulto1").slideToggle("slow");
    $("#asientoAdulto1").slideToggle("slow");        
  }
  if(numadultos=="2"){
    $("#divAdulto1").slideToggle("slow");
    $("#divAdulto2").slideToggle("slow");
    $("#asientoAdulto1").slideToggle("slow");        
    $("#asientoAdulto2").slideToggle("slow");
  }
  if(numadultos=="3"){
    $("#divAdulto1").slideToggle("slow");
    $("#divAdulto2").slideToggle("slow");
    $("#divAdulto3").slideToggle("slow");
    $("#asientoAdulto1").slideToggle("slow");        
    $("#asientoAdulto2").slideToggle("slow");
    $("#asientoAdulto3").slideToggle("slow");
  }
  if(numadultos=="4"){
    $("#divAdulto1").slideToggle("slow");
    $("#divAdulto2").slideToggle("slow");
    $("#divAdulto3").slideToggle("slow");
    $("#divAdulto4").slideToggle("slow");
    $("#asientoAdulto1").slideToggle("slow");        
    $("#asientoAdulto2").slideToggle("slow");
    $("#asientoAdulto3").slideToggle("slow");
    $("#asientoAdulto4").slideToggle("slow");
  }
  if(numadultos=="5"){
    $("#divAdulto1").slideToggle("slow");
    $("#divAdulto2").slideToggle("slow");
    $("#divAdulto3").slideToggle("slow");
    $("#divAdulto4").slideToggle("slow");
    $("#divAdulto5").slideToggle("slow");
    $("#asientoAdulto1").slideToggle("slow");        
    $("#asientoAdulto2").slideToggle("slow");
    $("#asientoAdulto3").slideToggle("slow");
    $("#asientoAdulto4").slideToggle("slow");
    $("#asientoAdulto5").slideToggle("slow");
  }  
  
 
  if(nummenor=="1"){
    $("#divMenor1").slideToggle("slow");
    $("#asientoMenor1").slideToggle("slow");
  }
  if(nummenor=="2"){
    $("#divMenor1").slideToggle("slow");
    $("#divMenor2").slideToggle("slow");
    $("#asientoMenor1").slideToggle("slow");
    $("#asientoMenor2").slideToggle("slow");
  }
  if(nummenor=="3"){
    $("#divMenor1").slideToggle("slow");
    $("#divMenor2").slideToggle("slow");
    $("#divMenor3").slideToggle("slow");
    $("#asientoMenor1").slideToggle("slow");
    $("#asientoMenor2").slideToggle("slow");
    $("#asientoMenor3").slideToggle("slow");
  }
  
  
  if(numinfante=="1"){
    $("#divInfante1").slideToggle("slow");
    $("#asientoInfante1").slideToggle("slow");
  }
  if(numinfante=="2"){
    $("#divInfante1").slideToggle("slow");
    $("#divInfante2").slideToggle("slow");
    $("#asientoInfante1").slideToggle("slow");
    $("#asientoInfante2").slideToggle("slow");
  }
  if(numinfante=="3"){
    $("#divInfante1").slideToggle("slow");
    $("#divInfante2").slideToggle("slow");
    $("#divInfante3").slideToggle("slow");
    $("#asientoInfante1").slideToggle("slow");
    $("#asientoInfante2").slideToggle("slow");
    $("#asientoInfante3").slideToggle("slow");
  }
  
} 
  
}


