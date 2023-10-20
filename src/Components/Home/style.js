import styled from 'styled-components'

export const BodyStyle = styled.div`
font-size: 95px;
    >ul li{
        height: 150px;
    }
    .react-div{
        background-color: var(--card-back);
        width: 95px;
        height: 105px;
    }

    .iconReact{
        color: var(--icon-react);
        animation: spin 75s linear infinite;
        background-color: var(--transparent);
    }

    .iconJS{
        color: yellow;
        border-radius: 25px;
    }

    .iconPy{
        color: gold;
        background-color: var(--theme);
    }

    .iconFacebook {
        color: white;
        font-size: 75px;
        padding: 10px 10px; 
        background-color: var(--theme); 
    }

    .iconInstagram {
        color: white;
        background: pink;
        background: radial-gradient(circle at 33% 100%, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
    }

    .iconGitHub {
        color: white;
        background-color: black;
    }

    .iconFirebase {
        background-color: orange;
    }

    .iconHtml {
        background-color: orange;
    }

    .iconCss {
        background-color: var(--theme);
    }

    .iconBYU {
        background-color: var(--theme);
    }

    .iconThreejs{
        background-color: white;
        color: black;
    }

    .iconFastapi{
        color: var(--icon-fastapi);
    }

    .iconNodejs {
        background-color: white;
    }

    .button{
        border-radius: 15px;
        transform: translateX(8px) translateY(-8px);
        box-shadow: -3px 3px var(--icon-js-shadow), -4px 4px var(--icon-js-shadow), -5px 5px var(--icon-js-shadow), -6px 6px var(--icon-js-shadow);
        &:hover{
            animation: shadow-pop-bl 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
        }
    }


@keyframes spin {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}


@keyframes shadow-pop-bl {
  100% {
    -webkit-box-shadow: 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow);
            box-shadow: 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow), 0 0 var(--icon-js-shadow);
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  0%{
    -webkit-box-shadow: -3px 3px var(--icon-js-shadow), -4px 4px var(--icon-js-shadow), -5px 5px var(--icon-js-shadow), -6px 6px var(--icon-js-shadow);
            box-shadow: -3px 3px var(--icon-js-shadow), -4px 4px var(--icon-js-shadow), -5px 5px var(--icon-js-shadow), -6px 6px var(--icon-js-shadow);
    -webkit-transform: translateX(8px) translateY(-8px);
            transform: translateX(8px) translateY(-8px);
  }
}

`