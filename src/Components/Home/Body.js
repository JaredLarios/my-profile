import { Education } from "./style";
import Card from "./Card";
import resume from '../../Data/Resume.json'

const Body = () => {
    return ( 
        <Education>
            <h2>Estudios</h2>

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
