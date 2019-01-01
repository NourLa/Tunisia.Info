import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './EspaceAdmin.css';



class LoginAdmin extends Component {
  state = { 
    username:'', pwd:'', logged:false,
   }

  componentDidMount(){
    // const {messagesList, messList}=this.props
    axios.get("/adminsLogin")
    .then(res=>this.props.admins(res.data))
    .catch((err)=>console.log(err))
     }


     handleChange=(e)=>{
      this.setState(
        {[e.target.name]:e.target.value}
      )
     }
     handleClick=()=>{
      //  alert('coucou')
      console.log(this.props.admList)
      let adm=this.props.admList.filter(e=>(
        e.username===this.state.username && e.pwd===this.state.pwd
      ));
      //const {log}=this.state.logged;
      if (adm.length===1) {
        this.props.admlogged(true)
        this.setState({logged:true});
        this.props.admlogged(true)
        //console.log(adm.length);
        console.log(this.props)}
     }

     renderRedirect = () => {
      if (this.state.logged) {

        return <Redirect to='/EspaceAdmin' />
      }
    }
  render() { 
    //console.log(this.props.admList)
    return ( 
      <div className='LoginBox'>
        {/* {this.props.messagesList} */}
        <TextField
          id="standard-name"
          label="Username"
          className='loginTxt'
          value={this.state.username}
          onChange={this.handleChange}
          margin="normal"
          name='username'
        />
        <TextField
          id="standard-name"
          label="Password"
          className='loginTxt'
          value={this.state.pwd}
          onChange={this.handleChange}
          margin="normal"
          name='pwd'
        /> 
        <Button variant="contained" color="secondary" className='LoginButton' onClick={this.handleClick}>
        Submit
      </Button>
      {this.renderRedirect()}
      </div>
     );
  }
}

const mapStateToProps=(state)=>{
  console.log(state.LoginReducer)
  return {
    admList:state.LoginReducer,
    loggedstate: state.LoginReducer     }
    //console.log(state.loggedstate)
}
 

const mapDispatchToProps = dispatch => {
  //let logged=this.state.logged;
  return {
    admins: adminsList => {
      dispatch({
        type: "CALL_ADMINS_LIST",
        adminsList
      });
    },
    admlogged: logged => {
      dispatch({
        type: "SET_LOGGED_STATE",
        logged
      });
    }
  }}
 
export default connect(mapStateToProps, mapDispatchToProps) (LoginAdmin);