import './AboutMe.css';
import Header from '../../components/Header/Header';
import Karlos from '../../assets/karlos.jpg';

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <Header />
            <div className="aboutMe-content row">
                <div className="imageKarl">
                    <img src={Karlos} alt="Karl Scholten" />
                </div>
                <div className="column">
                    <h5>Karl Scholten</h5>
                    <div className="subtitle">Fotograf</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam netus venenatis, iaculis luctus ullamcorper elementum, tempus parturient tristique. At volutpat dictumst leo proin proin. Urna, volutpat arcu adipiscing feugiat morbi dictum.<br />
                        Aliquam, adipiscing ultricies phasellus dolor, velit faucibus sit platea pretium. Est tempor ornare mi semper erat.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam netus venenatis, iaculis luctus ullamcorper elementum, tempus parturient tristique. At volutpat dictumst leo proin proin. Urna, volutpat arcu adipiscing feugiat morbi dictum. <br />
                        Aliquam, adipiscing ultricies phasellus dolor, velit faucibus sit platea pretium. Est tempor ornare mi semper erat. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h5>AUSZEICHNUNGEN UND PREISE</h5>
                    <div className="awards">
                        <div className="awards-line">
                            <p>2021</p>
                            <p>
                                LangerPimmel <br/>
                                GroßerPimmel <br/>
                                RiesenCock <br/>
                                LongusMongus <br/>
                            </p>

                        </div>
                        <div className="awards-line">
                            <p>2020</p>
                            <p>
                                LangerPimmel <br/>
                                GroßerPimmel <br/>
                                RiesenCock <br/>
                                LongusMongus <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;