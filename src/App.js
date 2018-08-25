import * as React from 'react'

class App extends React.Component{
 state={
  ade: [
   {id: 1, content: 'compile source code'},
   {id: 2, content: 'administer repo boundary'}
  ]
 }
 render(){
  return(
   <h1>Add, delete, edit</h1>
  )
 }
}

export default App