let links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) { 
        links[i].addEventListener("mouseover", clicking, {once: true});
        function clicking() { 
            this.textContent = `${this.title} (${this.href})`;
            this.title = "";
        }    
    }
        
    let ip = document.querySelectorAll(".first-input");
    for (let i = 0; i < ip.length; i++) { 
        ip[i].addEventListener("blur", bluring, {once: true});
        function bluring() { 
            console.log(this.value);
        }    
    }

    let nums = document.querySelectorAll("p");   
    for (let i = 0; i < nums.length; i++) { 
        nums[i].addEventListener("click", numbers, {once: true});
        function numbers() { 
            let num = this.textContent;
            this.textContent = num*num;
        }    
    }

    let inputs2 = document.querySelectorAll("input[data-length]");
    for (let i = 0; i < inputs2.length; i++) { 
        inputs2[i].addEventListener("focus", focusing);
        function focusing() { 
            let validationNum = this.dataset.length;              
            this.onblur = function(){ 
             let text = this.value;                              
              if (text.length === +validationNum){
                this.className = "green";
            } else {
                this.className = "red";
            }  
            }                
        }    
    }
