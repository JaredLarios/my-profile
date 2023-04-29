import styled, {css} from "styled-components";
import bknd from "../../images/background.jpg"

export const MainContianer = styled.div`
background-image: url(${bknd});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
`

export const Header = styled.div`
//padding-top: 35px;
`

export const Slider = styled.div`
    width: 100%;
    >img{
        width: 100%;
        object-fit: cover;
        position: relative;
        @media only screen and (min-width: 768px){
            max-height: 450px;
        }
    }
    >div::after{
        display: block;
        position: relative;
        background-image: linear-gradient(to top, var(--transparent) 0, white 50%);
        margin-top: -8px;
        height: 45px;
        width: 100%;
        content: '';
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
@media only screen and (min-width: 1440px){
    width: 33%;
    margin: 0;
    position: fixed;
    top: 355px;
    left: 5%;
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
    .options {
        background-color: var(--transparent);
    }
`;
export const CardStyle = styled.div`
    width: 95%;
    margin: 5px auto;

    padding: 10px 5px;
    background-color: var(--card-back);
    position: relative;
    border: 5px solid var(--transparent);
    border-radius: 15px;
    z-index: 3;
    a {
        text-decoration: none;
        color: var(--primary);
        font-weight: bold;
    }
    >.Graduation {
        color: var(--dark-back) !important;
        border-radius: 50%;
        border: 5px solid white;
        background-color: white;
        position: absolute;
        right: 15px;
        top: 15px;
    }
    &:hover > .Graduation {
            color: gold !important;
            transition: 0.5s;
            background-color: var(--primary);
            border: 5px solid var(--primary);
    }
    .Graduation > &:hover {
            transition: 0.5s;
            border: 5px solid yellow;
    }
    &:hover {
        transition: 0.75s;
        border: 5px solid var(--primary);
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
        min-height: 350px;
        max-height: 400px;
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
                border-radius: 15px;
            }
        }
    }
    @media only screen and (min-width: 768px){
        ${props => props.type === 'pro'? props.position % 2 === 0? css`
                border-radius: 15px 0 0 15px;
                grid-row: ${newPos =>props.position+1}/${newPos =>props.position+2};
                `: css`
                border-radius:  0 15px 15px 0;
                grid-column: 2/3; 
                grid-row: ${newPos =>props.position+1}/${newPos =>props.position+2};
                margin-left: -17px;
        `:css `
                border-radius: 15px;
        `
    }
    }
`
export const CardShape = styled.div`
@media only screen and (min-width: 768px){
    display: grid;
}
@media only screen and (min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
}
`

export const Banners = styled.div`
display: none;
margin: 5px -5px;
height: 98%;
@media only screen and (min-width: 768px){
    display: block;
    position: relative;
    z-index: 1;
    margin: 5px 0;
    >img{
        width: 94%;
        height: 100%;
        min-height: 350px;
        max-height: 400px;
        object-fit: cover;
        ${ props => props.position % 2 === 0? css`
                        border-radius: 0 15px 15px 0;
                        grid-row: ${newPos =>props.position+1}/${newPos =>props.position+2};
                    `:css`
                        border-radius: 15px 0 0 15px;
                        grid-column: 1/2;
                        grid-row: ${newPos =>props.position+1}/${newPos =>props.position+2};
                        margin-left: 7px;
                    `
        }
    }
    >div{
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 93%;
        content: '';
        ${ props => props.position % 2 === 0? css`
                    background-image: radial-gradient( circle at 100%, rgba(255, 255, 255, 0) 30%, var(--ovelay-back) 90%);
                    left: 0;
                    `:css`
                    background-image: radial-gradient(circle at 0%, rgba(255, 255, 255, 0) 30%, var(--ovelay-back) 65%);
                    right: 14px;
                    `
    }
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
        max-width: 53%;
        margin: 0px 8% 0 auto;
    }
`

export const Footer = styled.div`

`;
export const Button = styled.div`

`;
