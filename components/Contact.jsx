/* eslint-disable react/no-unescaped-entities */
import { CiMail } from "react-icons/ci";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    your_budget: "",
    message: "",
  });

  const form = useRef(); // Form reference

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m066f4o", "template_brk41kp", form.current, {
        publicKey: "N29Ebh1zhlHE9Wcdp",
      })
      .then(
        () => {
          toast.success("Your message was sent successfully!", {
            position: "top-right",
          });
        },
        (error) => {
          toast.error("There was an error sending your message.", {
            position: "top-right",
          });
        }
      );

    // Reset form data after submission
    setFormData({
      from_name: "",
      from_email: "",
      phone: "",
      your_budget: "",
      message: "",
    });
  };

  return (
    <div className=" glassy-bg-contact px-6 py-12" id="contact">
      {/* Toast Container */}
      <ToastContainer />

      <h1 className="text-lg text-[#00dbdb]  font-thin text-center">
        {" "}
        CONTACT
      </h1>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Let's Work Together</h1>
      </div>

      <div className="contact-form-wrapper mx-auto mt-12">
        <form ref={form} onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="input-label">Full Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your Full Name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div>
              <label className="input-label">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email Address"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Phone & Budget */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="input-label">Phone (Optional)</label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="input-label">Your Budget (Optional)</label>
              <input
                type="text"
                name="your_budget"
                placeholder="Estimated Budget"
                value={formData.your_budget}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="input-label">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="input-field h-28 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <Button type="submit" radius="none" className="submit-button">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
