import { MyMenu, MyOpt, MyHamMenu } from "./style";
import MenuIcon from '@mui/icons-material/Menu';
import { ToggleButton } from "@mui/material";
import { useState } from "react";

const Menu = () => {
    const [selected, setSelected] = useState()
    return ( 
        <MyMenu>
            <img src="" alt="Logo"/>

            <MyHamMenu>
                <ToggleButton
                className="toggle"
                value="check"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
                >
                <MenuIcon className="icon" />
                </ToggleButton>
                <MyOpt selection={selected}>
                    <li><a>Inicio</a></li>
                    <li><a>Proyectos</a></li>
                    <li><a>Estudios</a></li>
                    <li><a>JedDevCenter</a></li>
                    <li><a>Contactame</a></li>
                </MyOpt>
            </MyHamMenu>
        </MyMenu>
     );
}
 
export default Menu;