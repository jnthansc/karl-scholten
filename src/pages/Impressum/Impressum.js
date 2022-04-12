import './Impressum.scss';

const Impressum = () => {
    return (
        <div className="impressum">
            <div className="impressum-container">
                <h2>Impressum</h2>

                <h4>Angaben gem&auml;&szlig; &sect; 5 TMG</h4>
                <p>
                    Karl Scholten<br />
                    Fotograf<br />
                    H&ouml;henstra&szlig;e, 42<br />
                    75179 Pforzheim
                </p>

                <h4>Kontakt</h4>
                <p>
                    Telefon: +49 159 08165619<br />
                    E-Mail: karl-scholten@gmx.de
                </p>

                <h4>Umsatzsteuer-ID</h4>
                <p>
                    Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
                    91273469 804
                </p>

                <h4>EU-Streitschlichtung</h4>
                <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                <h4>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h4>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
        </div>

    );
}

export default Impressum;