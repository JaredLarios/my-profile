import { Education } from "./style";
import Card from "./Card";
import resume from '../../Data/Resume.json'
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const Body = () => {

    const [kindEdu, setEdu] = useState("")

    return ( 
        <Education>
            <h2>Estudios</h2>

            {/* Buttons */}
            
            <ToggleButtonGroup
            value={kindEdu}
            >
                <ToggleButton
                value="university"
                >
                    Universidad
                </ToggleButton>
                <ToggleButton
                value="certificates"
                >
                    Tecnicos/Diplomados
                </ToggleButton>
                <ToggleButton
                value="highschool"
                    >Bachillerato
                </ToggleButton>
            </ToggleButtonGroup>

            {/*HighSchool*/}
            <Card 
            name={resume.education.highschool.school}
            degree={resume.education.highschool.degree}
            status={resume.education.highschool.status}
            />  

            {/*Certificates*/}
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
                    }
                )
            }
                
            {/*University*/}
            
            <Card 
            type="university"
            name={resume.education.bachelor.college}
            degree={resume.education.bachelor.degree}
            status={resume.education.bachelor.status}
            />  
        </Education>
     );
}
 
export default Body;
