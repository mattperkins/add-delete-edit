import * as React from 'react'

const Ade = ({ade, deleteAde}) => {
 const adeList = ade.length ? (
    ade.map((item) => {
     return (
      <div key={item.id}><ul>
        <li onClick={() => deleteAde(item.id)}>{item.content}</li> 
       </ul></div>
     )
    })  
 ) : <p>Your list is empty</p>
 return (
  <div>
  {adeList} 
  </div>
 )
}

export default Ade