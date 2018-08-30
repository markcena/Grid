var button = document.querySelector("button");
var input = document.querySelector("input");
var td =document.querySelectorAll("td");
button.addEventListener("click",function(e){
    function color(){
        cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
        cell.style.backgroundColor = 'red';
    }
    var x=1;
    var y=1;
    var counter=0;
    var cell;
    var limit =input.value;  
    var i=0;
    console.log(input.value)
    
    while ( i<td.length){
        td[i].style.backgroundColor="";
        i++;
    }


    while(x< limit){
       color();
       x++;
       
     }
       while(y < limit){
        color();
        y++;
        
     }
       
        while(x>1){
        color();
        x--;
    }
        while(y>1){
        color();
        y--;
    }
})
