import resume from "../../Data/Resume.json"
import CardCareer from "./CardCareer"
import CardProjects from "./CardProj"
import { useState } from "react";
import { CardHolder, CardShape } from "./style";
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import { BottomNavigationAction , BottomNavigation} from "@mui/material";

const Career = () => {
    const [kindPro, setPro] = useState(0)

    const infoDisplay = (number) => {
        if (number === 0){
            return(
                <>
                {
                    resume.career.map(
                        (data) => {
                            return(
                            <CardCareer 
                            name={data.contractor}
                            position={data.position}
                            timeStart={data.initTime}
                            timeEnd={data.endTime}
                            desc={data.description}
                            spot={data.spotlight}
                            />
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
                        (data) => {
                            return(
                            <CardProjects 
                            name={data.name}
                            lang={data.progLang}
                            desc={data.description}
                            link={data.link}
                            status={data.status}
                            />
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
            <h2>Experiencia Profesional</h2>

            {/* Buttons */}
            
            <BottomNavigation
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