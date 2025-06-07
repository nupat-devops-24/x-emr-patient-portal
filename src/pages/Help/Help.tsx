import React, { useState } from 'react';
import {
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaBook,
  FaChevronDown
} from 'react-icons/fa';
import './Help.css';

const Help: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showFAQs, setShowFAQs] = useState(false);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "Go to the Appointments tab in the sidebar and click 'Book New Appointment'."
    },
    {
      question: "How can I check my lab results?",
      answer: "Click on 'Medical Records' to view and download your lab results."
    },
    {
      question: "What should I do if I forget my password?",
      answer: "On the Sign In page, click 'Forgot Password' to reset it via your email."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-page">
      <div className="help-cards">
        <div
          className="help-card"
          onClick={() => setShowFAQs(!showFAQs)}
          style={{ cursor: "pointer" }}
        >
          <FaQuestionCircle className="help-icon" />
          <h3>FAQs</h3>
        </div>

        <a href="tel:+234800EMRHELP" className="help-card">
          <FaPhone className="help-icon" />
          <h3>Call Support</h3>
        </a>

        <a href="mailto:support@x-emr.com" className="help-card">
          <FaEnvelope className="help-icon" />
          <h3>Email Us</h3>
        </a>

        <a href="/user-guide.pdf" className="help-card" download>
          <FaBook className="help-icon" />
          <h3>User Guide</h3>
        </a>
      </div>

      {showFAQs && (
        <>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <FaChevronDown
                    className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                  />
                  <span>{item.question}</span>
                </div>
                {openIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Help;
