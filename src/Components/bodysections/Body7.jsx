import "./body1-8.css";
import cuptrophy from "../../imgs/cup-trophy.png";
import silvermedal from "../../imgs/silver_medal 2.png";
import goldmedal from "../../imgs/gold_medal 1.png";
import bronzemedal from "../../imgs/bronze_medal 3.png";

function Body7() {
    return (
        <div className="Body7">
            <div className="body-7">
                <div className="body7-left-section">
                    <img src={cuptrophy} alt="Ultimate trophy image" />
                </div>

                <div className="body7-right-section">
                    <h2>Prizes and <br/> <span id="rewards-text">Rewards</span> </h2>
                    <p>Highligh of the prizes or rewards for winners and <br/>for participants</p>

                
                    <div className="all--medals">
                        {/* Medal one (Silver) */}
                        <div className="silver-medal-cont">
                            <img src={silvermedal} alt="" />
                            <h1 id="trophy--titlePOS">
                                2nd <br/>
                                <span id="runner--text">Runner</span>
                            </h1>
                            <h1 id="runner-price">N300,000</h1>
                        </div>

                        {/* Medal Two (Gold) */}
                        <div className="gold-medal-cont" >
                            <img src={goldmedal} alt=""id="gold-medal-cont" />
                            <h1 id="trophy--titlePOS">
                                1st <br/>
                                <span id="runner--text">Runner</span>
                            </h1>
                            <h1 id="runner-price--1">N400,000</h1>
                        </div>

                        {/* Medal one (Bronze) */}
                        <div className="bronze-medal-cont">
                            <img src={bronzemedal} alt="" />
                            <h1 id="trophy--titlePOS">
                                3rd <br/>
                                <span id="runner--text">Runner</span>
                            </h1>
                            <h1 id="runner-price">N150,000</h1>
                        </div>
                    </div>                    
                </div>
            </div>


        </div>
    );
}

export default Body7;