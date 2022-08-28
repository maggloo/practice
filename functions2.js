

var equation = quadraticEquation(1, 1, 1);
var finalResult;


function quadraticEquation(a, b, c) {
    if ((a != 0) && (!((b == 0) || (c == 0)))) {
      var d = b**2 - (4 * a * c);

        function variableC(c) {
            if (c == 1) { 
                var c1 = `+ 1`;  
            } else if (c == -1) {    
                c1 = `- 1`;  
            } else if (c < 0) {    
                c1 = c * -1;  
                c1 = `- ${c1}`;  
            } else if (c > 0) {    
                c1 =  `+ ${c}`;  
            } 
            return c1;    
        }       

        var finalC = variableC(c);

        function variableB(b) {
            if (b == 1) { 
                var b1 = `+ x `;                           
            } else if (b == -1) {
                b1 = `- x `;            
            } else if (b < 0) {
                b = b * -1;
                b1 = `- ${b}x `;                     
            } else if (b > 0) {
                b1 = `+ ${b}x `;          
            }
            return b1;
        }

        var finalB = variableB(b);              

        function variableA(a) {
            if ((a == 1)) {
                var a1 = `x^2 `;           
            }
            else if (a == -1) {
                a1 = `-x^2 `;
            } 
            else if ((a > 0) || (a < 0)) {
                a1 = `${a}x^2 `;
            }
            return a1;
        }

        var finalA = variableA(a);

      if (d < 0) { 
        finalResult = `уравнение ${finalA + finalB + finalC} = 0 не имеет вещественных корней`;

      } else if (d == 0) {
        var x = -b / (2 * a);
        finalResult = `уравнение ${finalA + finalB + finalC} = 0 имеет один корень x = ${x}`;  

      } else if (d > 0) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        finalResult = `уравнение ${finalA + finalB + finalC} = 0 имеет корни x1 = ${x1} и x2 = ${x2}`;
      } 

    } else {
      finalResult = "Ошибка.";
    }

    return finalResult;
}

console.log (equation);

