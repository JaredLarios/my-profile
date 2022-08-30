import styled, {css, keyframes} from "styled-components";

export const MyMenu = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;

    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-45deg, var(--secondary), var(--primary), var(--thirth));
    >img{
        
    }
`

export const MyOpt = styled.ul`
    position:fixed;
    left: 0;
    right: 0;
    top: 40px;
    margin-right: auto;
    padding: 0px 15px 0px;
    list-style: none;
    background-color: var(--dark-back);

    >li {
        color: white;
        margin: auto;
        padding: 10px;
        text-align: center;
        &:hover{
            background-color: var(--thirth);
        }
    }

    ${props => props.selection ? css`
    display: block;
    ` : css`
    display: none;
    `}

`
export const myAnimation = keyframes`
        from {
            transform: rotate(0deg) !important;
        }
        to {
            transform: rotate(180deg) !important;
        }
`

export const MyHamMenu = styled.div`
    >.toggle {
        color: white !important;
        border: none !important;
        &:hover {
            color: var(--primary) !important;
            animation: myAnimation 15s ease !important;
        }
    }
`