import styled, {css} from "styled-components";

export const Header = styled.div`
//padding-top: 35px;
    >a {
        text-decoration: underline !important;
    }
    >ul .MuiSvgIcon-root {
        color:  #3b5998  !important;
    }
`

export const Slider = styled.div`
    >img{
        width: 100%;
        object-fit: cover;
        @media only screen and (min-width: 768px){
            max-height: 350px;
        }
    }
`

export const PersonalCard = styled.div`
    background-color: var(--card-back);
    border-radius: 15px;
    margin: auto;
    max-width: 555px;


    display: grid;
    grid-template-columns: repeat(3,1fr);


    //min-width: 489px;
    >div{
        border-radius: 50%;
        margin: 25% auto ;
        position: relative;
        width: 150px;
        height: 150px;

        grid-column: 1/4;
        grid-row: 1/3;
        >img {
            position: absolute;
            top: -268px;
            width: 10.5rem;
            height: 10.5rem;
            object-fit: cover;
            max-width: 250px;
            max-height: 250px;

            border-radius: 50%;
        }
    }
    >.intro {
        grid-column: 1/4;
        grid-row: 2/3;
        text-align: center;
        >h1{
            font-size: 2.2em;
        }
    }
    >.p-info {
        grid-column: 1/4;
        grid-row: 1/2;
        max-width: 60%;
        margin: auto;
        >ul {
            list-style: none;
            padding: 0 12px;
        }
    }
    @media only screen and (min-width: 250px) {
        >div {
            grid-column: 1/2;
            >img{
                transition: 1.5s;
                top: -115px;
            }
        }
        >.p-info {
            transition: 1.5s;
            margin: 0 0.5rem 0 45%;
        }
    }
    @media only screen and (min-width: 550px){
        >.p-info {
            transition: 1.5s;
            margin: 0 0.5rem 0 35%;
        }
    }
`


export const CardHolder = styled.div`
    >h2 {
        text-align: center;
        margin: 6.3rem auto;
    }
    >.MuiToggleButtonGroup-root
     {
        position: flex !important;
    }
`;
export const CardStyle = styled.div`
    width: 95%;
    margin: 5px auto;
    padding: 10px 5px;
    border-radius: 15px;
    background-color: var(--card-back);
    position: relative;
    border: 5px solid var(--transparent);
    >.Graduation {
        color: var(--card-back);
        border-radius: 50%;
        border: 5px solid white;
        background-color: white;
        position: absolute;
        right: 15px;
        top: 15px;
    }
    &:hover > .Graduation {
            color: gold;
            transition: 0.5s;
            background-color: var(--secondary);
            border: 5px solid var(--secondary);
    }
    .Graduation > &:hover {
            transition: 0.5s;
            border: 5px solid yellow;
    }
    &:hover {
        transition: 0.75s;
        border: 5px solid var(--secondary);
    }
    >h3 {
        margin: 0;
        padding-top: 0px;
        max-width: 80%;
    }
    >h2 {
        font-size: 1.8rem;
        max-width: 90%;
    }
    >p {
        font-size: 15px;
        text-align: center;
    }
    >.pro {
        >h2{
            max-width: 60%;
        }
        >.corner {
            position: absolute;
            top: 15px;
            right: 15px;
            max-width: 35%;
        }
        
        >div.hide {
            display: none;
        }
        &:hover > .hide{
            display: block;
        } 
        @media only screen and (min-width: 768px){
            >div.hide {
                display: block;
            }
        }
    }
`
export const CardShape = styled.div`
@media only screen and (min-width: 768px){
    display: grid;
    ${props => {
        (props.opt !== 1) ? 
        css`grid-template-columns: repeat(1, 1fr);` 
        : css`grid-template-columns: repeat(2, 1fr);` }
    }
    grid-gap: 0 15px;
}
@media only screen and (min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
}
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`

export const BodyDesign = styled.div`
    max-width: 655px;
    margin: auto;
    @media only screen and (min-width: 768){
    }
    @media only screen and (min-width: 1024px){
        max-width: 855px;
    }
    @media only screen and (min-width: 1440px){
        max-width: 1055px;
    }
`

export const Footer = styled.div`

`;
export const Button = styled.div`

`;
