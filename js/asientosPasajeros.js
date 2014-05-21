function asientoparaAdulto1(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoAdulto1.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienAdul1").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function asientoparaAdulto2(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoAdulto2.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienAdul2").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function asientoparaAdulto3(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoAdulto3.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienAdul3").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function asientoparaAdulto4(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoAdulto4.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienAdul4").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function asientoparaAdulto5(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoAdulto5.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienAdul5").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function asientoparaMenor1(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoMenor1.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienMen1").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}

function asientoparaMenor2(id,clase){
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoMenor2.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienMen2").innerHTML=this.responseText;
            }
        }
    }
}
request.send(null);
}


function asientoparaMenor3(id,clase){
  
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoMenor3.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienMen3").innerHTML=this.responseText;
	      
            }
        }
    }
}
request.send(null);
}


function asientoparaInfante1(id,clase){
  
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoInfante1.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienInf1").innerHTML=this.responseText;
	      
            }
        }
    }
}
request.send(null);
}


function asientoparaInfante2(id,clase){
  
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoInfante2.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienInf2").innerHTML=this.responseText;
	      
            }
        }
    }
}
request.send(null);
}

function asientoparaInfante3(id,clase){
  
request=new getAjax();
request.open("GET","http://flyapp.260mb.net/asientoInfante3.php?id="+id+"&clase="+clase,true);
request.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==200){
            if(this.responseText!=null){
                document.getElementById("numAsienInf3").innerHTML=this.responseText;
	      
            }
        }
    }
}
request.send(null);
}