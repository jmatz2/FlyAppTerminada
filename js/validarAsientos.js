
function validarAsientos(){
  
    var adul=document.getElementById("opcAdulto").value;
    var men = document.getElementById("opcmenor").value;
    var inf = document.getElementById("opcinfante").value;
  
    var asientoAdul1 = document.getElementById("filter-menu").value;    
    var asientoAdul2= document.getElementById("filter-menu1").value;    
    var asientoAdul3= document.getElementById("filter-menu3").value;
    var asientoAdul4= document.getElementById("filter-menu4").value;
    var asientoAdul5= document.getElementById("filter-menu5").value;
    
    var asientoMen1= document.getElementById("filter-menu6").value;
    var asientoMen2= document.getElementById("filter-menu7").value;
    var asientoMen3= document.getElementById("filter-menu8").value;
    
    var asientoInf1= document.getElementById("filter-menu9").value;
    var asientoInf2= document.getElementById("filter-menu10").value;
    var asientoInf3= document.getElementById("filter-menu11").value;
    
   if(adul=='2'){
	if(asientoAdul1==asientoAdul2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='3'){
	if(asientoAdul1==asientoAdul2 || asientoAdul1==asientoAdul3 || asientoAdul2==asientoAdul3){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='4'){
	if(asientoAdul1==asientoAdul2 || asientoAdul1==asientoAdul3 || asientoAdul1==asientoAdul4 || asientoAdul2==asientoAdul3 || asientoAdul2==asientoAdul4 ||
	  asientoAdul3==asientoAdul4){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
     if(adul=='5'){
	if(asientoAdul1==asientoAdul2 || asientoAdul1==asientoAdul3 || asientoAdul1==asientoAdul4 || asientoAdul1==asientoAdul5 ||
	  asientoAdul2==asientoAdul3 || asientoAdul2==asientoAdul4 || asientoAdul2==asientoAdul5 || asientoAdul3==asientoAdul4 || asientoAdul3==asientoAdul5||
	  asientoAdul4==asientoAdul5){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='1'){
	if(asientoAdul1==asientoMen1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='2'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoMen1==asientoMen2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='3'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3||asientoMen1==asientoMen2||asientoMen2==asientoMen3){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && inf=='1'){
	if(asientoAdul1==asientoInf1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && inf=='2'){
	if(asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoInf1==asientoInf2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && inf=='3'){
	if(asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul1==asientoInf3||asientoInf1==asientoInf2||asientoInf1==asientoInf3||
	  asientoInf2==asientoInf3){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='1' && inf=='1'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoInf1||asientoMen1==asientoInf1){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='1' && men=='1' && inf=='2'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoMen1==asientoInf1||asientoMen1==asientoInf2||
	  asientoInf1==asientoInf2){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='1' && men=='1' && inf=='3'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul1==asientoInf3||asientoMen1==asientoInf1||
	  asientoMen1==asientoInf2||asientoMen1==asientoInf3||asientoInf1==asientoInf2||asientoInf1==asientoInf3||asientoInf2==asientoInf3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='1' && men=='2' && inf=='1'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoInf1||asientoMen1==asientoMen2||asientoMen1==asientoInf1||
	  asientoMen2==asientoInf1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='2' && inf=='2'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoMen1==asientoMen2||
	  asientoMen1==asientoInf1||asientoInf1==asientoInf2||asientoMen2==asientoInf1||asientoMen2==asientoInf2){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='1' && men=='2' && inf=='3'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul1==asientoInf3||
	  asientoMen1==asientoMen2||asientoMen1==asientoInf1||asientoMen1==asientoInf2||asientoMen1==asientoInf3||asientoMen2==asientoInf1||
	  asientoMen2==asientoInf2||asientoMen2==asientoInf3||asientoInf1==asientoInf2||asientoInf1==asientoInf3||asientoInf2==asientoInf3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='1' && men=='3' && inf=='1'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3||asientoAdul1==asientoInf1||asientoMen1==asientoMen2||
	  asientoMen1==asientoMen3||asientoMen1==asientoInf1||asientoMen2==asientoMen3||asientoMen2==asientoInf1||asientoMen3==asientoInf1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='3' && inf=='2'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||
	  asientoMen1==asientoMen2||asientoMen1==asientoMen3||asientoMen1==asientoInf1||asientoMen1==asientoInf2||asientoMen2==asientoMen3||
	  asientoMen2==asientoInf1||asientoMen2==asientoInf2||asientoMen3==asientoInf1||asientoMen3==asientoInf2||asientoInf1==asientoInf2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='1' && men=='3' && inf=='3'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3||asientoAdul1==asientoInf1||
	  asientoAdul1==asientoInf2||asientoAdul1==asientoInf3||asientoMen1==asientoMen2||asientoMen1==asientoMen3||asientoMen1==asientoInf1||
	  asientoMen1==asientoInf2||asientoMen1==asientoInf3||asientoMen2==asientoMen3||asientoMen2==asientoInf1||asientoMen2==asientoInf2||
	  asientoMen2==asientoInf3||asientoMen3==asientoInf1||asientoMen3==asientoInf2||asientoMen3==asientoInf3||asientoInf1==asientoInf2||
	  asientoInf1==asientoInf3||asientoInf2==asientoInf3){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='2' && men=='1'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoMen1||asientoAdul2==asientoMen1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='2' && men=='2'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul2==asientoMen1||asientoAdul2==asientoMen2||
	  asientoMen1==asientoMen2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='2' && men=='3'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3||asientoAdul2==asientoMen1||
	  asientoAdul2==asientoMen2||asientoAdul2==asientoMen3||asientoMen1==asientoMen2||asientoMen1==asientoMen3||asientoMen2==asientoMen3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='2' && inf=='1'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoInf1||asientoAdul2==asientoInf1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='2' && inf=='2'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul2==asientoInf1||asientoAdul2==asientoInf2||
	  asientoInf1==asientoInf2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='2' && inf=='3'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul1==asientoInf3||asientoAdul2==asientoInf1||
	  asientoAdul2==asientoInf2||asientoAdul2==asientoInf3||asientoInf1==asientoInf2||asientoInf1==asientoInf3||asientoInf2==asientoInf3){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='3' && men=='1'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoMen1||asientoAdul2==asientoAdul3||asientoAdul2==asientoMen1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='3' && men=='2'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul2==asientoAdul3||
	  asientoAdul2==asientoMen1||asientoAdul2==asientoMen2||asientoAdul3==asientoMen1||asientoAdul3==asientoMen2||asientoMen1==asientoMen2){
	     alert("Verifique que los asientos no se repitan");
	     window.location="error.html";
	}
    }
    if(adul=='3' && men=='3'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3||
	  asientoAdul2==asientoAdul3||asientoAdul2==asientoMen1||asientoAdul2==asientoMen2||asientoAdul2==asientoMen3||asientoAdul3==asientoMen1||
	  asientoAdul3==asientoMen2||asientoAdul3==asientoMen3||asientoMen1==asientoMen2||asientoMen1==asientoMen3||asientoMen2==asientoMen3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='3' && inf=='1'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoInf1||asientoAdul2==asientoAdul3||asientoAdul2==asientoInf1||
	  asientoAdul3==asientoInf1){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='3' && inf=='2'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul2==asientoAdul3||
	  asientoAdul2==asientoInf1||asientoAdul2==asientoInf2||asientoAdul3==asientoInf1||asientoAdul3==asientoInf2||asientoInf1==asientoInf2){
	    alert("Verifique que los asientos no se repitan");
	    window.location="error.html";
	}
    }
    if(adul=='3' && inf=='3'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||asientoAdul1==asientoInf3||
	  asientoAdul2==asientoAdul3||asientoAdul2==asientoInf1||asientoAdul2==asientoInf2||asientoAdul2==asientoInf3||asientoAdul3==asientoInf1||
	  asientoAdul3==asientoInf2||asientoAdul3==asientoInf3||asientoInf1==asientoInf2||asientoInf1==asientoInf3||asientoInf2==asientoInf3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='4' && men=='1'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoAdul4||asientoAdul1==asientoMen1||asientoAdul2==asientoAdul3||
	  asientoAdul2==asientoAdul4||asientoAdul2==asientoMen1||asientoAdul3==asientoAdul4||asientoAdul3==asientoMen1||asientoAdul4==asientoMen1){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='4' && men=='2'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoAdul4||asientoAdul2==asientoAdul3||asientoAdul2==asientoAdul4||
	  asientoAdul2==asientoMen1||asientoAdul2==asientoMen2||asientoAdul3==asientoAdul4||asientoAdul3==asientoMen1||asientoAdul3==asientoMen2||
	  asientoAdul4==asientoMen1||asientoAdul4==asientoMen2||asientoMen1==asientoMen2){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='4' && men=='3'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoAdul4||asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||
	  asientoAdul1==asientoMen3||asientoAdul2==asientoAdul3||asientoAdul2==asientoAdul4||asientoAdul2==asientoMen1||asientoAdul2==asientoMen2||
	  asientoAdul2==asientoMen3||asientoAdul3==asientoAdul4||asientoAdul3==asientoMen1||asientoAdul3==asientoMen2||asientoAdul3==asientoMen3||
	  asientoAdul4==asientoMen1||asientoAdul4==asientoMen2||asientoAdul4==asientoMen3||asientoMen1==asientoMen2||asientoMen1==asientoMen3||
	  asientoMen2==asientoMen3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
    if(adul=='4' && inf=='1'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoAdul4||asientoAdul1==asientoInf1||asientoAdul2==asientoAdul3||
	  asientoAdul2==asientoAdul4||asientoAdul2==asientoInf1||asientoAdul3==asientoAdul4||asientoAdul3==asientoInf1||asientoAdul4==asientoInf1){
		alert("Verifique que los asientos no se repitan");
		window.location="error.html";
	}
    }
    if(adul=='4' && inf=='2'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoAdul4||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||
	  asientoAdul2==asientoAdul3||asientoAdul2==asientoAdul4||asientoAdul2==asientoInf1||asientoAdul2==asientoInf2||asientoAdul3==asientoAdul4||
	  asientoAdul3==asientoInf1||asientoAdul3==asientoInf2||asientoAdul4==asientoInf1||asientoAdul4==asientoInf2){
		alert("Verifique que los asientos no se repitan");
		window.location="error.html";
	}
    }
    if(adul=='4' && inf=='3'){
	if(asientoAdul1==asientoAdul2||asientoAdul1==asientoAdul3||asientoAdul1==asientoAdul4||asientoAdul1==asientoInf1||asientoAdul1==asientoInf2||
	  asientoAdul1==asientoInf3||asientoAdul2==asientoAdul3||asientoAdul2==asientoAdul4||asientoAdul2==asientoInf1||asientoAdul2==asientoInf2||
	  asientoAdul2==asientoInf3||asientoAdul3==asientoAdul4||asientoAdul3==asientoInf1||asientoAdul3==asientoInf2||asientoAdul3==asientoInf3||
	  asientoAdul4==asientoInf1||asientoAdul4==asientoInf2||asientoAdul4==asientoInf3||asientoInf1==asientoInf2||asientoInf1==asientoInf3||
	  asientoInf2==asientoInf3){
	      alert("Verifique que los asientos no se repitan");
	      window.location="error.html";
	}
    }
}