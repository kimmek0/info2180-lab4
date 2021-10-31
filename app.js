onload= function(){
    var btn=document.getElementById('btn');
    var request=new XMLHttpRequest();
    var result=document.getElementById('result');
    var result1=document.getElementById('result-tag');
    var character=document.getElementById('textbox');
    btn.addEventListener('click',function(event){
        event.preventDefault();
        var url="superheroes.php?charac_data="+character.value;
        request.onreadystatechange=hrequest;
        request.open('GET',url,true);
        request.send(); 
    });
    
    function hrequest(){
        if(request.readyState===XMLHttpRequest.DONE){
            if (request.status===200){
                var response=request.responseText;
                result1.innerHTML="RESULT"
                result.innerHTML=response;
                
            }else{
                result1.innerHTML="RESULT"
                result.innerHTML="Error. There was a problem with the request";
                
            }
        }
    }
}