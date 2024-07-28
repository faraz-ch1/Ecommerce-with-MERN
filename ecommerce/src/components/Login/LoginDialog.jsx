import { useState, useContext } from "react";
import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material";
import { authenticateLogin, authenticateSignUp } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Wrapper = styled(Box)`
    height: 70vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 20px;
    & > div, & > button {
        margin: 10px 0;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #fb641b;
    color: #fff;
    border-radius: 2px;
    height: 48px;
`
const SignUpButton = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    border-radius: 2px;
    height: 48px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%)
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const signUpInitialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
}

const loginInitialValues = {
    email: '',
    password: '',
}

function LoginDialog(props){
    const [account, toggleAccount] = useState(true);
    const [signUp, setSignUp] = useState(signUpInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const { setAccount} = useContext(DataContext)

    function closeDialog(){
        props.setOpen(false)
        toggleAccount(true)
        setError(false)
    }
    function signupPage(){
        toggleAccount(false)
    }
    function signinPage(){
        toggleAccount(true)
    }

    function onInputChange(e){
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
        console.log(signUp)
    }
    async function signUpUser(){
       let response = await authenticateSignUp(signUp);
       if (response) return;
       closeDialog();
       setAccount(signUp.firstname);
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log("This is the response from authenticateLogin ", response)
        if(response.status === 200){
            closeDialog();
            setAccount(response.data.data.firstname);
        } else {
            setError(true);
        }
    }

    return(
        
        <Dialog open={props.open} onClose={() => {closeDialog()}}>
        {account?
            <Wrapper>
            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="email"  label="Enter your Email" />
            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password"  label="Enter Password" />
            { error && <Error>Please enter Valid Email or Passowrd</Error>}
            <Text>By Continuing, you agree to our Terms and Conditions</Text>
            <LoginButton onClick={loginUser}>Login</LoginButton>
            <Typography style={{textAlign: "center", fontSize: 14}}>OR</Typography>
            <SignUpButton onClick={signupPage}>Sign Up</SignUpButton>
            </Wrapper>
        :
            <Wrapper>
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="First Name" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Last Name" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Password" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="phone" label="Phone No" />
            <LoginButton onClick={signUpUser}>Continue</LoginButton>
            <SignUpButton onClick={signinPage}>Existing User? Sign In</SignUpButton>
            </Wrapper>
        }
        
        </Dialog>
        
    )
}



export default LoginDialog;