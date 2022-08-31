import styled, {css} from "styled-components";

export const Header = styled.div`
//padding-top: 35px;
>a {
    text-decoration: underline !important;
}
>ul .MuiSvgIcon-root {
    color:  #3b5998  !important;
}
`;

export const Slider = styled.div`
>img{
    width: 100%;
}
`;

export const PersonalCard = styled.div`
    background-color: grey;
    border-radius: 15px;

    border: red solid 6px;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    >div{
        background-color: red;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        margin: auto;
    }
    >h1 {
        grid-column: 2/4;
        
    }
`


export const Education = styled.div`

`;
export const Footer = styled.div`

`;
export const Button = styled.div`

`;
export const CardStyle = styled.div`

`;