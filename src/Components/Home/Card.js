import { CardStyle } from "./style";

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
            return(
                <ul>
                    <li>{props.status.currentStatus}</li>
                    <li>{props.status.initDate} - {props.status.graduationDate}</li>
                    <li>Promedio: {myGp(props.status.gp)} ( {props.status.gp}pts )</li>
                    <li>{props.status.spotlight}pts</li>
                </ul>
            )
        }
        else {
            return(
                <div>
                {props.status.map(
                    (uniData) => {
                        return(
                        <div>
                            <h4>{uniData.degree}</h4>
                            <h3>{uniData.myName}</h3>
                            <p>Total de Clases: {uniData.totalClasses}</p>
                            <label>Clases Aprovadas:</label>
                            <ul>
                            {
                            uniData.passingClasses.map(
                                (classes) => {return (<li>{classes}</li>)})
                            }
                            </ul>
                            <label>Clases Actualmente en Curso</label>
                            <ul>
                            {
                            uniData.currentClasses.map(
                                (classes) => { return ( <li>{classes}</li>) })
                            }
                            </ul>
                        </div>
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