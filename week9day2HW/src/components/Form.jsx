import { useState, useEffect } from 'react'

function Form(props) {
    // add state to hold the data of the form
    const [formCard, setFormCard] = useState({
        card: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormCard({ ...formCard, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();
       
        props.cardsearch(formCard.card)
    }
console.log(formCard.card);
// function to check the card
//   const luhnCheck = num => {
//     let arr = (num + '')
//       .split('')
//       .reverse()
//       .map(x => parseInt(x));
//     let lastDigit = arr.splice(0, 1)[0];
//     let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
//     sum += lastDigit;
//     return sum % 10 === 0;
//   };
//   console.log(luhnCheck(formCard.card));
// const cardvalue2 = luhnCheck(formCard.card); 

// const check = (checks =>{
//       if (cardvalue2 === "true")
//        return "valid"
//       })
//  const noCheck = (checks =>{
//     if (cardvalue2 !== "true")
//      return "invalid"
//     })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="card"
                    onChange={handleChange}
                    value={formCard.card}
                   
                />
                <input type="submit" value="submit" />

            </form>
            <p>Type the card number here</p>
           {/* <>
           {cardvalue2 ? check() : noCheck() }
           </> */}
        </div>
    )

   
}

export default Form