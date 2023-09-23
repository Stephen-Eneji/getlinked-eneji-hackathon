import "./body1-8.css";
import body9Image from '../../imgs/section9img.png';
import starpng from "../../imgs/star.png";
import starcolor from "../../imgs/star pu.png";

function Body9() {
    return (
        <div className="Body9">
            <div className="body-9">
                <div className="body9-left-section">
                    <h1>
                        <img src={starpng} id='body9-comp-star' />
                        Privacy Policy and <br/>
                        <span className="terms--"> Terms</span>
                    </h1>
                    <h5>
                        Last updated on September 12, 2023
                    </h5>
                    <img src={starcolor} id='body9-comp-starcolor' />
                    
                    <img src={starpng} id='body9-comp-star2' />

                    <img src={starcolor} id='body9-comp-starcolor2' />
                    
                    <img src={starpng} id='body9-comp-star3' />
                    <p>
                        Below are our privacy & policy, which outline a lot of goodles. <br/>it's our aim to always take of our participant
                    </p>

                    <div className="sub-pp-terms">
                        <p>
                        At getlinked tech Hackathon 1.0, we value your privacy <br/>and are committed to protecting your personal information. <br />This Privacy Policy outlines how we collect, use, disclose,  <br/> and safeguard your data when you participate in our tech <br />hackathon event. By participating in our event, you consent <br />to the practices described in this policy.

                        </p> <br />

                        <h5>Licensing Policy</h5>
                        <p>
                            Here are terms of our Standard License:
                            <ol id="licensing--policy">
                                <li>
                                The Standard License grants you a non-exclusive right to navigate and register for our event
                                </li>

                                <li>
                                You are licensed to use the item available at any free source sites, for your project developement
                                </li>
                            </ol>
                        </p>

                        <div className="btn-div">
                            <button className="read--morebtn">Read More</button>
                        </div>
                        
                    </div>
                </div>

                <div className="body9-section-right">
                    <img src={body9Image} id='security-v' />
                </div>

            </div>
            
        </div>
    );
}

export default Body9;