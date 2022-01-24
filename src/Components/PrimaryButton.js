import styled from "styled-components";

const PrimaryButton = styled.button`
    border-radius: 8pt;
    background: #22a7f0;
    height: 50px;
    font-size: 20px;
    padding: 10px;
    border: none;
    transition: 0.4s;
    color: white;
    font-weight: bold;
    
    filter: drop-shadow(0rem 0rem 0.25rem rgba(0,0,0,0.2));

    &:hover {
        filter: drop-shadow(0rem 0rem 0.3rem rgba(0,0,0,0.4));
        cursor: pointer;
    }

    &:active {
        filter: drop-shadow(0rem 0rem 0rem rgba(0,0,0,0.4));
    }
`

export default PrimaryButton