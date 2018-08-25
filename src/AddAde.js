import * as React from 'react'

class AddAde extends React.Component{
 state={
   content: ''
 }
 handleChange = (e) => {
   this.setState({
    content: e.target.value
   })
 }
 handleSubmit = (e) => {
  e.preventDefault()
  this.props.addAde(this.state)
  this.setState({ content: '' })
 }
 render(){
  return(
    <form onSubmit={this.handleSubmit}>
     <p>Add an Ade</p>
     <input type="text" onChange={this.handleChange} value={this.state.content} />
    </form>
  )
 }
}

export default AddAde