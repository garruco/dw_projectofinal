import { Link } from "react-router-dom";
import FeaturedImage from "../featuredimage/featuredimage";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li className="contact" key={contact.id}>
            <div className="contact-info">
              <p>Nome: {contact?.title?.rendered}</p>
              {contact?.content?.rendered}
              <FeaturedImage type="contacts" pageId={contact.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
