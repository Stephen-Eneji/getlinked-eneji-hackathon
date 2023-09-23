import "./body1-8.css";
import company1 from '../../imgs/sponsors/libertycompany.png';
import company2 from '../../imgs/sponsors/libertypay.png';
import company3 from '../../imgs/sponsors/winwisecompany.png';
import company4 from '../../imgs/sponsors/wispercompany.png';
import company5 from '../../imgs/sponsors/paybox.png';
import company6 from '../../imgs/sponsors/vuzualplus.png';
import horizontalLine from '../../imgs/sponsors/Linehorizontal.png';
import verticalLine from '../../imgs/sponsors/linevertic.png';
import purpleflare from "../../imgs/purple-flare.png";
import starpng from "../../imgs/star.png";
import starcolor from "../../imgs/star pu.png";


function Body8() {
    return (
        <div className="Body8">
            <img src={purpleflare} id='body8-purpleflare' />

            <img src={starpng} id='body8-star2' />
            
            <div className="body-8">
                <h1>Partners and Sponsors</h1>
                <p>
                    Gelinked Hackathon 1.0 is honored to have the following major <br/>companies as its partners and Sponsors
                </p>

                <div className="sponsors--imgs-section">
                    <div className="sponsor--1">
                        {/* Company 1 */}
                        <img src={company1} alt="Liberty Assured" id="liberty--assured" />
                        <span>
                            <img src={verticalLine} />
                        </span>

                        {/* Company 2 */}
                        <img src={starcolor} id='body8-star-comp1' />
                        <img src={company2} alt="LibertyPay" id="LibertyPay"/>
                        <span>
                            <img src={verticalLine} />
                        </span>

                        {/* Company 3 */}
                        <img src={company3} alt="WinWise" id="winwise"/>

                        <br />
                        {/* Company 4 */}
                        <img src={company4} alt="Whispersms" id="whispersms"/>
                        <span>
                            <img src={verticalLine} />
                        </span>

                        {/* Company 5 */}
                        <img src={company5} alt="Paybox" id="paybox"/>
                        <span>
                            <img src={verticalLine} />
                        </span>
                        

                        {/* Company 6 */}
                        <img src={company6} alt="Vuzual Plus" id="vuzual--plus"/>
                        {/* <span id="design--studios">Design studios</span> */}

                    </div>
                    <img src={starpng} id='body8-comp-star' />
                </div>
            </div>
            
        </div>
    );
}

export default Body8;