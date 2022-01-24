import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from '../logo.svg';
import { FaArrowRight } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    height: 100%;
    max-height: 750px;
`

const Title = styled.h1`
    font-size: 58pt;
    text-align: center;
`

const ReactSpan = styled.span`
    color: #61DAFB;
`

const Button = styled.button`
    border: 2px solid #61DAFB;
    color: #61DAFB;
    border-radius: 4pt;
    padding: 10px;
    background: none;
    font-size: 18pt;
    display: flex;
    align-items: center;
    margin-bottom: 40pt;

    :hover {
        background: #61DAFB2F;
        cursor: pointer;
    }
`

const ButtonIcon = styled(FaArrowRight)`
    padding-left: 10pt;
`

const LoginPage = () => {

    const navigate = useNavigate()

    function goToSignIn() {
        navigate("/signin")
    }

    return (
        <Container>
        <Title>Welcome to <ReactSpan color="red"><br></br>React.</ReactSpan></Title>
        <Button onClick={goToSignIn}>
            Sign In
            <ButtonIcon />
        </Button>
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        </Container>
    )
}

export default LoginPage