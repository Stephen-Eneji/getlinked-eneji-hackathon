import '../styles/body.css';
import Body1 from "../Components/bodysections/Body1.jsx";
import Body2 from "../Components/bodysections/Body2.jsx";
import Body3 from "../Components/bodysections/Body3.jsx";
import Body4 from "../Components/bodysections/Body4.jsx";
import Body5 from "../Components/bodysections/Body5.jsx";
import Body6 from "../Components/bodysections/Body6.jsx";
import Body7 from "../Components/bodysections/Body7.jsx";
import Body8 from "../Components/bodysections/Body8.jsx";
import Body9 from "../Components/bodysections/Body9.jsx";
import Footer from "../Components/bodysections/Footer.jsx";

function Body(){
    return (
        <div>
            <Body1/>
            <Body2/>
            <hr />
            <Body3/>
            <hr />
            <Body4/>
            <hr />
            <Body5/>
            <hr />
            <Body6/>
            <Body7/>
            <Body8/>
            <hr/>
            <Body9/>
            <Footer/>
        </div>
    )
};

export default Body;