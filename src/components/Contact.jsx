import React, { useState } from 'react';

const Contact = () => { // Renamed to match the export
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      message,
      _captcha: "false",
      _subject: "New Contact Message from Portfolio",
      _template: "table"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/mr.rajamanikandan@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success === "true") {
        setStatus("Your Message sent successfully!");
        setEmail('');
        setMessage('');
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠ Something went wrong. Try later.");
    }
  };

  return (
    <section className="Contact-content pt-4" id="Contact">
      <div id="queries" className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-5 fw-bold lh-1 p-3">Contact</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3 text-start">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder='Enter your email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a message..."
              id="messageTextarea"
              style={{ height: '100px' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn resume-profile btn-dark">Submit</button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-3 text-info">{status}</p>}
      </div>
    </section>
  );
};

export default Contact; // Updated to match the component name
