function sign(){
    let a = parseInt(document.getElementById("num").value);
    if(a==0)
    {
        document.getElementById('check').innerHTML=" the number is "+a+    " zero";
    }
    else if(a>0){
        document.getElementById('check').innerHTML=" thenumber is "+a+ " positive";

    }
    else if(a<0)
    {
        document.getElementById('check').innerHTML=" the number is "+a+ " negetive";
    }


}