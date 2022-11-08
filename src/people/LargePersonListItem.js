import React from 'react'

const LargePersonListItem = ({person}) => {
  const {name,age,hairColor,hobbies}=person;
  return (
    <>
    <h1>{name}</h1>
    <p>Age: {age} years</p>
    <p>Hair Color: {hairColor}</p>
    <h3>Hobbies:</h3>
    <ul>
      {hobbies.map(hobby=><li key={hobby}>{hobby}</li>)}
    </ul>
    </>
  )
}

export default LargePersonListItem