
let display = document.querySelector(".display");
let currentInput = "";
let previousInput = null;
let operator = null;


let buttons = document.querySelectorAll('.buttons button,.func button');
buttons.forEach((button) => {
  button.addEventListener('click',()=>{
    const value = button.value;
    console.log(value.charCodeAt())
    if(value === "C"){
        currentInput = "";
        result = "";
        display.innerText = '0';
        
      }
    if(!isNaN(value)){
      currentInput+= value;
      display.innerText = currentInput;
    }
    else if(value === "+" || value ==="-" || value ==="x"|| value ==="/"){
      operator = value;
      previousInput = parseFloat(currentInput);
      currentInput = '';
      // let result = currentInput + previousInput;
    }
  
    else if(value === "="){
      if(operator && previousInput !== null && currentInput!== ""){
          let result;
      if(operator==="+"){
        result = previousInput + parseFloat(currentInput);
        console.log("success")
      }
      else if(operator === "-"){
        result = previousInput - parseFloat(currentInput);
      }
      else if(operator === "x"){
        result = previousInput * parseFloat(currentInput)
      }
      else if(operator === "/"){
        console.log("success");
        result = previousInput / parseFloat(currentInput);
        
      }
      
      console.log(operator)
      display.innerText = result;
      currentInput = result.toString();
      previousInput = null;
      operator = null;
      }
    
    }
  })
  
});


