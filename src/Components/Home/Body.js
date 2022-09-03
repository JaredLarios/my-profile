import { Education } from "./style";
import Card from "./Card";
import resume from '../../Data/Resume.json'
import { BottomNavigationAction , BottomNavigation} from "@mui/material";
import { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BadgeIcon from '@mui/icons-material/Badge';

const Body = () => {

    const [kindEdu, setEdu] = useState(0)

    return ( 
        <Education>
            <h2>Estudios</h2>

            {/* Buttons */}
            
            <BottomNavigation
            value={kindEdu}
            onChange={ (event, newValue) => {
                setEdu(newValue)
            }}
            >
                <BottomNavigationAction label="Universidad" icon={<SchoolIcon />} />
                <BottomNavigationAction label="Tecnicos / Diplomados" icon={<BadgeIcon />} />
                <BottomNavigationAction label="Bachillerato" icon={<AutoStoriesIcon />} />
            </BottomNavigation>
            
            { (() => {
                switch(kindEdu) {
                    case 0: 
                    {/*University*/}
                    return (<Card 
                            type="university"
                            name={resume.education.bachelor.college}
                            degree={resume.education.bachelor.degree}
                            status={resume.education.bachelor.status}
                            />);
                    break;
                    
                    case 1: 
                    {/*Certificates*/}
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
                        </>);
                    break;
                    
                    case 2: 
                        {/*HighSchool*/}
                        return (<Card
                                name={resume.education.highschool.school}
                                degree={resume.education.highschool.degree}
                                status={resume.education.highschool.status}
                                />);
                        break;

                    default:
                        return null;
                        break;
                    }
                })()
            }

        
                
        </Education>
     );
}
 
export default Body;
