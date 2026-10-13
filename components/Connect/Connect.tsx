import React, { useState } from "react";
import { connectData } from "./ConnectData";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", subject: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="section-box mt-4" id="contact">
      <div className="row">
        <div className="col-12 col-md-10 col-xl-8">
          <h6
            className="title-heading mb-3"
            data-backdrop-text={connectData.mainData.title}
          >
            {connectData.mainData.title2}
          </h6>
          <h1>{connectData.mainData.title3}</h1>
          <p>{connectData.mainData.description}</p>
          <ul className="list-inline-pills mt-4">
            <li>Phone: {connectData.mainData.phone}</li>
            <li>Email: {connectData.mainData.email}</li>
            <li>Address: {connectData.mainData.address}</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 mt-lg-5">
        {/* Contact Form */}
        <div className="contact-form">
          <form method="post" id="contactform" onSubmit={handleSubmit}>
            <div className="row gx-3 gy-0">
              <div className="col-12 col-md-6">
                <label className="visually-hidden" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="visually-hidden" htmlFor="email">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label className="visually-hidden" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <label className="visually-hidden" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="button button-md button-dark"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {/* Submit result */}
          <div className="submit-result" role="status" aria-live="polite">
            {submitStatus === "success" && (
              <span id="success">Thank you! Your Message has been sent.</span>
            )}
            {submitStatus === "error" && (
              <span id="error">Something went wrong. Please try again!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
