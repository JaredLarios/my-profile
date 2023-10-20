
import { FaReact, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoJavascript,IoLogoPython } from "react-icons/io5";
import { BodyStyle } from './style';

const Header = () => {
    return <BodyStyle>
      <ul>
        <li><div className='react-div button'><FaReact className='iconReact' /></div></li>
        <li><IoLogoJavascript className='iconJS button' /></li>
        <li><IoLogoPython className='iconPy button' /></li>
        <li><FaFacebookF className='iconFacebook button'/></li>
        <li><FaInstagram className='iconFacebook button'/></li>
      </ul>
    </BodyStyle>
}
 
export default Header;