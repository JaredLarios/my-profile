import { CardStyle } from "./style";

const CardProjects = (props) => {
    return ( 
        <CardStyle
        type='pro'
        position={props.idposition}
        >
            <div className="pro">
            <h2>{props.name}</h2>
            <h3 className="corner">{props.lang}</h3>
            <p>{props.status}</p>
            <p><a href={props.link}>{props.link}</a></p>
            <div className="hide">
                <p><strong>description:</strong> {props.desc}</p>
            </div>
            </div>
        </CardStyle>
     );
}
 
export default CardProjects;