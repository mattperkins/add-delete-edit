import * as React from 'react'
import Ade from './Ade'

class App extends React.Component{
 state={
  ade: [
   {id: 1, content: 'compile source code'},
   {id: 2, content: 'administer repo boundary'}
  ]
 }
 deleteAde = (id) => {
   const ade = this.state.ade.filter(item => {
    return item.id !== id
   })
   this.setState({
    ade
   })
 }
 render(){
  return(
   <div className="wrapper">
      <h1>Add, delete, edit</h1>
      <Ade ade={this.state.ade} deleteAde={this.deleteAde} />
   </div>
  )
 }
}

export default App