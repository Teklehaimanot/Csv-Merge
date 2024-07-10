"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const response = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-10 flex flex-col  space-y-5">
      <div>
        <input
          className=" border md:w-1/3 w-full  p-2"
          type="text"
          placeholder="Your Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          className=" border  p-2  md:w-1/3 w-full "
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex space-x-5 items-center">
        <textarea
          className=" border  p-2  md:w-1/3 w-full"
          rows={7}
          placeholder="Message..."
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className=" mx-auto border px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600"
        type="submit"
      >
        Send
      </button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
