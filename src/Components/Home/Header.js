import { HeaderStyle,
        Image,
        BannerStyle} from "./style";
import { FaCode } from "react-icons/fa";
import me from "../../images/me.png"


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
                </BannerStyle>
            </HeaderStyle>
}
 
export default Header;