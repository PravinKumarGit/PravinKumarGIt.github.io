import React from "react";
import Wrapper from "./Styles/termsAccept.styles";
import Modal from "../../../components/uielements/modal";

export default function TermsAcceptModal({ ...props }) {
  return (
    <Wrapper>
      <Modal
        visible={props.visible}
        header="Privacy Consent &amp; Electronic Authorisation"
        closeable={false}
        footer={
          <div className="cancelBtn">
            <div className="button-Container">
              <button onClick={props.close} className="button-Button">
                Accept
              </button>
            </div>
          </div>
        }
        onClose={props.close}
      >
        <div className="privacyModalContent">
          <h3>Privacy Policy</h3>
          <strong>1. Who is Fair Go Finance Pty Ltd?</strong>
          <p>
            Fair Go Finance Pty Ltd ACN 134 369 574 (
            <strong>we / us / our</strong>) is an organisation that offers
            consumer finance loans.
          </p>
          <strong>2. Our Commitment to Protect Your Privacy</strong>
          <p>
            We understand how important it is to protect your personal
            information. This document sets out our privacy policy commitment in
            respect of personal information we hold about you and what we do
            with that information.
          </p>
          <p>
            We recognise that any personal information we collect about you will
            only be used for the purposes we have collected it for or as allowed
            under the law. It is important to us that you are confident that any
            personal information we hold about you will be treated in a way
            which ensures protection of your personal information.
          </p>
          <p>
            Our commitment in respect of personal information is to abide by the
            Australian Privacy Principles for the protection of personal
            information, as set out in the Privacy Act and any other relevant
            law.
          </p>
          <strong>2.1 Personal Information</strong>
          <p>
            When we refer to
            <strong>
              <em>personal information</em>
            </strong>
            we mean information from which your identity is reasonably apparent.
            This information may include information or an opinion about you
            whether true or not. The personal information we hold about you may
            also include credit information. Credit information is information
            which is used to assess your eligibility to be provided with credit
            and may include any loans that you have outstanding and any
            defaults.
          </p>
          <p>
            The kinds of personal information we may collect about you include
            your name, date of birth, address, account details, occupation and
            any other information we made need to identify you.
          </p>
          <p>
            We may also collect the ages and number of your dependents, the
            length of time at your current address, your employment details and
            proof of earnings and expenses.
          </p>
          <strong>3. Why We Collect Your Personal Information</strong>
          <p>
            We collect personal information for the purposes of assessing your
            application for a loan and managing that loan. We may also collect
            your personal information for the purposes of direct marketing and
            managing our relationship with you. From time to time we may offer
            you other products and services.
          </p>
          <strong>4. How Do We Collect Your Personal Information?</strong>
          <p>
            Where reasonable and practical we will collect your personal
            information directly from you. We may also collect your personal
            information from credit reporting bodies and from finance brokers
            and other people such as accountants and lawyers.
          </p>
          <strong>4.1 Cookies</strong>
          <p>
            Third parties may use cookies, web beacons, and similar technologies
            to collect or receive information from our website and elsewhere on
            the internet and use that information to provide measurement
            services and target ads.
          </p>
          <p>
            You can opt out from allowing these third parties to set cookies on
            your machine, by going to this link{" "}
            <a href="https://rtb.loopa.net.au/pixel/optout">
              https://rtb.loopa.net.au/pixel/optout
            </a>{" "}
            or by changing your browser settings
          </p>
          <p>&nbsp;</p>
          <strong>
            4.2 <em></em>Do we disclose your personal information?
          </strong>
          <p>
            <strong>We may disclose your personal information:</strong>
          </p>
          <ul>
            <li>
              to prospective funders or other intermediaries in relation to your
              finance requirements;
            </li>
            <li>
              to other organisations that are involved in managing or
              administering your finance such as third party suppliers, printing
              and postal services, call centers, lenders mortgage insurers,
              trade insurers and credit reporting bodies;
            </li>
            <li>
              to associated businesses that may want to market products to you;
            </li>
            <li>
              to companies that provide information and infrastructure systems
              to us;
            </li>
            <li>
              to anybody who represents you, such as finance brokers, lawyers,
              and accountants;
            </li>
            <li>to anyone, where you have provided us consent;</li>
            <li>
              where we are required to do so by law, such as under the
              Anti-Money or Laundering and Counter Terrorism Financing Act 2006
              (Cth); or • to investors, agents or advisers, or any entity that
              has an interest in your finance or our business;
            </li>
            <li>
              organisations that provide products or services used or marketed
              by us; or
            </li>
            <li>
              to your employer, referees or identity verification services.
            </li>
          </ul>
          <p>
            Prior to disclosing any of your personal information to another
            person or organisation, we will take all reasonable steps to satisfy
            ourselves that:
          </p>
          <p>
            (a) the person or organisation has a commitment to protecting your
            personal information at least equal to our commitment, or
          </p>
          <p>(b) you have consented to us making the disclosure.</p>
          <p>
            We may disclose your personal information to overseas entities
            located in the United Kingdom and the USA.
          </p>
          <p>
            We may use cloud storage to store the personal information we hold
            about you. The cloud storage and the IT servers may be located
            outside Australia.
          </p>
          <strong>5. Credit information</strong>
          <p>
            We may collect the following kinds of credit information and
            exchange this information with credit reporting bodies and other
            entities:
          </p>
          <ul>
            <li>
              credit liability information being information about your existing
              finance which includes the name of the credit provider, whether
              the credit provider holds an Australian Credit Licence, the type
              of finance, the day the finance is entered into, the terms and
              conditions of the finance, the maximum amount of finance
              available, and the day on which the finance was terminated;
            </li>
            <li>
              repayment history information which is information about whether
              you meet your repayments on time;
            </li>
            <li>
              information about the type of finance that you are applying for;
            </li>
            <li>default and payment information; and</li>
            <li>court proceedings information.</li>
          </ul>
          <p>
            We exchange this credit information for the purposes of assessing
            your application for finance and managing that finance.
          </p>
          <p>
            This credit information may be held by us in electronic form on our
            secure servers and may also be held in paper form. We may use cloud
            storage to store the credit information we hold about you.
          </p>
          <p>
            When we obtain credit information from a credit reporting body about
            you, we may also seek publicly available information and information
            about any serious credit infringement that you may have committed.
          </p>
          <strong>5.1 Notifiable matters</strong>
          <p>
            The law requires us to advise you of ‘notifiable matters’ in
            relation to how we may use your credit information. You may request
            to have these notifiable matters (and this privacy policy) provided
            to you in an alternative form.
          </p>
          <p>
            We exchange your credit information with credit reporting bodies. We
            use the credit information that we exchange with the credit
            reporting body to assess your creditworthiness, assess your
            application for finance and managing your finance.
          </p>
          <p>
            If you fail to meet your payment obligations in relation to any
            finance that we have provided or arranged or you have committed a
            serious credit infringement, then we may disclose this information
            to a credit reporting body.
          </p>
          <p>
            You have the right to request access to the credit information that
            we hold about you and make a request for us to correct that credit
            information if needed. Please see the heading Access and correction
            to your personal and credit information, below.
          </p>
          <p>
            Sometimes your credit information will be used by credit reporting
            bodies for the purposes of ‘prescreening’ credit offers on the
            request of other credit providers. You can contact the credit
            reporting body at any time to request that your credit information
            is not used in this way.
          </p>
          <p>
            You may contact the credit reporting body to advise them that you
            believe that you may have been a victim of fraud. For a period of 21
            days after the credit reporting body receives your notification the
            credit reporting body must not use or disclose that credit
            information.
          </p>
          <p>
            You can contact any of the following credit reporting bodies for
            more information:
          </p>
          <ul>
            <li>veda.com.au</li>
            <li>dnb.com.au, or</li>
            <li>experian.com.au.</li>
          </ul>
          <strong>6. Direct marketing</strong>
          <p>
            From time to time we may use your personal information to provide
            you with current information about finance, offers you may find of
            interest, changes to our organisation, or new products or services
            being offered by us or any company with whom we are associated.
          </p>
          <p>
            If you do not wish to receive marketing information, you may at any
            time decline to receive such information by telephoning us on 1300
            324 746, by writing to us at 4B Mandurah Terrace, Mandurah WA 6210
            or emailing us at{" "}
            <a href="mailto:apply@fairgofinance.com.au">
              apply@fairgofinance.com.au
            </a>
            .
          </p>
          <p>
            If the direct marketing is by email you may also use the unsubscribe
            function. We will not charge you for giving effect to your request
            and will take all reasonable steps to meet your request at the
            earliest possible opportunity.
          </p>
          <strong>7. Updating your personal information</strong>
          <p>
            It is important to us that the personal information we hold about
            you is accurate and up to date. During the course of our
            relationship with you we may ask you to inform us if any of your
            personal information has changed.
          </p>
          <p>
            If you wish to make any changes to your personal information, you
            may contact us. We will generally rely on you to ensure the
            information we hold about you is accurate or complete. We do this
            by:
          </p>
          <p>
            installing security and access requirements for all our IT systems,
            such as passwords, firewalls and virus scanning software;
          </p>
          <p>having document storage and destruction policies;</p>
          <p>
            only providing you your personal information where we are satisfied
            as to your identity;
          </p>
          <p>
            encrypting data and other personal information during internet
            transactions (if any).
          </p>
          <strong>
            7.1 Access and correction to your personal and credit information
          </strong>
          <p>
            We will provide you with access to the personal and credit
            information we hold about you. You may request access to any of the
            personal information we hold about you at any time. We may charge a
            fee for our costs of retrieving and supplying the information to
            you.
          </p>
          <p>
            Depending on the type of request that you make we may respond to
            your request immediately, otherwise we usually respond to you within
            seven days of receiving your request. We may need to contact other
            entities to properly investigate your request.
          </p>
          <p>
            There may be situations where we are not required to provide you
            with access to your personal or credit information, for example, if
            the information relates to existing or anticipated legal
            proceedings, or if your request is vexatious.
          </p>
          <p>
            An explanation will be provided to you, if we deny you access to the
            personal or credit information we hold about you. If any of the
            personal or credit information we hold about you is incorrect,
            inaccurate or out of date you may request that we correct the
            information.
          </p>
          <p>
            If appropriate we will correct the personal information at the time
            of the request, otherwise, we will provide an initial response to
            you within seven days of receiving your request. Where reasonable,
            and after our investigation, we will provide you with details about
            whether we have corrected the personal or credit information within
            30 days. We may need to consult with other finance providers or
            credit reporting bodies or entities as part of our investigation.
          </p>
          <p>
            If we refuse to correct personal or credit information we will
            provide you with our reasons for not correcting the information.
          </p>
          <strong>7.2 Using government identifiers</strong>
          <p>
            If we collect government identifiers, such as your tax file number,
            we do not use or disclose this information other than as authorised
            by law.
          </p>
          <p>
            We will never use a government identifier in order to identify you.
          </p>{" "}
          <strong>7.3 Business without identifying you</strong>
          <p>
            In most circumstances it will be necessary for us to identify you in
            order to successfully do business with you, however, where it is
            lawful and practicable to do so, we will offer you the opportunity
            of doing business with us without providing us with personal
            information, for example, if you make general inquiries about
            interest rates or current promotional offers.
          </p>
          <strong>7.4 Sensitive information</strong>
          <p>
            We will only collect sensitive information about you with your
            consent. Sensitive information is personal information that includes
            information relating to your racial or ethnic origin, political
            persuasion, memberships in trade or professional associations or
            trade unions, sexual preferences, criminal record, or health.
          </p>
          <strong>
            7.5 How safe and secure is your personal information that we hold?
          </strong>
          <p>
            We will take reasonable steps to protect your personal information
            by storing it in a secure environment. We may store your personal
            information in paper and electronic form. We will also take
            reasonable steps to protect any personal information from misuse,
            loss and unauthorised access, modification or disclosure.
          </p>
          <strong>8. Complaints</strong>
          <p>
            If you are dissatisfied with how we have dealt with your personal
            information, or you have a complaint about our compliance with the
            Privacy Act and the Credit Reporting Code, you may contact our
            complaints officer on 1300 324 746. We will acknowledge your
            complaint within seven days. We will provide you with a decision on
            your complaint within 30 days.
          </p>
          <p>
            If you are dissatisfied with the response of our complaints officer
            you may make a complaint to our External Dispute Resolution Scheme,
            the Credit Ombudsman Service Limited which can be contacted on 1800
            138 422 or the Privacy Commissioner who can be contacted either
            through www.oaic.gov.au or 1300 363 992.
          </p>
          <strong>8.1 Further information</strong>
          <p>
            You may request further information about the way we manage your
            personal or credit information by contacting us.
          </p>
          <strong>9. Change in our privacy policy</strong>
          <p>
            We are constantly reviewing all of our policies and attempt to keep
            up to date with market expectations. Technology is constantly
            changing, as is the law and market place practices. As a
            consequence, we may change this privacy policy from time to time or
            as the need arises. You may request this privacy policy in an
            alternative form. This Privacy Policy came into existence on
            09/01/2017.
          </p>
          <p>
            <strong>Acknowledgement and Consent</strong>
          </p>
          <p>
            I have read and understood this Privacy Consent and Electronic
            Authority, and consent to Fair Go Finance using personal information
            in accordance with these terms.
          </p>
        </div>
      </Modal>
    </Wrapper>
  );
}
