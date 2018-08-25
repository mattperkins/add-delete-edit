import * as React from 'react'
import Ade from './Ade'
import AddAde from './AddAde'

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
   this.setState({ ade })
 }
 addAde = (item) => {
   item.id = Math.random()
   let items = [ ...this.state.ade, item ]
   this.setState({ ade: items })
 }
 render(){
  return(
   <div className="wrapper">
      <h1>Add, delete, edit</h1>
      <Ade ade={this.state.ade} deleteAde={this.deleteAde} />
       <AddAde addAde={this.addAde}/>
   </div>
  )
 }
}

export default App