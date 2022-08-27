import { Education } from "./style";
import Card from "./Card";
import resume from '../../Data/Resume.json'

const Body = () => {
    return ( 
        <Education>
            <h2>Estudios</h2>
        
            <Card 
            name={resume.education.highschool.school}
            degree={resume.education.highschool.degree}
            status={resume.education.highschool.status}
            />  
            {
                resume.education.certificate.map(
                    (data) => {
                        return(
                        <Card
                        name={data.college}
                        degree={data.deegree}
                        status={data.status}
                        />
                        )
                    }
                )
            }
        </Education>
     );
}
 
export default Body;
