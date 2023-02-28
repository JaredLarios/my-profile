import resume from "../../Data/Resume.json"

import CardCareer from "./CardCareer"
import CardProjects from "./CardProj"

import { CardHolder, CardShape, Banners } from "./style";
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import { BottomNavigationAction , BottomNavigation} from "@mui/material";

import React ,{ useState } from "react";




const Career = () => {
    const [kindPro, setPro] = useState(0)


    const infoDisplay = (number) => {
        if (number === 0){
            return(
                <>
                
                {
                    resume.career.map(
                        (data, index) => {
                            return(
                                <>
                                <CardCareer 
                                idposition={index}
                                name={data.contractor}
                                position={data.position}
                                timeStart={data.initTime}
                                timeEnd={data.endTime}
                                desc={data.description}
                                spot={data.spotlight}
                                />
                                <Banners
                                position={index}
                                >
                                    <img
                                        src = {data.myBanner.image1}
                                        srcset={`
                                        ${data.myBanner.image1} 300w,
                                        ${data.myBanner.image2} 768w,
                                        ${data.myBanner.image3} 1280w
                                        `}
                                        alt = 'myimage'
                                        />
                                        <div></div>
                                </Banners>
                            </>
                            )
                        }
                    )
                }
                </>
            )
        }
        else {
            return(
                <>
                
                    {
                    resume.projects.map(
                        (data, index) => {
                            return(
                                <>
                                <CardProjects 
                                    idposition={index}
                                    name={data.name}
                                    lang={data.progLang}
                                    desc={data.description}
                                    link={data.link}
                                    status={data.status}
                                    />
                                    <Banners
                                    position={index}
                                    >
                                    <img
                                        src = {data.myBanner.image1}
                                        srcset={`
                                        ${data.myBanner.image1} 300w,
                                        ${data.myBanner.image2} 768w,
                                        ${data.myBanner.image3} 1280w
                                        `}
                                        alt = 'myimage'
                                        />
                                        <div></div>
                                </Banners>
                                </>
                                )
                            }
                        )
                    }
                </>
            )
        }
    }

    return ( 
        <CardHolder>
            <h2 id="Career">Experiencia Profesional</h2>

            {/* Buttons */}
            
            <BottomNavigation
            className="options"
            showLabels
            value={kindPro}
            onChange={ (event, newValue) => {
                setPro(newValue)
            }}
            >
                <BottomNavigationAction label="Laboral" icon={<WorkIcon />} />
                <BottomNavigationAction label="Proyectos" icon={<CodeIcon />} />
            </BottomNavigation>

            
            <CardShape>
            { 
                infoDisplay(kindPro)
            }
            </CardShape>

        </CardHolder>
     )
}
 
export default Career;