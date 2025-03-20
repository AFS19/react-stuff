import phoneIcon from "./assets/contacts/phone-icon.png";
import mailIcon from "./assets/contacts/mail-icon.png";

function ContactCard({ contactImg, contactTitle, contactPhone, contactEmail }) {

    console.log(contactImg);

    return (
        <article className="contact-card">
            <img className="contact-img" src={contactImg} alt="mr-whiskerson" />
            <h3 className="contact-title">{contactTitle}</h3>
            <div className="info-group">
                <img className="info-group-img" src={phoneIcon} alt="phone-icon" />
                <p className="info-group-p">{contactPhone}</p>
            </div>

            <div className="info-group">
                <img className="info-group-img" src={mailIcon} alt="mail-icon" />
                <p className="info-group-p">{contactEmail}</p>
            </div>
        </article>
    );
}

export default ContactCard;