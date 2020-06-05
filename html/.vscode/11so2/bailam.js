function loadDoc(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystate= function(){
        if(this.readystate ==4&& this.status== 200){
            document.getElementbyid("demo").InnerHTML=this.responseText;

        }
    }
    xhttp.open("get","",true)
    
}