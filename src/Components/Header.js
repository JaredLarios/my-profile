import { HeaderStyle,
        Image,
        BannerStyle} from "./style";
import { SiVisualstudiocode } from "react-icons/si";
import { FaCode, FaReact } from "react-icons/fa";
import { IoLogoPython, IoLanguageSharp } from "react-icons/io5";
import me from "../images/me.png"
import { useLangContext } from "../Context/ContextLang";
import useLang from "../Hooks/langHook";


const Header = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages);
    

    return (<HeaderStyle>
                <BannerStyle>
                    <div className="card">
                        <h1>Jared Larios</h1>
                        <h2>{data["title"]}</h2>
                    </div>
                    <FaCode className="iconCode" />
                    <div 
                    className="iconCode iconLang"
                    onClick={lang.click}
                    >
                        <span>{lang.languages}
                        <IoLanguageSharp /></span>
                    </div>

                    <Image>
                        <img src={me} alt="logo"/>
                    </Image>
                    <FaReact className='iconReact react-show' />
                    <IoLogoPython className='iconReact python-show' />
                    <SiVisualstudiocode className='iconReact vscode-show'/>
                </BannerStyle>
            </HeaderStyle>);
}
 
export default Header;