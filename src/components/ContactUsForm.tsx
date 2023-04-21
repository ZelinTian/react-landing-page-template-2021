import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col max-w-md mx-auto space-y-4 "
    >
      <div className="flex flex-col ">
        <label htmlFor="firstName" className="text-sm font-medium">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 rounded w-full"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-sm font-medium">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phoneNumber" className="text-sm font-medium">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="emailAddress" className="text-sm font-medium">
          Email Address:
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium">
          How can we help you?
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 rounded resize-none h-24"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
