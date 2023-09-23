import "./body1-8.css";
import body5img from "../../imgs/body5img.png";
import star from '../../imgs/star pu.png';

function Body5() {
    return (
        <div className="Body5">
            <div className="body5-left-section">
            <h1>Frequently Ask <br />
                <img src={star} alt="body5-star" id="body5-star"/>
                    <span id="faq"> Question</span>
                </h1>
                <p>
                    We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
                </p>

                <ul className="faq-list">
                    <li>
                        <a href="#">
                            Can i work on a project i started before the hackathon? <span id="plus-icon">+</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            What happens if i need help during the hackathon? <span id="plus-icon">+</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            What happens if i don't have an idea for a project? <span id="plus-icon">+</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Can i join a team or do i have to come with one? <span id="plus-icon">+</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            What happens after the hackathon ends? <span id="plus-icon">+</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Can i work on a project i started before the hackathon? <span id="plus-icon">+</span>
                        </a>
                        </li>
                </ul>


                <img src={star} alt="Purple star" id="star"/>
            </div>

            <div  className="body5-right-section">
            <img src={body5img} alt="Thinking man" />

            </div>
            
        </div>
    );
}

export default Body5;