import * as React from 'react'

const Ade = ({ade}) => {
 const adeList = ade.length ? (
    ade.map((item) => {
     return (
      <div><ul>
        <li key={item.id}>{item.content}</li> 
       </ul></div>
     )
    })  
 ) : <p>Your list is emmpty</p>
 return (
  <div>
  {adeList} 
  </div>
 )
}

export default Ade