var idv; var clss; var idcl;

function asientosPasajeros(){
    asientoparaAdulto1(idv, clss);
    asientoparaAdulto2(idv, clss);
    asientoparaAdulto3(idv, clss);
    asientoparaAdulto4(idv, clss);
    asientoparaAdulto5(idv, clss);
    asientoparaMenor1(idv, clss);
    asientoparaMenor2(idv, clss);
    asientoparaMenor3(idv, clss);
    asientoparaInfante1(idv,clss);
    asientoparaInfante2(idv,clss);
    asientoparaInfante3(idv,clss);
}

function boletosDependiente (idclient){
    //alert("dependiente"); alert(idclient);
    var numadultos = document.getElementById("opcAdulto").value; 
    var nummenor = document.getElementById("opcmenor").value;
    var numinfante = document.getElementById("opcinfante").value;
        
    var nomAdul2=document.getElementById("adul2").value;
    var appAdul2=document.getElementById("apPat2").value;
    var apmAdul2=document.getElementById("apMat2").value;
    var asiAdul2= document.getElementById("filter-menu1").value;
    
    var nomAdul3=document.getElementById("adul3").value;
    var appAdul3=document.getElementById("apPat3").value;
    var apmAdul3=document.getElementById("apMat3").value;
    var asiAdul3= document.getElementById("filter-menu3").value;
    
    var nomAdul4=document.getElementById("adul4").value;
    var appAdul4=document.getElementById("apPat4").value;
    var apmAdul4=document.getElementById("apMat4").value;
    var asiAdul4= document.getElementById("filter-menu4").value;
    
    var nomAdul5=document.getElementById("adul5").value;
    var appAdul5=document.getElementById("apPat5").value;
    var apmAdul5=document.getElementById("apMat5").value;
    var asiAdul5= document.getElementById("filter-menu5").value;
    
    var nomMen1=document.getElementById("men1").value;
    var appMen1=document.getElementById("apPatmen1").value;
    var apmMen1=document.getElementById("apMatmen1").value;
    var asiMen1= document.getElementById("filter-menu6").value;
    
    var nomMen2=document.getElementById("men2").value;
    var appMen2=document.getElementById("apPatmen2").value;
    var apmMen2=document.getElementById("apMatmen2").value;
    var asiMen2= document.getElementById("filter-menu7").value;
    
    var nomMen3=document.getElementById("men3").value;
    var appMen3=document.getElementById("apPatmen3").value;
    var apmMen3=document.getElementById("apMatmen3").value;
    var asiMen3= document.getElementById("filter-menu8").value;
    
    var nomInf1=document.getElementById("inf1").value;
    var appInf1=document.getElementById("apPatinf1").value;
    var apmInf1=document.getElementById("apMatinf1").value;
    var asiInf1= document.getElementById("filter-menu9").value;
    
    var nomInf2=document.getElementById("inf2").value;
    var appInf2=document.getElementById("apPatinf2").value;
    var apmInf2=document.getElementById("apMatinf2").value;
    var asiInf2= document.getElementById("filter-menu10").value;
    
    var nomInf3=document.getElementById("inf3").value;
    var appInf3=document.getElementById("apPatinf3").value;
    var apmInf3=document.getElementById("apMatinf3").value;
    var asiInf3= document.getElementById("filter-menu11").value;
    
    request.open("GET","boletosDependiente.php?vuelo="+idv+"&clase="+clss+"&id="+idclient+"&adul="+numadultos+"&men="+nummenor+"&inf="+numinfante+"&nomAdul2="+nomAdul2+
    "&appAdul2="+appAdul2+"&apmAdul2="+apmAdul2+"&asiAdul2="+asiAdul2+"&nomAdul3="+nomAdul3+"&appAdul3="+appAdul3+"&apmAdul3="+apmAdul3+
    "&asiAdul3="+asiAdul3+"&nomAdul4="+nomAdul4+"&appAdul4="+appAdul4+"&apmAdul4="+apmAdul4+"&asiAdul4="+asiAdul4+"&nomAdul5="+nomAdul5+
    "&appAdul5="+appAdul5+"&apmAdul5="+apmAdul5+"&asiAdul5="+asiAdul5+"&nomMen1="+nomMen1+"&appMen1="+appMen1+"&apmMen1="+apmMen1+
    "&asiMen1="+asiMen1+"&nomMen2="+nomMen2+"&appMen2="+appMen2+"&apmMen2="+apmMen2+"&asiMen2="+asiMen2+"&nomMen3="+nomMen3+"&appMen3="+appMen3+
    "&apmMen3="+apmMen3+"&asiMen3="+asiMen3+"&nomInf1="+nomInf1+"&appInf1="+appInf1+"&apmInf1="+apmInf1+"&asiInf1="+asiInf1+
    "&nomInf2="+nomInf2+"&appInf2="+appInf2+"&apmInf2="+apmInf2+"&asiInf2="+asiInf2+"&nomInf3="+nomInf3+"&appInf3="+appInf3+
    "&apmInf3="+apmInf3+"&asiInf3="+asiInf3,true);
    request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                //alert(this.responseText);                
            }
        }
    }
}
request.send(null);
}


