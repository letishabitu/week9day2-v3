import React from 'react'
import Form from './Form'
import { useState } from 'react';
import CardDisplay from './CardDisplay';

function LuthAlgorithm() {

   const [validity, SetValidity] = useState(null); 

  const luhnCheck = (card) => {
    let arr = (card + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    
        if (sum % 10 === 0) {

            SetValidity(true)
          return SetValidity 
        }
        else{

          SetValidity(false)
          return SetValidity 
        }
         
        
  };

console.log(validity);

   
    
    
    

  return (
    <div>
     <Form cardsearch = {luhnCheck}/>
     <CardDisplay validity = {validity} />
     
      
     
     
    </div>
  )
}

export default LuthAlgorithm