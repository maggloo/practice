var btns = document.getElementsByTagName("button");

for (let i = 0; i < btns.length; i++) {
    let counter = makeCounter(); 
    btns[i].onclick = function() {
        btns[i].innerHTML = counter();  
    }   
}


function makeCounter() {   
    let count = 1;      
       return function() {
            return count++;
    }
}   
    

