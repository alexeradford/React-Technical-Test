import styled from "styled-components";
import styledComponents from "styled-components"
import Card from "../Components/Card";
import PrimaryButton from "../Components/PrimaryButton";
import TextField from "../Components/TextField";
import {FaPause, FaPlay, FaRedo} from "react-icons/fa"
import dateFormat from "dateformat";
import {React, useState} from "react";
import { animated, useSpring, easings } from "react-spring";

const Container = styled.div`
    height: 100%;
    overflow: hidden;
`

const MainCard = styled(Card)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 32pt;
    text-align: center;
`

const DateLabel = styled.h1`
    text-align: center;
    font-size: 56pt;
    margin: 0;
`

const RepeatButton = styled.button`
    outline: none;
    border: none;
    background: none;
    color: #61DAFB;
    font-weight: bold;
    font-size: 18pt;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40pt;
    cursor: pointer;

    :hover {
        color: #6FFAFB;
    }
`
const HomePage = (props) => {

    const [animating, setAnimating] = useState(true)

    const date = Date.now()
    const formattedDate = dateFormat(date, "mm/dd/yyyy")

    const EasingComponent = () => {
        const { color, rotateX } = useSpring({
            from: {
                color: '#46e891',
                rotateX: 0,
            },
            to: {
                color: '#277ef4',
                rotateX: 225,
            },
            config: {
                duration: 2000,
                easing: easings.easeInOutCirc,
            },
            loop: { reverse: true},
            pause: !animating
        })
        
        return (
            <animated.div style={{ color, rotateX }} >
                <DateLabel>{formattedDate}</DateLabel>
            </animated.div>
        )
    }

    return (
        <Container>
            <MainCard>
                <Title>Welcome Back.</Title>
                <EasingComponent />
                <RepeatButton onClick={() => { setAnimating(!animating) }}>
                    {animating ?
                        <>
                            <FaPause />
                            Pause
                        </>
                        :
                        <>
                            <FaPlay />
                            Resume
                        </>
                    }
                </RepeatButton>
            </MainCard>
        </Container>
    )
}

export default HomePage