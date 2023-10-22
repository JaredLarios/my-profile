import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { LangProvider } from "../Context/ContextLang";

const Home = () => {
    return ( 
        <LangProvider>
            <Header />
            <Body />
            <Footer />
        </LangProvider>
     );
}
 
export default Home;