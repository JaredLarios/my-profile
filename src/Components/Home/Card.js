import { CardStyle, List } from "./style";
import SchoolIcon from '@mui/icons-material/School';


const Card = (props) => {

    const myGp = (gpa) => {
        if ( gpa > 96) {
            return ("A+")
        }
        else if ( gpa > 92) {
            return ("A")
        }
        else if ( gpa > 89) {
            return ("A-")
        }
        else if ( gpa > 86) {
            return ("B+")
        }
        else if ( gpa > 82) {
            return ("B")
        }
        else if ( gpa > 79) {
            return ("B-")
        }
        else if ( gpa > 76) {
            return ("C+")
        }
        else if ( gpa > 72) {
            return ("C")
        }
        else if ( gpa > 69) {
            return ("C-")
        }
        else if ( gpa > 66) {
            return ("D+")
        }
        else if ( gpa > 64) {
            return ("D")
        }
        else {
            return ("F")
        }
    }

    const statusOp = (data) =>{
        if (data !== "university") {

            const graduationStatus = props.status.currentStatus

            return(
                <>
                    {(graduationStatus === 'Graduado') ? <SchoolIcon className="Graduation" /> : '' }
                    <p>{props.status.initDate} - {props.status.graduationDate}</p>
                    <List>
                        <li>{graduationStatus}</li>
                        <li>Promedio: {myGp(props.status.gp)} ( {props.status.gp}pts )</li>
                        <li>{props.status.spotlight}pts</li>
                    </List>
                </>
            )
        }
        else {
            return(
                <div>
                {props.status.map(
                    (uniData) => {
                        return(
                        <>
                            <h4>{uniData.degree}</h4>
                            <h3>{uniData.myName}</h3>
                            <p>Total de Clases: {uniData.totalClasses}</p>
                            <p>Clases Aprovadas:</p>
                            <List>
                            {
                            uniData.passingClasses.map(
                                (classes) => {return (<li>{classes}</li>)})
                            }
                            </List>
                            <p>Clases Actualmente en Curso</p>
                            <List>
                            {
                            uniData.currentClasses.map(
                                (classes) => { return ( <li>{classes}</li>) })
                            }
                            </List>
                        </>
                        )
                    }
                )}
                </div>
            )
        }
    }
    return ( 
        <CardStyle>
            <h3>{props.name}</h3>
            <h2>{props.degree}</h2>
            {
                statusOp(props.type)
            }
        </CardStyle>
     );
}
 
export default Card;