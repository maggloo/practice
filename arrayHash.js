
function uncompress(str){
    var result = "";
    var repeat = "";
    var chunks = str.split("");

    if (chunks.length == 1){
        result = str;
        } else {        
          for (var i = 0; i < chunks.length; i++){
            if (!(+chunks[i]) && (chunks[i] != "0")){
                var letter = chunks[i];
            } else if ((+chunks[i+1]) || (chunks[i+1] == "0")){
                var repeat1 = chunks[i];
                repeat = repeat + repeat1;  
            } else if ((+chunks[i]) || (chunks[i] == "0")){
                var repeat1 = chunks[i]; 
                repeat = repeat + repeat1;              
                result = result + letter.repeat(+repeat);
                letter = "";
                repeat = "";         
            }             
          }              
        }
    console.log(`"${str}" => "${result}"`);
}

function compress(str){
    var count = 0; 
    var result = "";
    var chunks = str.split("");
  
    if (chunks.length == 1){
         result = str;
          } else {
        for (var i = 0; i < chunks.length; i++){
            count++;
            if (chunks[i] != chunks[i+1]){
                var num = chunks[i];       
                var fin = count; 
                result = result + num + fin;
                count = 0; 
            } else if (chunks[i] == chunks[i+1]){
                continue;
            }
          }
        }
    console.log(`"${str}" => "${result}"`);
}


compress("a");
compress("aaa");
compress("aabbb");
compress("aaabcc");
uncompress("a");
uncompress("a5");
uncompress("a2b3");
uncompress("a12b1c3");
uncompress("a1b10c100d1000");


