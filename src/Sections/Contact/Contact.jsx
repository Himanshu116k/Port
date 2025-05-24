import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import TitleHeader from "../../Components/Contact/TitleHeader";
import ContactExperience from "../../Components/Contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS code goes here if needed
    /*
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMP,
        formRef.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center px-4 py-10 bg-black min-h-screen" id="Contact">
      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

          <label className="flex flex-col text-sm font-medium">
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>

          <label className="flex flex-col text-sm font-medium">
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>

          <label className="flex flex-col text-sm font-medium">
            Your Message
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here"
              value={form.message}
              onChange={handleChange}
              className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Image or Illustration Section */}
      <div className="hidden lg:block lg:w-1/2 text-center mt-10 lg:mt-0 ">
       
        <img src="https://www.figma.com/community/resource/bb21de5b-a79b-4444-9cd1-1a084ff135e2/thumbnail" alt="Contact" className="w-full max-w-md mx-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Contact;
