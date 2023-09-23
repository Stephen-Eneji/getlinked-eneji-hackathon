import "../styles/header.css";

function Header(){
    return(
        <div className="Header">
            <div className="header--1">
                <h2>get<span id="linked">linked</span></h2>
            </div>

            <div className="header--2">
                <ul className="hamburger-menu">
                    <li><a href="#/">Timeline</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>

                <div className="header--3">
                    <ul>
                        <li id="register-btn"><a href="#">Register</a></li>
                    </ul>
                    
                </div>
            
        </div>
    )
};

export default Header;