import { IoLogoJavascript,IoLogoPython, IoLogoFirebase } from "react-icons/io5";
import { BodyStyle } from './style';
import {SiThreedotjs, 
        SiMongodb,
        SiMysql,
        SiVisualstudiocode,
        SiPostgresql,
        SiFastapi} from "react-icons/si"; 
import { 
  FaReact, 
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaHtml5, 
  FaCss3Alt,
  FaUniversity,
  FaDocker,
  FaNodeJs,
  FaInstagram} from 'react-icons/fa';

const Buttons = () => {
    return <BodyStyle>
      <ul>
        <li><div className='react-div button'><FaReact className='iconReact' /></div></li>
        <li><IoLogoJavascript className='iconJS button' /></li>
        <li><IoLogoPython className='iconPy button' /></li>
        <li><FaFacebookF className='iconFacebook button'/></li>
        <li><FaInstagram className='iconFacebook button iconInstagram'/></li>
        <li><FaLinkedinIn className='iconFacebook button'/></li>
        <li><FaGithub className='iconFacebook button iconGitHub'/></li>
        <li><IoLogoFirebase className='iconFacebook button iconFirebase'/></li>
        <li><FaHtml5 className='iconFacebook button iconHtml'/></li>
        <li><FaCss3Alt className='iconFacebook button iconCss'/></li>
        <li><SiThreedotjs className='iconFacebook button iconThreejs'/></li>
        <li><SiFastapi className='iconFacebook button iconFastapi'/></li>
        <li><FaUniversity className='iconFacebook button iconBYU'/></li>
        <li><FaNodeJs className='iconFacebook button iconFastapi iconNodejs'/></li>
        <li><FaDocker className='iconFacebook button iconDocker'/></li>
        <li><SiMongodb className='iconFacebook button iconFastapi iconNodejs'/></li>
        <li><SiPostgresql className='iconFacebook button'/></li>
        <li><SiMysql className='iconFacebook button'/></li>
        <li><SiVisualstudiocode className='iconFacebook button'/></li>
      </ul>
    </BodyStyle>
}
 
export default Buttons;