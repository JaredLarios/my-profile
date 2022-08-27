import styled, {css, keyframes} from "styled-components";

export const MyMenu = styled.div`
    display: flex;
    justify-content: space-between;
    >img{
        
    }
`

export const MyOpt = styled.ul`
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
        border: none !important;
        &:hover {
            color: red !important;
            animation: myAnimation 15s ease !important;
        }
    }
    .icon{
    }
`