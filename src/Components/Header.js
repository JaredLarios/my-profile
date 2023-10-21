import { HeaderStyle,
        Image,
        BannerStyle} from "./style";
import { SiVisualstudiocode } from "react-icons/si";
import { FaCode, FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import me from "../images/me.png"


const Header = () => {
    return <HeaderStyle>
                <BannerStyle>
                    <div className="card">
                        <h1>Jared Larios</h1>
                        <h2>Web and Software Developer </h2>     
                    </div>
                    <FaCode className="iconCode" />
                    <Image>
                        <img src={me} alt="logo"/>
                    </Image>
                    <FaReact className='iconReact react-show' />
                    <IoLogoPython className='iconReact python-show' />
                    <SiVisualstudiocode className='iconReact vscode-show'/>
                </BannerStyle>
            </HeaderStyle>
}
 
export default Header;