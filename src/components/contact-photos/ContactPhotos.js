import { Link } from "react-router-dom";
import FeaturedImage from "../featuredimage/featuredimage";

const ContactPhotos = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div className="contact-info">
          <FeaturedImage type="contacts" pageId={contact.id} />
        </div>
      ))}
    </div>
  );
};

export default ContactPhotos;
