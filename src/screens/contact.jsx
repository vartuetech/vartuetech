import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from "react";
import { db } from "../firebase.config";
import Message from "../compenents/Message";

const ContactUs = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && subject !== "" && message !== "" && phone !== "") {
      await addDoc(collection(db, "contacts"), {
        email: email,
        subject: subject,
        message: message,
        phone: phone,
        createdAt: serverTimestamp(),
      });
      // alert("Submitted ,we will contact you soon!");
      setsubmitted(true);
      setSubject("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
  };

  return (
    <div>
      <section className="bg-white my-[6rem] dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-2xl sm:text-3xl tracking-tight font-extrabold text-center text-[#FBB040] dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Get in Touch with Vartuetech: Reach Out for Innovative Solutions and
            Collaboration
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FBB040] focus:border-[#FBB040] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040] dark:shadow-sm-light"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value.trim())}
                type="number"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FBB040] focus:border-[#FBB040] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040] dark:shadow-sm-light"
                placeholder="9876543210"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#FBB040] focus:border-[#FBB040] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040] dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#FBB040] focus:border-[#FBB040] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040]"
                placeholder="Description..."
                required
              ></textarea>
            </div>
            <button
              id="sub"
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#006EB0] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <div id="msg">{submitted ? <Message></Message> : ""}</div>
    </div>
  );
};

export default ContactUs;
