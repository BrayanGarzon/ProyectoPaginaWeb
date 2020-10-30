
var getData = function(){
    var name = document.getElementById("name").value;
    var edad = document.getElementById("edad").value;

    if(name == ""){
        document.getElementById("name").focus();
    } else {
        if(edad == "") {

            document.getElementById("edad").focus();
         
        }else{
            console.log(name+" "+edad);
            document.getElementById("name").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("name").focus()
        }
    }
}