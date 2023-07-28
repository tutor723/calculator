 const number =[1,2,3,4,5,6,7,8,9,0]
  

const handleClick = (selectNumber)=>{
  console.log(selectNumber)



 
}


const Car=() = > {
  const [colour, setColour] = useState("red");



  
      console.log(colour);



}


return (
    <div>
    {number.map((num,index) =>{
      return(
        <div key = {index}>
          <button onClick={()=>
          {
            handleClick(num);
            car();
          }
    }> {num} </button>


    </div>

   



    )
  
}
    )}


    </div>


  );
}



export default App;
const handleClicks = (event)=>{
  console.log(setResult(result.concat(event.target.value)));
   
    }


    <h1>{result}</h1>


  <input type ="text" value ={result}/>
  <input type = "button" value ="6" button onClick = {handleClick}   />
<input type = "button" value ="6" onClick = {handleClick}/>
<input type = "button" value ="6"button onClick = {handleClick}/>