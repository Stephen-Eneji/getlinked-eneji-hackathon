import "./body1-8.css";
import body4img from "../../imgs/body4image.png";
import star from '../../imgs/star pu.png';
import purpleflare from "../../imgs/purple-flare.png";

function Body4() {
    return (
        <div className="Body4">
        <div className="body4-left-section">
            <img src={body4img} alt="Body 4 images of man and woman" />
            <img src={purpleflare} id='body4-purpleflare' />
        </div>

        <div  className="body4-right-section">
            <h1>
                Juding Criteria <br/>
                <img src={star} alt="body4-star" id="body4-star"/>

                <span id="key-attributes"> Key attributes </span>
            </h1>

            <p>
                <span id="key-a--header">Innovation and Creativity</span>: Evaluate the uniqueness of creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
            </p>
            <p>
                <span id="key-a--header">Functionalities</span>: Access how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>
            <p>
                <span id="key-a--header">Impack and Relevance</span>: Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
            </p>
            
            <p>
                <span id="key-a--header">Technical Complexity</span>: Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
            </p>

            <p>
                <span id="key-a--header">Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
            </p>

            <button className="body-4-btn"> Read More</button>
        </div>
        
    </div>
    );
}

export default Body4;