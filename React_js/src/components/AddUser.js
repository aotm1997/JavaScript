import React from "react"
class AddUser extends React.Component {
  userAdd = {}
  constructor(props){
  super(props)
  this.state = {
        first_name: "",
        last_name: "",
        bio: "",
        age: 1,
        isHappy: false
  }
  }
    render(){
      return(
        <form ref={(el2) => this.myF = el2}>
            <input placeholder="Имя" onChange={(e) => this.setState({first_name:e.target.value})}/>
            <input placeholder="Фамилия" onChange={(e) => this.setState({last_name:e.target.value})}/>
            <textarea placeholder="Биография" onChange={(e) => this.setState({bio:e.target.value})}/>
            <input placeholder="Возраст" onChange={(e) => this.setState({age:e.target.value})}/>
            <label htmlFor="isHappy">Счастлив?</label>
            <input type="checkbox" id ="isHappy" onChange={(e) => this.setState({isHappy:e.target.checked})}/>
            <button type="button" onClick={() => { 
              this.myF.reset()
              this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy
              }
              if(this.props.user)
                  this.userAdd.id = this.props.user.id
              this.props.onAdd(this.userAdd)
              }
              }>Добавить</button>
        </form>
      )
    }  
  }

export default AddUser