import React from 'react';
import { ShieldCheck, AlertTriangle, HelpCircle, Lock, ExternalLink, CheckCircle } from 'lucide-react';

export const SecurityView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-10">
      {/* Hero Banner (Matching 08.png & 11a.jpeg) */}
      <div className="bg-gradient-to-r from-[#2C241D] to-[#4A3728] text-white rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#18B896]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#B4D31D] mb-4 backdrop-blur-xs">
            <ShieldCheck size={16} /> Online Payments Security
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Online Payments Security
          </h2>
          <p className="text-sm md:text-base text-[#E6E0D4] leading-relaxed">
            It's important to always remain vigilant and protect yourself from payment fraud when making any kind of online payments.
          </p>
        </div>
      </div>

      {/* Section 1: How to protect yourself from online payment fraud */}
      <div className="white-card p-6 md:p-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#2C241D]">
          How to protect yourself from online payment fraud
        </h3>
        <p className="text-sm text-[#554A3E] leading-relaxed">
          With more and more transactions processed online every day, there is an ever increasing need to remain vigilant when making payments online.
        </p>
        <p className="text-sm text-[#554A3E] leading-relaxed">
          We feel it is important to inform our users of the safety measures implemented on our systems and some of the steps we’ve taken to provide our users with a safe, secure, and reliable experience when making payments.
        </p>
        <p className="text-sm text-[#554A3E] leading-relaxed">
          Below we have outlined steps that we would advise you to take should anything suspicious occur during your experience.
        </p>
      </div>

      {/* Section 2: If your card is declined (Matching 09.png & 11c.jpeg) */}
      <div className="white-card p-6 md:p-8 space-y-4 border-l-4 border-l-[#F8BE00]">
        <h3 className="text-xl md:text-2xl font-bold text-[#2C241D]">
          If your card is declined
        </h3>
        <p className="text-sm text-[#554A3E]">
          Should your card be declined we would advise you to take the following actions:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-[#554A3E]">
          <li>Take a screenshot of the error message or make a note of it.</li>
          <li>Immediately contact your Issuing Bank to find out the reason. This is the bank that owns the card that you are using to make this transaction.</li>
          <li>Whilst speaking to your Issuing Bank please have to hand your card details and the name of the website you are trying to pay through.</li>
        </ul>
      </div>

      {/* Section 3: Verified by VISA / Mastercard SecureCode (Matching 09.png & 11b.jpeg) */}
      <div className="white-card p-6 md:p-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#2C241D]">
          Verified by VISA / Mastercard SecureCode and 3-D Secure requests
        </h3>
        <p className="text-sm text-[#554A3E] leading-relaxed">
          When you make a card payment online, after entering your card details you are presented with a Verified by VISA page, or if using a Mastercard, you will be taken to a Mastercard SecureCode page. These are the schemes’ proprietary 3 Domain Secure (3-DS or 3-D Secure) services.
        </p>
        <p className="text-sm text-[#554A3E] leading-relaxed">
          3-DS provides an additional layer of security for eCommerce transactions prior to authorisation and fulfils the requirements of the latest Payment Service Directive (PSD2) through Strong Customer Authentication (SCA). The three parties involved in the 3-DS process are:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#554A3E]">
          <li>The merchant; in this case the merchant is Hobbs School Catering.</li>
          <li>The card issuer; in most cases this is a bank or building society.</li>
          <li>VISA or Mastercard.</li>
        </ul>

        <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#ECE7DE] mt-4 space-y-2">
          <h4 className="font-bold text-sm text-[#4A3728]">Strong Customer Authentication (SCA) Factors:</h4>
          <p className="text-xs text-[#72685D]">When necessary, the consumer will be asked to validate that the transaction is being initiated by the rightful owner of the account through two of the three requirements below:</p>
          <ul className="list-disc pl-5 text-xs text-[#72685D] space-y-1">
            <li><strong>Something only the customer has</strong> (e.g. a mobile device or banking app push notification)</li>
            <li><strong>Something only the customer knows</strong> (e.g. a password or one-time passcode)</li>
            <li><strong>Something only the customer is</strong> (e.g. fingerprint or face ID)</li>
          </ul>
        </div>
      </div>

      {/* Section 4: ATM PIN requests (Matching 10.png & 11d.jpeg) */}
      <div className="white-card p-6 md:p-8 space-y-4 border-l-4 border-l-[#F46060]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFEBEB] text-[#F46060] flex items-center justify-center shrink-0 font-bold">
            <AlertTriangle size={22} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#2C241D]">
            ATM PIN requests
          </h3>
        </div>

        <p className="text-sm text-[#554A3E] leading-relaxed">
          <strong>3-DS will never ask for your card’s ATM PIN.</strong> If you are prompted to enter an ATM PIN or anything other than a username or password, DO NOT enter anything. This will ensure that your money and bank details remain safe.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-[#554A3E]">
          <li>Take a screenshot of the page before closing it and delete the entry from your browser history.</li>
          <li>Log out of the system and close your browser completely.</li>
          <li>Please choose another time and possibly another device to make the payment.</li>
        </ul>
        <p className="text-xs text-[#72685D] pt-2">
          Following the above steps will ensure that your bank details and money remain safe. Next, contact your Issuing Bank to report what happened.
        </p>
      </div>

      {/* Section 5: Support / Questions (Matching 10.png) */}
      <div className="bg-[#FAF7F2] rounded-3xl p-6 md:p-8 border border-[#ECE7DE] space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-[#2C241D]">
          Do you have school payment questions?
        </h3>
        <p className="text-sm text-[#554A3E] leading-relaxed">
          If you require support with school meals, billing, or technical queries, please reach out to our dedicated Hobbs School Catering Support Team or your school's administration office.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#18B896] pt-2">
          <a
            href="https://www.visa.co.uk/products/visa-secure.html"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            Visa Secure Information <ExternalLink size={12} />
          </a>
          <a
            href="https://www.mastercard.co.uk/en-gb/personal/safety-security/identity-check.html"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            Mastercard Identity Check <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
