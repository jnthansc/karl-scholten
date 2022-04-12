import './Inquiry.scss';

const Inquiry = () => {
    return (
        <div className="inquiry">
            <div className="inquiry-body">
                <h4>Kontakt</h4>
                <p>
                    <h5 className="contactName">Karl Scholten</h5> <br />
                    Zieblandstraße 32 <br />
                    80798 München <br />
                    Tel.: +49 159 08165619 <br />
                    E-Mail: karl-scholten@gmx.de <br />
                    Instagram: <a href="https://www.instagram.com/karl_scholten/">@karl_scholten</a>
                </p>
                {/* <div className="inquiry-details">
                    <div className="inquiry-details-info">
                        <h5>Allgemein</h5>
                        <p>karl-scholten@gmx.de<br />+49 159 08165619</p>
                    </div>
                    <div className="inquiry-details-info">
                        <h5>Social Media</h5>
                        <p>Instagram: @karl_scholten</p>
                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default Inquiry;