import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {
  const [state, handleSubmit] = useForm("xzblpvaq");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
  <section id="contact">
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-transparent" id="ContactUs">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-red mx-8 md:mx-0 shadow rounded-3xl sm:p-10 bg-red-850">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500 w-6 h-6"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span className="font-bold text-2xl">Contact Us</span>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-cyan-600 sm:text-lg sm:leading-7">
                <p>Please Comment Here.</p>
              </div>
              <div className="flex flex-col">
                <form action="" onSubmit={handleSubmit}>
                  <label className="leading-loose">Name</label>
                  <input
                    type="text"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 input"
                    placeholder="Your Name"
                    name="name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
              
                  <label className="leading-loose">Email</label>
                  <input
                    type="email"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 input"
                    placeholder="Your Email"
                    name="email"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
              
                  <label className="leading-loose">Message</label>
                  <textarea
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 input"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
              
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="bg-blue-700 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-white hover:transition hover:text-black" type="submit" disabled={state.submitting}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

function App() {
  return (
    <ContactUs />
  );
}

export default App;