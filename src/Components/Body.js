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
FaDocker,
FaNodeJs,
FaInstagram} from 'react-icons/fa';

import { useLangContext } from "../Context/ContextLang";
import useLang from "../Hooks/langHook";

const Body = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages);

    return  <BodyStyle>
                <h2>{data["who"]["title"]}</h2>
                <h2>{data["skills"]["title"]}</h2>

                <h2>{data["technologies"]["title"]}</h2>
                <SiVisualstudiocode className='iconFacebook button iconDocker '/>
                <FaGithub className='iconFacebook button iconGitHub'/>
                <FaDocker className='iconFacebook button iconDocker'/>

                <h2>{data["progLang"]["title"]}</h2>
                <FaHtml5 className='iconFacebook button iconHtml'/>
                <FaCss3Alt className='iconFacebook button iconCss'/>
                <IoLogoPython className='iconPy button' />
                <IoLogoJavascript className='iconJS button' />

                <h2>{data["framework"]["title"]}</h2>
                <div className='react-div button'><FaReact className='iconReact' /></div>                
                <SiFastapi className='iconFacebook button iconFastapi'/>
                <FaNodeJs className='iconFacebook button iconFastapi iconNodejs'/>
                <SiThreedotjs className='iconFacebook button iconThreejs'/>
                
                <h2>{data["db"]["title"]}</h2>
                <SiMongodb className='iconFacebook button iconFastapi iconNodejs'/>
                <SiPostgresql className='iconFacebook button'/>
                <SiMysql className='iconFacebook button'/>
                <IoLogoFirebase className='iconFacebook button iconFirebase'/>
                
                <h2>{data["hire"]["title"]}</h2>
                <FaFacebookF className='iconFacebook button'/>
                <FaInstagram className='iconFacebook button iconInstagram'/>
                <FaGithub className='iconFacebook button iconGitHub'/>
                <FaLinkedinIn className='iconFacebook button'/>

                <Form />
            </BodyStyle>
}
 
export default Body;