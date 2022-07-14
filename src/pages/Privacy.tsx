import React from "react";

function Privacy() {
  return (
    <div className="privacy page">
      <div className="header">
        <h3>Privacy Policy</h3>
        <span></span>
      </div>
      <div className="content">
        <h4>What information do we collect?</h4>
        <p>
          We collect information from you when you register on our site, place
          an order, subscribe to our newsletter, respond to a survey or fill out
          a form. When ordering or registering on our site, as appropriate, you
          may be asked to enter your: name, e-mail address, mailing address,
          phone number or credit card information. You may, however, visit our
          site anonymously.
        </p>
        <h4>What do we use your information for?</h4>
        <p>
          <ul>
            <li>To process transactions.</li>
            <li>
              To personalize your experience. Your information helps us to
              better respond to your individual needs.
            </li>
            <li>
              The email address you provide for order processing, may be used to
              send you information and updates pertaining to your order, in
              addition to receiving occasional company news, updates, related
              product or service information, etc.
            </li>
          </ul>
        </p>
        <h4>How do we protect your information?</h4>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your personal information. We offer the use of a secure server.
          All supplied sensitive/credit information is transmitted via Secure
          Socket Layer (SSL) technology and then encrypted into our Payment
          gateway providers database only to be accessible by those authorized
          with special access rights to such systems, and are required to keep
          the information confidential. After a transaction, your private
          information (credit cards, social security numbers, financials, etc.)
          will not be stored on our servers.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
