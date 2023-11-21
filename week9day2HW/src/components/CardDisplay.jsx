import React from 'react'

function CardDisplay({validity}) {
    
  const  valid = () => {
    return (
        <>
            <h2>Card is Valid</h2>
        </>
    )}
    const  invalid = () => {
      return (
          <>
              <h2>Card is inValid</h2>
          </>
      )}
  return validity ? valid() : invalid();
}

export default CardDisplay