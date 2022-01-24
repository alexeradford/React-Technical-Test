import styled from "styled-components";
import styledComponents from "styled-components"
import Card from "../Components/Card";
import PrimaryButton from "../Components/PrimaryButton";
import TextField from "../Components/TextField";
import {FaArrowRight} from "react-icons/fa"
import * as yup from 'yup'
import { useState } from "react";
import { useNavigate } from "react-router";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    height: 100%;
`

const LogInCard = styled(Card)`
    width: 50%;
    padding-left: 3%;
    padding-right: 3%;
    max-width: 500px;
    min-width: 300px;
`

const LogInFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const LogInTextField = styled(TextField)`
    align-self: stretch;
    margin-bottom: 10px;
`

const Title = styled.h1`
    font-size: 32pt;
    text-align: center;
    margin-bottom: 25px;
`

const Subtitle = styled.p`
    text-align: center;
    margin-bottom: 25px;
`

const LogInButton = styled(PrimaryButton)`
    align-self: stretch;
    margin-top: 10px;
    margin-bottom: 10px;
`

const LogInButtonIcon = styled(FaArrowRight)`
    float: right;
    margin-left: -100%;
    padding-left: -100%;
`
const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: gray;
    font-size: 10pt;
    font-weight: 600;
`
const StayLoggedInCheckbox = styled.input`
    margin-right: 10px;
`


const LoginPage = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()

    let schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
      });
    
    function onLogIn(event) {
        event.preventDefault();
    
        schema.isValid({
            email: email,
            password: password
        })
        .then(res => {
            if(res) {
                navigate("/home")
            }
        })
    }

    return (
        <Container>
            <LogInCard>
                <Title>Sign In</Title>
                <Subtitle>Sign in using your username and password.</Subtitle>
                <LogInFormContainer onSubmit={onLogIn}>
                    <LogInTextField placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <LogInTextField placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <LogInButton>
                        Sign In
                        <LogInButtonIcon />
                    </LogInButton>
                    <CheckboxContainer>
                        <StayLoggedInCheckbox type={'checkbox'} id="checkbox"/>
                        Keep me signed in
                    </CheckboxContainer>
                </LogInFormContainer>
            </LogInCard>
        </Container>
    )
}

export default LoginPage