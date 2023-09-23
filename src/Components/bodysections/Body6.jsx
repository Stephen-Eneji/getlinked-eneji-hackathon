import "./body1-8.css";
import line from '../../imgs/tl-line.png';
import line2 from '../../imgs/Line2.png';

function Body6() {
    return (
        <div className="Body6">
            <div className="body-6">
                <div className="body-6-header">
                    <h1>Timeline</h1>
                    <h4 id="item1-p">Here is the breakdown of the time we anticipate <br/>using for the upcoming event.</h4>
                </div>

        {/* ITEM 1 */}
                <div className="timeline-items">
                    <div className="tl-item1-1">
                        <h2>Hackathon Annoucement</h2>
                        <p>
                            The getlinked tech hackathon 1.0 is formally annouced <br/>to the general public and teams begin to get ready to register
                        </p>
                    </div>
                    <div className="tl-item1-2">
                        <img src={line} />
                        <br/>
                        <span>1</span>
                    </div>

                    <div className="tl-item1-3">
                        <h2>November 18, 2023</h2>
                    </div>
                </div>

                {/* ITEM 2 */}
                <div className="timeline-items">
                    <div className="tl-item2-1">
                        <h2>November 18, 2023</h2>
                    </div>
                    <div className="tl-item1-2">
                        <img src={line2} />
                        <br/>
                        <span>2</span>
                    </div>

                    <div className="tl-item2-3">
                        <h2>Teams Registration ends</h2>
                        <p>
                            Interested participants are no longer Allowed to <br/> register
                        </p>
                    </div>
                </div>

        {/* ITEM 3 */}
                <div className="timeline-items">
                    <div className="tl-item1-1">
                        <h2>Teams Registration ends</h2>
                        <p>
                            Interested participants are no longer Allowed to <br/> register
                        </p>
                    </div>
                    <div className="tl-item1-2">
                        <img src={line2} />
                        <br/>
                        <span>3</span>
                    </div>

                    <div className="tl-item1-3">
                        <h2>November 18, 2023</h2>
                    </div>
                </div>

        {/* ITEM 4 */}
        <div className="timeline-items">
                    <div className="tl-item2-1">
                        <h2>November 18, 2023</h2>
                    </div>
                    <div className="tl-item1-2">
                        <img src={line2} />
                        <br/>
                        <span>4</span>
                    </div>

                    <div className="tl-item2-3">
                        <h2>Announcement of the accepted teams <br/>and ideas</h2>
                        <p>
                            All teams whom idea has been accepted into gelinked tech <br/>hackathon 1.0 2023 are formally annouced.
                        </p>
                    </div>
                </div>

        {/* ITEM 5 */}
        <div className="timeline-items">
                    <div className="tl-item1-1">
                        <h2>Getlinked Hackathon 1.0 Officially Begins</h2>
                        <p>
                            Accepted teams can now proceed to build their <br/>ground breaking skill driven solutions
                        </p>
                    </div>
                    <div className="tl-item1-2">
                        <img src={line2} />
                        <br/>
                        <span>5</span>
                    </div>

                    <div className="tl-item1-3">
                        <h2>November 18, 2023</h2>
                    </div>
                </div>
        
         {/* ITEM 6 */}
         <div className="timeline-items">
                    <div className="tl-item2-1">
                        <h2>November 18, 2023</h2>
                    </div>
                    <div className="tl-item1-2">
                        <img src={line2} />
                        <br/>
                        <span>4</span>
                    </div>

                    <div className="tl-item2-3">
                        <h2>Demo Day</h2>
                        <p>
                        Teams get the opportunity to pitch their projects to judges. <br/> The winner of the hackathon will also be announced on <br/> this day
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Body6;