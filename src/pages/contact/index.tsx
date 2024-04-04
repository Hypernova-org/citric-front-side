import React from "react";

const Contact = () => {
  return (
    <div className="contact_page">
      <p className="contact_page_title">Kontact</p>
      <div className="contact_page">
        <iframe
          title="Citric uz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.597807367512!2d69.25384058495027!3d41.361094897310565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d9e466d1bc9%3A0x61fe770dd2699c56!2sCITRIC.UZ!5e0!3m2!1sru!2s!4v1712206559015!5m2!1sru!2s"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>Toshkent shahri, Olmazor tumani, ko'ch. Jeymi, 299</p>
      </div>
    </div>
  );
};

export default Contact;
