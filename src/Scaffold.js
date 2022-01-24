import { useState } from "react"
import styledComponents from "styled-components"
import LandingPage from "./Pages/LandingPage"
import logo from './logo.svg';
import styled from "styled-components";
import LoginPage from "./Pages/Login";
import { animated, config, useTransition } from "react-spring"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const Scaffold = () => {
    const [pageState, setPageState] = useState(0)

    const location = useLocation()
    const navigate = useNavigate()

    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translate3d(0%,30%,0)'},
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
        trail: 300
        // leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
      })

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

    const NavBar = styledComponents.div({
        height: navBarHeight,
        width: "100vw",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    })

    const LogoImage = styled.img`
        height: 45pt;
        width: 45pt;
    `
    return (
        <ContainerDiv>
            <NavBar height={navBarHeight}>
                <LogoImage src={logo} />
            </NavBar>
            <Content>
                {transitions((props, item) => (
                    <AnimatedContainer style={props}>
                        <Routes location={item}>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/signin" element={<LoginPage />}/>
                            <Route path="/home" element={<HomePage />}/>
                        </Routes>
                    </AnimatedContainer>
                ))}
            </Content>
        </ContainerDiv>
    )
}

export default Scaffold