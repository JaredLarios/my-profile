import styled from 'styled-components'

export const BodyStyle = styled.div`
padding-top: 25px;
text-align: center;
    font-size: 95px;
    h2 {
        font-size: 25px;
    }
    >ul li{
        height: 150px;
    }

`

export const HeaderStyle = styled.div`
    
`

export const BannerStyle = styled.div`
    background-color: black;
    margin: auto;
    padding-top: 0; 

    width: 95%;
    height: 350px; 
    max-width: 1050px;
    border-radius: 15px;
    position: relative;
    

    >div.card {
        width: 85%;
        margin: auto;
        position: absolute;
        top: 35px;
        left: 0;
        right: 0; 
        align-self: center;
        z-index: 2;
    }

    h1, h2 {
        text-align: center;
        color: var(--icon-react);
    }
    >.iconCode {
        text-align: center;
        color: black;
        font-size: 25px;
        background-color: var(--icon-react);
        padding: 5px;
        border-radius: 15px 0 ;
    }

    .iconLang {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 15px;
        &:hover{
            cursor: pointer;
            color: white;
            background-color: var(--icon-fastapi);
        }
    }

    .react-show {
        font-size: 75px;
        position: absolute;
        bottom: 75px;
        left: 13%;
        z-index: 2;
        
        animation: bounce-spin  15s linear infinite;
    }

    .python-show {
        color: gold;
        font-size: 75px;
        position: absolute;
        bottom: 35px;
        right: 10%;
        z-index: 2;
        
        animation: bounce-backspin 10s linear infinite;
    }

    .vscode-show {
        animation: none;
        color: white;
        font-size: 35px;
        position: absolute;
        bottom: 110px;
        right: 27%;
        z-index: 2;
        
        animation: bounce 17s linear infinite;
    }
`

export const Image = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 48% 48% 25px 25px;
    border: black solid 3px;
    background-color: black;
    z-index: 1;

    left: 0;
    right: 0; 
    bottom: -20px;

    >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }
`