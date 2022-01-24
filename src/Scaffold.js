import { useState } from "react"
import styledComponents from "styled-components"
import LandingPage from "./Pages/LandingPage"
import logo from './logo.svg';
import styled from "styled-components";
import LoginPage from "./Pages/Login";
import { animated, config, useTransition } from "react-spring"
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { FaSignOutAlt } from "react-icons/fa";
import propTypes from "prop-types";

const navBarHeight = "50pt"

const ContainerDiv = styledComponents.div({
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "100vh"
})

const Content = styled.main`
    padding-top: ${navBarHeight};
    overflow: auto;
    background: radial-gradient(#34495e, #013243);
    background-attachment: "fixed";
    height: calc(100% - ${navBarHeight});
`

const AnimatedContainer = styled(animated.div)`
    height: 100%;
`

const NavBar = styled.div`
    height: ${navBarHeight};
    width: 100vw;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const LogoImage = styled.img`
    height: 45pt;
    width: 45pt;
`

const Button = styled.button`
    border: none;
    color: #61DAFB;
    border-radius: 4pt;
    margin: 20px;
    background: none;
    font-size: 18pt;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    :hover {
        background: #61DAFB2F;
        cursor: pointer;
    }
`
const Scaffold = () => {
    const [authenticated, setAuthenticated] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translate3d(0%,30%,0)'},
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
        trail: 300
    })

    function signIn() {
        if(!authenticated)
            setAuthenticated(true)
            navigate("/home")
    }

    function signOut() {
        if(authenticated)
            setAuthenticated(false)
            navigate("/")
    }

    function navButtonPressed() {
        if(authenticated) {
            signOut()
        } else {
            if(location.pathname !== "/signin")
                navigate("/signin")
        }
    }

    return (
        <ContainerDiv>
            <NavBar height={navBarHeight}>
                <LogoImage src={logo} />
                <Button onClick={navButtonPressed}>
                    {
                        authenticated ?
                            <>Sign Out</>
                        :
                            <>Sign In</>
                    }
                </Button>
            </NavBar>
            <Content>
                {transitions((props, item) => (
                    <AnimatedContainer style={props}>
                        <Routes location={item}>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/signin" element={<LoginPage signIn={signIn}/>}/>
                            <Route path="/home" element={<HomePage />}/>
                        </Routes>
                    </AnimatedContainer>
                ))}
            </Content>
        </ContainerDiv>
    )
}


export default Scaffold