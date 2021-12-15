var request = function(url, callback) { 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 
            callback(JSON.parse(this.response))
        } 
    }; 
    xmlhttp.open("GET", '/action' + url); 
    xmlhttp.send(); 
}
function onClickListenAddStory(){
    var node=document.getElementById("card-container")
        var div= document.createElement("div");
        var i=0;
        for(i;i<node.childElementCount;i++){
        }
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 
            
            
        } 
    };
    console.log(i);
    xmlhttp.open("GET", "/action/createUsrStories.php?id="+i); 
    xmlhttp.send();
   setTimeout(refreshview,50);

}
function onClickListenDeleteStory(id){
    console.log(id)
    node=document.getElementById("card-container")
    id= id.replace("deleteUserStory","card")
    
    var idToDel=id.replace("card ","");
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 
            node.removeChild(document.getElementById(id))
            
        }
    }; 
    console.log(idToDel);
    xmlhttp.open("GET", "/action/deleteUsrStories.php?id="+idToDel);
    xmlhttp.send();
}
function onClickSaveStory(id){
    console.log(id)
    node=document.getElementById("card-container")

    id= id.replace("saveUsrStory","card")
    var idToreplace=id.replace("card ","")
    
    
    message=document.getElementById("description "+idToreplace)
    console.log(message)
    titre=document.getElementById("titre "+idToreplace);
    message=message.innerHTML;
    titre=titre.innerHTML;
    console.log(titre);
    console.log(message);   
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 
            console.log("succes")
        }else
            console.log(this.response);
    };
    url = "/action/updateUsrStories.php?id="+idToreplace+"&message="+message+"&title="+titre;
    console.log(url)
    xmlhttp.open("GET",url); 
    xmlhttp.send();
}


function refreshview(){
request("/getUsrStories.php",function(data){
    data.forEach(function(objet){
        var node=document.getElementById("card-container")
        var div= document.createElement("div");
        var i=0;
        for(i;i<node.childElementCount;i++){
        }
        console.log(data);
        
        var card=
        "<img class='card-img-top' src='' alt='Card image cap'>"+
        "<div class='card-body'>"+
        "<div class='d-flex flex-row'>"+
        "<h5 class='card-title' id='titre "+data[i].id+"' contenteditable='true'>"+data[i].titre+"</h5>"+"<input type='image' id ='saveUsrStory "+data[i].id+"' width='20rem' height='20rem' src='./images/floppy-disk-svgrepo-com.svg'>"+
        "<input type='image' id ='deleteUserStory "+data[i].id+"' width='30rem' height='30rem' src='./images/close+cross+delete+exit+stop+warning+icon-1320191178031663161_0.svg'>"+
        "</div>"+
        "  <p class='card-text' id='description "+data[i].id+"' contenteditable='true'>"+data[i].description+"</p>"+
        "  <a href='#' class='btn btn-primary'>Go somewhere</a>"
        div.className='card'
        div.id="card "+data[i].id
        div.style='width: 18rem;'
        div.innerHTML=card;
        //div.onclick=getIdToDelete(this.id)
        node.append(div);
        //document.getElementById("card "+i).onclick= function(){getIdToDelete(this.id)}
        document.getElementById("deleteUserStory "+data[i].id).onclick= function(){onClickListenDeleteStory(this.id)}
        document.getElementById("saveUsrStory " +data[i].id).onclick=function(){onClickSaveStory(this.id)}
        console.log(node.childElementCount)
    })
    var xmlhttp2 = new XMLHttpRequest(); 
    xmlhttp2.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {         
            var xmlhttp2 = new XMLHttpRequest();
        } 
    };
    xmlhttp2.open("GET", "/action/alterUsrStories.php");
    xmlhttp2.send();    
})}

function displayRows(){
    
}
refreshview();