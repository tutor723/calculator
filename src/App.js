
import './App.css';
import { useState } from "react";


const App  =() =>{

   /*using state hook for the setResult, setInput */
  const [result, setResult] = useState("");
  const [ansDisplayed, setAnsDisplayed] = useState(false);
  const [input, setInput] = useState('');
  const [key, setKey] = useState("");
  const number =[1,2,3,4,5,6,7,8,9]
  const maxLength = 25;
 
 /* Enter a value in calculator textbox after clicking on button [can enter number and +,-,/.* by keyboard only] */
  function handleKeyPress(e) {
        var key = e.key;
        console.log( "You pressed a key: " + key );
        setResult( " ");
        setResult( result +  key )
                              }

  const handleClick = (selectNumber)=>{
    //checking if answer is displayed or not 
    if (ansDisplayed && number.indexOf(selectNumber) !== -1) {

      return;

    }

    setAnsDisplayed(false);
                  if(setResult("0")){
                  result = "";
                  //console.log(result);
                  //console.log(selectNumber)
                                      }
         //creating string of clicked button                             
                 setResult(result + selectNumber);

          //limit the string length       
               if (result.length >= maxLength) {
                   setResult("");
                                               }


          //not allowed to enter 2 operand next to each other.                                     
      for(let i =0 ;i<=result.length; i++){
    
      if((result[i] === '+' )  && (result[i+1] == '+' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
      }
      
      if((result[i] === '+' )  && (result[i+1] == '-' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '+' )  && (result[i+1] == '*' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '+' )  && (result[i+1] == '/' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '-' )  && (result[i+1] == '+' )){
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '-' )  && (result[i+1] == '-' )){
       
        setResult(result); 
        setResult(result.slice(0,-1));  
       }

       
      if((result[i] === '-' )  && (result[i+1] == '*' )){
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '-' )  && (result[i+1] == '/' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '*' )  && (result[i+1] == '/' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '*' )  && (result[i+1] == '-' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '*' )  && (result[i+1] == '+' )){
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '*' )  && (result[i+1] == '*' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '/' )  && (result[i+1] == '/' )){
       
        setResult(result); 
        setResult(result.slice(0,-1));  
       }
       
      if((result[i] === '/' )  && (result[i+1] == '+' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
       
      if((result[i] === '/' )  && (result[i+1] == '*' )){
       
        setResult(result); 
        setResult(result.slice(0,-1));  
       }
       
      if((result[i] === '/' )  && (result[i+1] == '-' )){
       
        setResult(result); 
        setResult(result.slice(0,-1)); 
       }
    }
   
    }



 /*find result of calculation */   
const answer = (value) => {

  setResult(eval(result).toString());

  setAnsDisplayed(true);

  return;

};
/*Start the calculator */
  const start =() =>{
    var cons = 0;
    setResult(""); }


/*backspace function in the calculator */
  const back =() =>{
    setResult(result.slice(0,-1)); 
  }

 
return (

     <div className = "calculator">

     <input type = "text" placeholder="0" value ={result}  onKeyPress={(e) => handleKeyPress(e)}  />
     
     <button className ="buttonStart" onClick={start}>C</button>
     <button className ="buttonPlus" onClick={()=>handleClick('+')}>+</button>
     <button  className ="buttonX" onClick={()=>handleClick('-')}>-</button>
     <button className ="button-" onClick={()=>handleClick('*')}>X</button>

          {number.toReversed().map((num,index) =>{
                return(
                  <div key = {index} className ="number" >
                     <button className ="button1" onClick={()=>{handleClick(num);}}> {num} </button>

                   </div>
                      )
                                                  }
                        )}


     <button className ="button1" onClick={()=>handleClick('0')}>0</button>
     <button className ="button1" onClick={()=>handleClick('.')}>.</button>
     <button className ="button1" onClick={()=>handleClick('/')}>/</button> 
     <button className ="button1" style= {{ width: '110px',backgroundColor:"red"}} onClick={back}>⌫</button>
    <button className ="button2"  style= {{ width: '105px',backgroundColor:"green"}}  onClick={answer}>=</button>

     </div>

);
}
export default App;





