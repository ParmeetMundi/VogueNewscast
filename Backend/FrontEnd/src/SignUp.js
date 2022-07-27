import styled from "styled-components";
import { Button } from "./Components/Button";
import React,{useState} from "react";
import { auth } from './firebase'
import {useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const [confirmpassword, setconfirmpassword] = useState("")
   const [name, setname] = useState("")
   const navigate = useNavigate()

   const signUp=()=>{

    if (confirmpassword !== password||password.length < 6||name.length === 0) {
      alert("Check your details")
    }     
      else{
        createUserWithEmailAndPassword(auth,email, password)
          .then(() => {
            navigate('/Login')
            alert("Account created \nLogin to enjoy")
            
      }).catch((err)=>{
        alert("Some Thing Went Wrong\n"+err)
      })
    }

    }


  return (
    <div className="body">
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <input class="space" type="text" placeholder="Email" value={email} onChange={e=>setemail(e.target.value)} />
        <input type="text" placeholder="Username" value={name} onChange={e=>setname(e.target.value)}/>
        </InputContainer>
        <InputContainer>
        <input type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.target.value)}/>
        <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={e=>setconfirmpassword(e.target.value)}/>
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" onClick={signUp} >SignUp</Button>
      </ButtonContainer>
      <LoginWith></LoginWith>
      <HorizontalRule />
      
      <ForgotPassword></ForgotPassword>
    </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 60vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 80vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 80vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 80vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 60vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;


const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default SignUp;
