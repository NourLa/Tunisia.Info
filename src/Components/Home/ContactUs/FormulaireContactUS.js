import React from "react";
import axios from 'axios';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class FormsPage extends React.Component {
  state = {
    name: "",
    email: "",
    content: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    let message={"senderName": this.state.name,
    "senderEmail": this.state.email,
    "body": this.state.content};
    console.log(message);
    axios.post('/user/contact', message)   
              .then(res=>console.log(res.data))
              .catch((err)=>alert(err))
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol>
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-textForm"
              >
                Name :
              </label>
              <input
                value={this.state.fname}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol >
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-textForm"
              >
                Email :
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
            
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol >
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-textForm"
              >
                Comments :
              </label>
              <input
                value={this.state.content}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="content"
                placeholder="Please enter your comments"
                required
              />
            </MDBCol>
        
          </MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBBtn className="btnsubmit btn-outline-warning Ripple-parent" type="submit">
            Send
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FormsPage;