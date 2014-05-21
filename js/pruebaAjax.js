// JavaScript Document
function getAjax(){
    try{
        var request = new XMLHttpRequest();
    }catch (e1){
        try{
            request = new ActiveXObject("Msxml.XMLHTTP");
        }catch (e2){
            return false;
        }        
    }
    return request;
}