import { CardStyle } from "./style";

const CardCareer = (props) => {
    return ( 
        <CardStyle
        type='pro'
        position={props.idposition}
        >
            <div className="pro">
            <h2>{props.name}</h2>
            <h3>{props.position}</h3>
            <p className="corner">{props.timeStart} - {props.timeEnd}</p>
            <div className="hide">
                <p><strong>Descripcion:</strong> {props.desc}</p>
                <p><strong>Logros:</strong> {props.spot}</p>
            </div>
            </div>
        </CardStyle>
     );
}
 
export default CardCareer;