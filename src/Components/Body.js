import { BodyStyle } from './style';
import Form from './Form';
import Link from '@mui/material/Link';
import { IoLogoJavascript,IoLogoPython, IoLogoFirebase } from "react-icons/io5";
import {SiThreedotjs,
        SiMongodb,
        SiMysql,
        SiVisualstudiocode,
        SiPostgresql,
        SiFastapi} from "react-icons/si";
import {FaReact,
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
                <p className='content par' ><span>{data["who"]["content"]}</span></p>
                <h2>{data["skills"]["title"]}</h2>
                <p className='content par' ><span>{data["skills"]["content"]}</span></p>

                <h2>{data["technologies"]["title"]}</h2>
                <div className="technologies grid">
                    <div>
                        <p>VS Code</p>
                        <SiVisualstudiocode className='iconFacebook button iconDocker '/>
                    </div>
                    <div>
                        <p>GitHub</p>
                        <FaGithub className='iconFacebook button iconGitHub'/>
                    </div>
                    <div>
                        <p>Docker</p>
                        <FaDocker className='iconFacebook button iconDocker'/>
                    </div>
                </div>

                <h2>{data["progLang"]["title"]}</h2>
                <div className="progLang grid">
                    <div>
                        <p>HTML</p>
                        <FaHtml5 className='iconFacebook button iconHtml'/>
                    </div>
                    <div>
                        <p>CSS</p>
                        <FaCss3Alt className='iconFacebook button iconCss'/>
                    </div>
                    <div>
                        <p>Python</p>
                        <IoLogoPython className='icon iconPy button' />
                    </div>
                    <div>
                        <p>JavaScript</p>
                        <IoLogoJavascript className='icon iconJS button' />
                    </div>
                </div>

                <h2>{data["framework"]["title"]}</h2>
                <div className="framework grid">
                    <div>
                        <p>React JS</p>
                        <div className='react-div button'><FaReact className='iconReact' /></div>
                    </div>
                    <div>
                        <p>Fast Api</p>
                        <SiFastapi className='iconFacebook button iconFastapi'/>
                    </div>
                    <div>
                        <p>Express JS</p>
                        <FaNodeJs className='iconFacebook button iconFastapi iconNodejs'/>
                    </div>
                    <div>
                        <p>Three JS</p>
                        <SiThreedotjs className='iconFacebook button iconThreejs'/>
                    </div>
                </div>
                
                <h2>{data["db"]["title"]}</h2>
                <div className="db grid">
                    <div>
                        <p>Mongo DB</p>
                        <SiMongodb className='iconFacebook button iconFastapi iconNodejs'/>
                    </div>
                    <div>
                        <p>Postgre SQL</p>
                        <SiPostgresql className='iconFacebook button'/>
                    </div>
                    <div>
                        <p>My SQL</p>
                        <SiMysql className='iconFacebook button'/>
                    </div>
                    <div>
                        <p>Firebase</p>
                        <IoLogoFirebase className='iconFacebook button iconFirebase'/>
                    </div>
                </div>
                
                <h2>{data["hire"]["title"]}</h2>
                <Form />
                <div className="hire grid">
                    <div>
                        <Link href={data['hire']['social']['facebook']}>
                            <FaFacebookF className='iconFacebook button'/>
                        </Link>
                    </div>
                    <div>
                        <Link href={data['hire']['social']['instagram']}>
                            <FaInstagram className='iconFacebook button iconInstagram'/>
                        </Link>
                    </div>
                    <div>
                        <Link href={data['hire']['social']['github']}>
                            <FaGithub className='iconFacebook button iconGitHub'/>
                        </Link>
                    </div>
                    <div>
                        <Link href={data['hire']['social']['linkedin']}>
                            <FaLinkedinIn className='iconFacebook button'/>
                        </Link>
                    </div>
                </div>

            </BodyStyle>
}

export default Body;