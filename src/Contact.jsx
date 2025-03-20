import whiskerson from './assets/contacts/mr-whiskerson.png';
import fluffykins from './assets/contacts/fluffykins.png';
import felix from './assets/contacts/felix.png';
import pumpkin from './assets/contacts/pumpkin.png';
import phoneIcon from './assets/contacts/phone-icon.png';
import mailIcon from './assets/contacts/mail-icon.png';
import './contacts.css';
import ContactCard from "./ContactCard.jsx";

function Contact() {
    return (
        <div className="contacts">
                <ContactCard contactImg={whiskerson} contactTitle="Mr. Whiskerson" contactPhone="(212) 612345671" contactEmail="mr.whiskerson@catnap.meow" />

                <ContactCard contactImg={fluffykins} contactTitle="Fluffykins" contactPhone="(212) 612345672" contactEmail="fluff@me.com" />

                <ContactCard contactImg={felix} contactTitle="Felix" contactPhone="(212) 612345673" contactEmail="thecat@hotmail.com" />

                <ContactCard contactImg={pumpkin} contactTitle="Pumpkin" contactPhone="(212) 612345674" contactEmail="pumpkin@scrimba.com" />

        </div>
    );
}

export default Contact;