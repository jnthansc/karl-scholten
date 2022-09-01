import './Inquiry.scss';
import React from 'react';

const Inquiry = () => {
    return (
        <div className="inquiry">
            <div className="inquiry-body">
                <h4 className="inquiryHeadline">Kontakt</h4> <br />
                <p>
                    <h5 className="contactName">Karl Scholten</h5> <br />
                    Zieblandstraße 32 <br /> <br />
                    80798 München <br /> <br />
                    Tel.: +49 159 08165619 <br /> <br />
                    E-Mail: karl-scholten@gmx.de <br /> <br />
                    Instagram: <a className="inquiryLink" href="https://www.instagram.com/karl_scholten/">@karl_scholten</a> <br /> <br />
                    LinkedIn: <a className="inquiryLink" href="https://www.linkedin.com/in/karl-scholten-10a721166">Karl Scholten</a>
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