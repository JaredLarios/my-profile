import MineCraft100 from "./minecraft-100.jpg";
import MineCraft500 from "./minecraft-500.jpg";
import MineCraft900 from "./minecraft-900.jpg";
import Easy100 from "./easy-100.jpg";
import Easy500 from "./easy-500.jpg";
import Easy900 from "./easy-900.jpg";
import Spacein100 from "./my-space.png";
import Spacein500 from "./my-space.png";
import Spacein900 from "./my-space.png";
import Chamber100 from "./chamber-100.jpg";
import Chamber500 from "./chamber-500.jpg";
import Chamber900 from "./chamber-900.jpg";
import Tis100 from "./tis-100.jpg";
import Tis500 from "./tis-500.jpg";
import Tis900 from "./tis-900.jpg";



const imageList = [
    {
        id: 1,
        src: MineCraft500,
        srcset:[
            MineCraft100,MineCraft500,MineCraft900
        ],
        alt: "MineCraft",
    },
    {
        id: 2,
        src: Easy500,
        srcset: [
            Easy100,Easy500,Easy900
        ],
        alt: "Easy",
    },
    {
        id: 3,
        src: Spacein500,
        srcset:  [
            Spacein100,Spacein500,Spacein900
        ],
        alt: "Space Invaders",
    },
    {
        id: 4,
        src: Chamber500,
        srcset: [
            Chamber100,Chamber500,Chamber900
        ],
        alt: "Chamber",
    },
    {
        id: 5,
        src: Tis500,
        srcset: [
            Tis100,Tis500,Tis900
        ],
        alt: "Tis",
    },
]
/*
export const selImages = (req) => {
    return (<img src = {imgs[req]["srcset"][0]}
        srcset={`
        ${imgs[req]["srcset"][0]} 300w,
        ${imgs[req]["srcset"][1]} 768w,
        ${imgs[req]["srcset"][2]} 1280w
        `}
        alt = 'myimage'
        />);
    };
    */