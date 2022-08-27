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
    return ( 
        <CardStyle>
            <h2>{props.name}</h2>
            <h3>{props.degree}</h3>
            <ul>
                <li>{props.status.currentStatus}</li>
                <li>{props.status.initDate} - {props.status.graduationDate}</li>
                <li>Promedio: {myGp(props.status.gp)} ( {props.status.gp}pts )</li>
                <li>{props.status.spotlight}pts</li>
            </ul>
        </CardStyle>
     );
}
 
export default Card;