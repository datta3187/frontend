import React, { Component } from 'react'
import { Button, Card, Image, Input, Checkbox, Form } from 'semantic-ui-react'
import Textboxx from '../../common/textboxx';
import Buttonn from '../../common/buttonn'
import Checkboxx from '../../common/checkbox'
import axios from 'axios';
import { connect } from 'react-redux';
import {registerUsers} from "../../redux/actions/user";

class HomeCard extends Component {
    constructor(props){
        super(props);
        this.state={
            heading:'',
            description:'',
            // name:'',
            email:'',
            password:'',
            confirm_password:'',
            refferal_ID:'',
            language:'',
            errors: {}
        }
    }

    // name=(event)=>{
    //     this.setState({name : event.target.value});
    // } 
    email=(event)=>{
        this.setState({email : event.target.value});
    } 
    password=(event)=>{
        this.setState({password : event.target.value});
    } 
    confirm_password = (event) =>{
        this.setState({confirm_password : event.target.value})
    }
    refferal_ID=(event)=>{
        this.setState({refferal_ID : event.target.value});
    } 
    language = (event)=>{
        this.setState({language : event.target.value});
    }

    submituserRegistrationForm =(e) =>{
        e.preventDefault(); 
        if(this.validateForm()){ 
            let obj={ 
                user_name : this.state.name ,
                email : this.state.email ,
                password : this.state.password ,
                refid : this.state.refferal_ID,
                lang : this.state.language
             } 
             this.props.register_users(obj);

            console.log("my form data :  : ",obj); 
        }
    }

    validateForm(){ 
          let errors = {};
          let formIsValid = true;
  
        //   if(!this.state.name){
        //       formIsValid = false;
        //       errors['name'] = '*Please enter name';
        //   } 
        //   if(typeof this.state.name !== "undefined"){
        //       if(! this.state.name.match(/^[a-zA-Z ]*$/))
        //       { formIsValid = false;
        //           errors['name']= '*Please enter alphabats only.'; }
        //   }
  
          if(!this.state.email){
              formIsValid = false;
              errors['email'] = "*Please enter a valid Email address."
          }
  
          if(this.state.email){
              var pattern =  new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
              if(!pattern.test(this.state.email)){
                  formIsValid = false;
                  errors['email'] = "*Please enter a valid email address";
              }
          } 
          if(!this.state.password){
              formIsValid = false;
              errors[this.state.password] = '*PLease enter your password.' 
          }
          if(typeof this.state.password !== "undefined"){
              if(!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
                  formIsValid = false;
                  errors['password'] = '* Please enter secure and strong password.';
              }
          }
          
          if(this.state.password !== this.state.confirm_password){
            formIsValid = false;
            errors['confirm_password'] = "* Passwords don't match"
          }
          this.setState({
              errors : errors
          }) 
          return formIsValid;
      }


    render() {
        return (
            <div>
                <Card.Group>
                    <Card>
                    <Card.Content> 
                    <Card.Header>
                        {this.props.heading} REGISTER WITH TRADENCE
                    </Card.Header>
                    <Card.Description>
                        {this.props.description} Trusted by millionsof people across the globe
                    </Card.Description>

                <form method='post' name = 'userRegistrationForm' onSubmit={this.submituserRegistrationForm}>
                {/* <div className="form-grp">
                    <Input name='name' value={this.state.name} onChange={this.name} placeholder='Name'></Input>
                        <div className='errorMsg'>{this.state.errors.name}</div>
                    </div> */}

                    <div className="form-grp">
                    <Input name='email' value={this.state.email} onChange={this.email} placeholder='Email'></Input>
                        <div className='errorMsg'>{this.state.errors.email}</div>
                        </div>
                    <div className="form-grp">
                    <Input type='password' name='password' value={this.state.password} onChange={this.password} placeholder='Password'></Input>
                        <div className='errorMsg'>{this.state.errors.password}</div>
                    </div>
                    <div className="form-grp">
                    <Input type = 'password' name='confirm_password' value={this.state.confirm_password} onChange={this.confirm_password} placeholder='confirm_password'></Input>
                    <div className='errorMsg'>{this.state.errors.confirm_password}</div> 
                    </div>
                    <div className="form-grp">
                    <Input name='refferal_ID' value={this.state.refferal_ID} onChange={this.refferal_ID} placeholder='Refferal ID'></Input>
                        <div className='errorMsg'>{this.state.errors.refferal_ID}</div>
                        </div>
                    <div className="form-grp">    
                    <Input name='language' value={this.state.language} onChange={this.language} placeholder='Language'></Input>
                    {/* <div className='errorMsg'>{this.state.errors.language}</div> */}
                    </div> 
                    
                    <Checkbox label='I agree to tradences terms of use' />
                    <Buttonn buttons='REGISTER'></Buttonn> 
                </form>
                    </Card.Content> 
                    </Card> 
                </Card.Group>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
        register_users: (payload) => dispatch(registerUsers(payload))
    }
}
 
const Register_User = connect(null, mapDispatchToProps)(HomeCard);
export default Register_User;