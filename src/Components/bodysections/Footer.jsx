import '../../styles/footer.css';
import phone from "../../imgs/icons/call.png";
import location from "../../imgs/icons/location.png";
import instagram from "../../imgs/icons/instagram.png";
import x from "../../imgs/icons/x.png";
import facebook from "../../imgs/icons/fb.png";
import linkedin from "../../imgs/icons/linkedin.png";

function Footer() {
    return (
        <div className='Footer'>
            <div className="main-footer">

                {/* Footer SECTION 1 */}
                <div className="footer-section-1">
                    <h2>get<span className='linked--'>linked</span></h2>
                    <p>
                        Getlinked Tech Hackathon is a technology Innovation program <br/>established by a group of organizations with the aim of showcasing <br/>young and talented individuals in the field of technology
                    </p>
                    <div className='tou-pp'>
                        <span id="tou-pp">
                        <h4>Terms of use</h4>
                        <h4>Privacy Policy</h4>
                        </span>
                        
                    </div>

                </div>

                {/* Footer SECTION 2 */}
                <div className="footer-section-2">
                    <h3 id='useful--links'>Useful Links</h3>
                    <h4>Overview</h4>
                    <h4>Timeline</h4>
                    <h4>FAQs</h4>
                    <h4>Register</h4>
                    <div>
                    <h4 id='fol-us'>Follow us 
                        <img src={instagram} />
                        <img src={x} />
                        <img src={facebook} />
                        <img src={linkedin} />
                    </h4>
                    
                    </div>
                    
                </div>

                 {/* Footer SECTION 3 */}
                 <div className="footer-section-3">
                    <h3 id='contact--us'>Contact Us</h3>

                    <p> <img src={phone } />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+234 6707663444
                    </p>
                    <p><img src={location } />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27, Alara Street <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yaba 100012 <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lagos State
                    </p>
                 </div>
            </div>
            
            <div className='all-rights'>
                <p>All rights reserved. (c) getlinked Ltd.</p>
            </div>

        </div>
    );
}

export default Footer;