import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import './EspaceAdmin.css'

class MessagesList extends Component {
  state = {  }
  componentDidMount(){
    // const {messagesList, messList}=this.props
    axios.get('/admin/messages')
    .then(res=>this.props.messList(res.data))
    .catch((err)=>console.log(err))
     }

    handleDel=(id)=>{
     // this.props.deleteContactReducer(id)
      axios.delete('/admin/deleteMessages/'+id)
    .then((res)=>this.props.deleteContactReducer(this.props.messagesList))
    .catch((err)=>console.log(err))
    }


  render() { 
    console.log(this.props.messagesList)
    return ( 
      <div className="messagesListDiv">
        {this.props.messagesList.map((el,index)=>(
          <div className='messageBox' key={index}>
            <div className="msgText">
              <h3>Name:</h3>
              <h5>{el.senderName}</h5>
              <h3>Email:</h3>
              <h5>{el.senderEmail}</h5>
              <h3>Message:</h3>
              <h5>{el.body}
              </h5>            
            </div>
            <Link to='/EspaceAdmin'>
            <button className='delmsgbtn' onClick={()=>this.handleDel(el._id)}>Delete message</button></Link>
          </div>
        ))}
          

          

        
      </div>
     );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    messagesList:state.messagesReducer      }
}


const mapDispatchToProps = dispatch => {
  return {
    messList: mlinks => {
      dispatch({
        type: "CALL_MESSAGES_LIST",
        mlinks
      });
    },
    deleteContactReducer:_id =>
      {
        dispatch({
          type:'REMOVE_MESSAGE',
          _id
        })
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);