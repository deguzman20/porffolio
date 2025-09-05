const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full p-[20px] md:py-16 md:px-40 bg-gray-50 flex flex-col gap-y-4"
    >
      <h1 className="text-2xl underline underline-offset-8 self-center">
        Contact
      </h1>
      <p className="text-center text-gray-600">
        Have a question or want to work together? Fill out the form below and
        I'll get back to you as soon as possible.
      </p>
      <form className="w-full bg-white p-8 rounded-lg shadow-lg self-center">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
