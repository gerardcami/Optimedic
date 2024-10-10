import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0l6eyt",
        "template_3i6ht5o",
        form.current,
        "TZzDC8DoTBIIVuf9C"
      )
      .then(
        () => {
          console.log("Formulario enviado correctamente");
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            queryType: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error al enviar el formulario:", error);
        }
      );
  };

  return (
    <div className="flex items-center h-full justify-center w-full text-sm">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 rounded-lg w-full md:w-full lg:w-full py-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <label htmlFor="firstName" className="block font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="phone" className="block font-medium">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="queryType" className="block font-medium">
            Tipus de Consulta
          </label>
          <select
            id="queryType"
            name="queryType"
            value={formValues.queryType}
            onChange={handleChange}
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          >
            <option value="">Selecciona un tipus</option>
            <option value="general">Informació General</option>
            <option value="support">Suport Tècnic</option>
            <option value="product">Consulta sobre Producte</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className="mt-3 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-teal-600 transition-colors"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
