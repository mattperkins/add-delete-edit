import * as React from 'react'
import Ade from './Ade'

class App extends React.Component{
 state={
  ade: [
   {id: 1, content: 'compile source code'},
   {id: 2, content: 'administer repo boundary'}
  ]
 }
 render(){
  return(
   <React.Fragment>
      <h1>Add, delete, edit</h1>
      <Ade ade={this.state.ade} />
   </React.Fragment>
  )
 }
}

export default App