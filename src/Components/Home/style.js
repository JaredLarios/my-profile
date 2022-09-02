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
    border: red solid 6px;
    margin: 15px 0;
    border-radius: 15px;
`;