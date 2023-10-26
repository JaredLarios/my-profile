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
                <div className="technologies grid">
                    <div><SiVisualstudiocode className='iconFacebook button iconDocker '/></div>
                    <div><FaGithub className='iconFacebook button iconGitHub'/></div>
                    <div><FaDocker className='iconFacebook button iconDocker'/></div>
                </div>

                <h2>{data["progLang"]["title"]}</h2>
                <div className="progLang grid">
                    <div><FaHtml5 className='iconFacebook button iconHtml'/></div>
                    <div><FaCss3Alt className='iconFacebook button iconCss'/></div>
                    <div><IoLogoPython className='iconPy button' /></div>
                    <div><IoLogoJavascript className='iconJS button' /></div>
                </div>

                <h2>{data["framework"]["title"]}</h2>
                <div className="framework grid">
                    <div className='react-div button'><FaReact className='iconReact' /></div>                
                    <div><SiFastapi className='iconFacebook button iconFastapi'/></div>
                    <div><FaNodeJs className='iconFacebook button iconFastapi iconNodejs'/></div>
                    <div><SiThreedotjs className='iconFacebook button iconThreejs'/></div>
                </div>
                
                <h2>{data["db"]["title"]}</h2>
                <div className="db grid">
                    <div><SiMongodb className='iconFacebook button iconFastapi iconNodejs'/></div>
                    <div><SiPostgresql className='iconFacebook button'/></div>
                    <div><SiMysql className='iconFacebook button'/></div>
                    <div><IoLogoFirebase className='iconFacebook button iconFirebase'/></div>
                </div>
                
                <h2>{data["hire"]["title"]}</h2>
                <div className="hire grid">
                    <div><FaFacebookF className='iconFacebook button'/></div>
                    <div><FaInstagram className='iconFacebook button iconInstagram'/></div>
                    <div><FaGithub className='iconFacebook button iconGitHub'/></div>
                    <div><FaLinkedinIn className='iconFacebook button'/></div>
                </div>

                <Form />
            </BodyStyle>
}
 
export default Body;