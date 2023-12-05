import { Foot } from "./style";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return  <Foot>
                <p>Copyright &copy; {year} Jared Larios.<br /> All Rights Reserved</p>
            </Foot>
}


export default Footer;