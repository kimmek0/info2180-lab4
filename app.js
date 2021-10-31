onload= function(){
    var btn=document.getElementById('btn');
    var request=new XMLHttpRequest();

    btn.addEventListener('click',function(event){
        var url='superheroes.php'
        request.onreadystatechange=hrequest;
        request.open('GET',url);
        request.send();
    });

    function hrequest(){
        if(request.readyState===XMLHttpRequest.DONE){
            if (request.status===200){
                var response=request.responseText;
                alert(response);
            }else{
                alert('Error. There was a problem with the request')
            }
        }
    }
} 