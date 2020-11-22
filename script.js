var body = document.body;

//header p_1
var h1P1 = document.createElement("h1");
h1P1.textContent = "Coding Quiz";
body.appendChild(h1P1);

//paragraph p_1

var p1P1 = document.createElement("p");
p1P1.textContent =  "blahlalskdlaksjdlaskjd laksjdlaksjdlakjsdlskjdhfglskjdfhlksajdhflksajdhflskjdhflksajhdflkasjhdflkasjhdflkasjhdflksadjh";
body.appendChild(p1P1);


//button one
var buttonP1 = document.createElement("button")
buttonP1.textContent = "Start Quiz"
buttonP1.addEventListener("click", pageTwo);
body.appendChild(buttonP1);

function pageTwo(){
    
    var div2 =  document.createElement('div');
    div2.textContent = "Commonly used datatypes do not include ___";
        //   giv that div an id of two
        div2.setAttribute("id", "two");
        //   append the new div to the dom
          this.parentNode.appendChild(div2);
        //   remove the clicked div
          this.parentNode.removeChild(this);
        
    body.appendChild(div2);
}

      
