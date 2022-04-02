import './Inquiry.scss';

const Inquiry = () => {
    return (
        <div className="inquiry">
            <div className="inquiry-body">
                <h4>Lass uns zusammenarbeiten!</h4>
                <p>
                    Ich bin Karl und find arbeiten ganz klasse und neue Projekte find ich auch super.
                    <br />Hast du Interesse an einer Zusammenarbeit? Dann trete gerne in Kontakt mit mir :)
                </p>
                <div className="inquiry-details">
                    <div className="inquiry-details-info">
                        <h5>Allgemein</h5>
                        <p>karl-scholten@gmx.de<br />+49 159 08165619</p>
                    </div>
                    <div className="inquiry-details-info">
                        <h5>Social Media</h5>
                        <p>Instagram: @karl_scholten</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Inquiry;