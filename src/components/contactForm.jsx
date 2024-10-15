import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = ({ texts }) => {
  useEffect(() => emailjs.init("TZzDC8DoTBIIVuf9C"), []);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const queryTypeRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_a0l6eyt";
    const templateId = "template_3i6ht5o";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name:
          firstNameRef.current?.value + " " + lastNameRef.current?.value,
        from_email: emailRef.current?.value,
        phone: phoneRef.current?.value,
        queryType: queryTypeRef.current?.value,
        message: messageRef.current?.value,
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center h-full justify-center w-full text-sm">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg w-full md:w-full lg:w-full py-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <label htmlFor="firstName" className="block font-medium">
              {texts.NAME}
            </label>
            <input
              ref={firstNameRef}
              type="text"
              name="firstName"
              className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">
              {texts.LASTNAME}
            </label>
            <input
              ref={lastNameRef}
              type="text"
              name="lastName"
              className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block font-medium">
            {texts.EMAIL}
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="phone" className="block font-medium">
            {texts.PHONE}
          </label>
          <input
            ref={phoneRef}
            type="tel"
            name="phone"
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="queryType" className="block font-medium">
            {texts.QUERYTYPE}
          </label>
          <select
            ref={queryTypeRef}
            name="queryType"
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          >
            <option value="">{texts.QUERYTYPES.DEFAULT}</option>
            <option value="general">{texts.QUERYTYPES.GENERAL}</option>
            <option value="support">{texts.QUERYTYPES.SUPPORT}</option>
            <option value="product">{texts.QUERYTYPES.PRODUCT}</option>
            <option value="other">{texts.QUERYTYPES.OTHER}</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block font-medium">
            {texts.MESSAGE}
          </label>
          <textarea
            ref={messageRef}
            name="message"
            rows={4}
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            disabled={loading}
            className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-teal-600 transition-colors"
          >
            {texts.SUBMIT}
          </button>
        </div>
      </form>
    </div>
  );
};
