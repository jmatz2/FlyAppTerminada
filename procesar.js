// JavaScript Document
function clickP(){
    request = new getAjax();
    var url= document.getElementById("paisori").value;
    request.open("GET", "aeropuertos.php?url="+url, true);
    request.onreadystatechange = function ()
    {
        
        if(this.readyState==4){
            if(this.status==200){
                if(this.responseText!=null){
                    document.getElementById("aeropuertoOrigen").innerHTML=this.responseText;
                }
            }
        }       
    }
     request.send(null);
}