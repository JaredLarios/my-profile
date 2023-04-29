import { CardHolder, CardShape } from "./style";
import Card from "./Card";
import resume from '../../Data/Resume.json'
import { BottomNavigationAction , BottomNavigation} from "@mui/material";
import { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BadgeIcon from '@mui/icons-material/Badge';

const Education = () => {

    const [kindEdu, setEdu] = useState(0)

    const infoDisplay = (number) => {
        if (number === 0) {
            return (<>
                {
                resume.education.certificate.map(
                    (data) => {
                        return(
                        <Card
                        name={data.college}
                        degree={data.degree}
                        status={data.status}
                        />
                        )
                    })
                }
            </>)
        }
        else if (number === 1) {
            return (<Card 
                type="university"
                name={resume.education.bachelor.college}
                degree={resume.education.bachelor.degree}
                status={resume.education.bachelor.status}
                />)
        }
        else if (number === 2) {
            return (<Card
                name={resume.education.highschool.school}
                degree={resume.education.highschool.degree}
                status={resume.education.highschool.status}
            />)
        }
    }

    return ( 
        <CardHolder>
            <h2 id="education">Estudios</h2>

            {/* Buttons */}
            
            <BottomNavigation
            className="options"
            showLabels
            value={kindEdu}
            onChange={ (event, newValue) => {
                setEdu(newValue)
            }}
            >
                <BottomNavigationAction 
                    label="Tecnicos / Diplomados" 
                    icon={<BadgeIcon />} />
                <BottomNavigationAction 
                    label="Universidad" 
                    icon={<SchoolIcon />} />
                <BottomNavigationAction 
                    label="Bachillerato" 
                    icon={<AutoStoriesIcon />} />
            </BottomNavigation>

            <CardShape>
                { 
                    infoDisplay(kindEdu)
                }
            </CardShape>
                
        </CardHolder>
     );
}
 
export default Education;
