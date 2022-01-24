import styled from "styled-components";

const TextField = styled.input`
    background-color: #f2f2f2;
    border-radius: 8pt;
    border: none;
    height: 40px;
    font-size: 20px;
    padding: 10px;
    transition: 0.4s;
    outline: none;
    &:focus {
        background-color: white;
        filter: drop-shadow(0rem 0rem 0.15rem rgba(0,0,0,0.1));
        outline: none;
    }
`;

export default TextField