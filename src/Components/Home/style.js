import styled from 'styled-components'

export const BodyStyle = styled.div`
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

    width: 80%;
    height: 350px; 
    max-width: 1050px;
    border-radius: 15px;
    position: relative;
    

    >div.card {
        width: 70%;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0; 
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
`

export const Image = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 48% 48% 25px 25px;
    border: black solid 3px;
    background-color: black;

    left: 0;
    right: 0; 
    bottom: -35px;

    >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }
`