function boletos(idc){
    //alert("boletos");
    var numadultos = document.getElementById("opcAdulto").value; 
    var nummenor = document.getElementById("opcmenor").value;
    var numinfante = document.getElementById("opcinfante").value;
    var asiento = document.getElementById("filter-menu").value;   
    
    request.open("GET","http://flyapp.260mb.net/boletos.php?id="+idv+"&clase="+clss+"&cliente="+idc+"&adul="+numadultos+"&men="+nummenor+"&inf="+numinfante+"&asiento="+asiento,true);
    request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                alert(this.responseText);                
            }
        }
    }
}
request.send(null);
}

function adquirir(){
    var numadultos = document.getElementById("opcAdulto").value; 
    var nummenor = document.getElementById("opcmenor").value;
    var numinfante = document.getElementById("opcinfante").value;
    var nom= document.getElementById("panombre").value;
    var app= document.getElementById("papellidoP").value;
    var apm= document.getElementById("papellidoM").value;
    var nt= document.getElementById("pnumeroT").value;
    var nip= document.getElementById("pnip").value;
    var pais= document.getElementById("papais").value;
    var estado= document.getElementById("paestado").value;
    var dir= document.getElementById("padireccion").value;
    var tel= document.getElementById("patelefono").value;
    var cel= document.getElementById("pacelular").value;
    var mail= document.getElementById("pmail").value;
    var secret= document.getElementById("secreto").value;
        
    request.open("GET","http://flyapp.260mb.net/clientes.php?nombre="+nom+"&appat="+app+"&apmat="+apm+"&tarj="+nt+"&nip="+nip+"&pais="+pais+"&estado="+estado+"&dir="+dir+"&tel="+tel+"&cel="+cel+"&mail="+mail+"&palabra="+secret+
    "&adultos="+numadultos+"&menores="+nummenor+"&infantes="+numinfante,true);
    request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
               idcl= this.responseText;                
               boletosDependiente(idcl);boletos(idcl);
            }
        }
    }
}
request.send(null);
}


function recogerDatos(){
  var adultos= document.getElementById("opcAdulto").value;
  var menores= document.getElementById("opcmenor").value;
  var infantes= document.getElementById("opcinfante").value;
  
  request.open("GET","http://flyapp.260mb.net/personasPagar.php?id="+idv+"&clase="+clss+"&adul="+adultos+"&men="+menores+"&inf="+infantes,true);
    request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("personas").innerHTML=this.responseText;                
            }
        }
    }
}
request.send(null);
}

function verId(id, clase){    
    idv=id;
    clss=clase;
    request.open("GET","http://flyapp.260mb.net/conceptosFactura.php?id="+id,true);
    request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("conceptos").innerHTML=this.responseText;                
            }
        }
    }
}
request.send(null);
}

function reservar(){     
  idioma =  document.getElementById("idioma").value;
    request.open("GET","http://flyapp.260mb.net/consultarAsientos.php?id="+idv+"&clase="+clss+"&idioma="+ idioma,true);
    request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("tablaAsientos").innerHTML=this.responseText;
                //ressss=this.responseText;  
                //asientosDisp(ressss);
            }
        }
    }
}
request.send(null);    
}
function cancelarVuelo(){  
   var clave= document.getElementById("clave").value; 
   var pass= document.getElementById("pw").value;
   
   request.open("GET","http://flyapp.260mb.net/cancelarVuelo.php?clave="+clave+"&pass="+pass,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                alert(this.responseText);
            }
        }
    }
}
request.send(null);
}

function aeropuertosDestino(){
request=new getAjax();
var pais = document.getElementById("paisDestino").value;
request.open("GET","http://flyapp.260mb.net/aeropuertos.php?pais="+pais,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("divAeropuertosDestino").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function aeropuertosOrigen(){
request=new getAjax();
var pais = document.getElementById("paisOrigen").value;
request.open("GET","http://flyapp.260mb.net/aeropuertosOrigen.php?pais="+pais,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("divAeropuertosOrigen").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}


function cargarPaises(){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/pais.php?",true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("divCargarPaises").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}
function cargarPaises2(){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/pais2.php?",true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("divCargarPaises2").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}
function consultarVuelos(){
request=new getAjax();
idioma =  document.getElementById("idioma").value;
var elementos = document.getElementsByName("tipoMoneda");
for(i=0;i<elementos.length;i++){
if(elementos[i].checked) {
var moneda = elementos[i].value;
}
}
var origen = document.getElementById("aeropuertoOrigen").value;
var destino = document.getElementById("aeropuertoDestino").value;
var fecha = document.getElementById("salida").value;
request.open("GET","http://flyapp.260mb.net/consultarVuelos.php?moneda="+moneda+"&origen="+origen+"&destino="+destino+"&fecha="+fecha+"&idioma="+idioma,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("divTablero").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}
