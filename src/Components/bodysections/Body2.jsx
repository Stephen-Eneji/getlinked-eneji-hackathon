import "./body1-8.css";
import TBI from "../../imgs/the big idea 1.png";
import star from "../../imgs/star pu.png";
import arrow from "../../imgs/arrow.png";

function Body2() {
    return (
        <div className="Body2">
            <div className="body2-left-section">
                <img src={TBI} alt="the Big Idea" id="the-big-idea" />
                <img src={arrow} alt="body2-arrow" id="body2-arrow"/>
            </div>

            <div className="body2-right-section">
                <h1>Introduction to getlinked 
                <img src={star} alt="body2-star" id="body2-star"/><br />
                    <span id="tech-h"> tech Hackathon 1.0</span>
                </h1>
                
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a conept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutiosn that can change the world. that's what we're all about!
                </p>
            </div>
            
        </div>
    );
}

export default Body2;