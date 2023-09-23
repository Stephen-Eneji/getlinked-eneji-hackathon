import "../bodysections/body1-8.css";
import Starpng from "../../imgs/star.png";
import Shiningball from "../../imgs/shining-ball.png";
import Manwearing from "../../imgs/man-wearing-smart-watch.png";
import Chain from "../../imgs/chain.png";
import Creativesmall from "../../imgs/Creative1.png";
import star2 from "../../imgs/star2.png";
import underline from "../../imgs/underline.png";
import purpleflare from "../../imgs/purple-flare.png";
// import purpleflare from "../../imgs/Purple-Lens-Flare-PNG.png";

function Body1() {
    return (
        <div className="body-1">
            <div className="body-1-top-section">
                <img src={purpleflare} id='purple-flare' />
                
                <img src={Starpng} id='body1--star'/>
                <div>
                    <h2>Igniting a Revolution in HR Innovation</h2>
                    <img src={underline} id='ignite-underline' />
                </div>
                


                {/* Fixed stars */}
                <img src={Starpng} id='fixed-star'/>
            </div>


            <div className="main--body1">
                <div className="body-1-left-section">
                    <h2>getlinked Tech
                        <img src={Creativesmall} alt="creative design" id="creativesmall" />
                        <br/> Hackathon <span className="onepz"> 1.0</span>
                    <img src={Chain} alt="chain design" id="chain" />
                    <img src={star2} alt="star design" id="star" />
                    
                    </h2>
                    <p>Hi, my name is Stephen Eneji and i am participating in getlinked tech Hackathon 2023.</p>
                    
                    <button id="register--button"> Register </button>
                    <br />
                    <div className="min-left-section">
                        <h1>00 <span id="hour">H</span></h1>&nbsp;&nbsp;
                        <h1>00 <span id="minute">M</span></h1>&nbsp;&nbsp;
                        <h1>00 <span id="second">S</span></h1>
                    </div>
                </div>

                <div className="body-1-right-section">
                    <img src={Shiningball} width='100%' id='shining-ball' alt="a literal shinning ball" />
                    <img src={Manwearing} width='57%' alt="man wearing a smart watch" id="man-wearing"/>
                </div>

            </div>
            <hr />
        </div>
    );
}

export default Body1;