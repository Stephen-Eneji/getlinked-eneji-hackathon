import "./body1-8.css";
import star from "../../imgs/star pu.png";
import starw from "../../imgs/star.png";
import woman from "../../imgs/woman-sit.png"

function Body3() {
    return (
        <div className="Body3">
            <div className="body3-left-section">
            <h1>Rules and <br />
                <img src={star} alt="body3-star" id="body3-star"/>
                    <span id="guidelines"> Guidelines</span>
                </h1>
                
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a conept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutiosn that can change the world. that's what we're all about!
                </p>
                <img src={starw} alt="White star" id="starw"/>
            </div>

            <div  className="body3-right-section">
            <img src={woman} alt="Woman sitted at body 3" />

            </div>
            
        </div>
    );
}

export default Body3;