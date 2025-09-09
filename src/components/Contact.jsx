import { FiMail } from "react-icons/fi";
import { TbMapSearch } from "react-icons/tb";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h5>CONTACT</h5>
      <h4>Let&apos;s Work Together 👇</h4>
      <div className="group">
        <div className="contact-card">
          <div className="contact-icon">
            <TbMapSearch />
          </div>
          <div className="contact-info">
            <h6>Location</h6>
            <p>Available for Remote Work</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FiMail />
          </div>
          <div className="contact-info">
            <h6>Mail</h6>
            <a href="mailto:mazahirali545@gmail.com">mazahirali545@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
