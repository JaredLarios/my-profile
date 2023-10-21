import { BodyStyle } from './style';
import Form from './Form';
import { IoLogoJavascript,IoLogoPython, IoLogoFirebase } from "react-icons/io5";
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

const Body = () => {
    return  <BodyStyle>
                <h2>Who I am?</h2>
                <h2>Skills</h2>
                <h2>Technologies</h2>
                <SiVisualstudiocode className='iconFacebook button iconDocker '/>
                <FaGithub className='iconFacebook button iconGitHub'/>
                <FaDocker className='iconFacebook button iconDocker'/>
                <h2>Programming Languages</h2>
                <FaHtml5 className='iconFacebook button iconHtml'/>
                <FaCss3Alt className='iconFacebook button iconCss'/>
                <IoLogoPython className='iconPy button' />
                <IoLogoJavascript className='iconJS button' />
                <h2>Frameworks and Libraries</h2>
                <div className='react-div button'><FaReact className='iconReact' /></div>                
                <SiFastapi className='iconFacebook button iconFastapi'/>
                <FaNodeJs className='iconFacebook button iconFastapi iconNodejs'/>
                <SiThreedotjs className='iconFacebook button iconThreejs'/>
                <h2>DataBases</h2>
                <SiMongodb className='iconFacebook button iconFastapi iconNodejs'/>
                <SiPostgresql className='iconFacebook button'/>
                <SiMysql className='iconFacebook button'/>
                <IoLogoFirebase className='iconFacebook button iconFirebase'/>
                <h2>Hire Me!</h2>
                <FaFacebookF className='iconFacebook button'/>
                <FaInstagram className='iconFacebook button iconInstagram'/>
                <FaGithub className='iconFacebook button iconGitHub'/>
                <FaLinkedinIn className='iconFacebook button'/>
                <Form />
            </BodyStyle>
}
 
export default Body;