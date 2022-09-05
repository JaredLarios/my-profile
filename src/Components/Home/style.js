import styled from "styled-components";

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
    }
`

export const PersonalCard = styled.div`
    background-color: var(--card-back);
    border-radius: 15px;
    margin: auto;


    display: grid;
    grid-template-columns: repeat(3,1fr);

    max-width: 555px;
    //min-width: 489px;
    >div{
        border-radius: 50%;
        margin: 25% auto ;
        position: relative;
        width: 150px;
        height: 150px;

        grid-column: 1/2;
        grid-row: 1/3;
        >img {
            position: absolute;
            top: -115px;
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
        margin: 0 0.5rem 0 170px;
        >ul {
            list-style: none;
            padding: 0 12px;
        }
    }
`


export const Education = styled.div`
    >h2 {
        text-align: center;
        margin: 6.3rem auto;
    }
    >.MuiToggleButtonGroup-root
     {
        position: flex !important;
    }
`;
export const Footer = styled.div`

`;
export const Button = styled.div`

`;
export const CardStyle = styled.div`
    margin: 15px 0;
    padding: 10px 25px;
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
    }
    >h2 {
        font-size: 1.8rem;
    }
    >p {
        font-size: 15px;
        text-align: center;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;

`