import React from "react";
import { Link } from "react-router-dom";

const ContactNavbar: React.FC = () => {
  return (
    <header className="bg-teal-700 p-4 flex justify-between items-center shadow-md">
      <div className="text-white font-semibold text-xl">Contact Manager</div>
      <div className="space-x-4">
        <Link
          to="/add-contact"
          className="text-white hover:text-red-700 transition duration-300"
        >
          Add Contact
        </Link>
        <Link
          to="/contact-list"
          className="text-white hover:text-red-700 transition duration-300"
        >
          View Contacts
        </Link>
      </div>
    </header>
  );
};

export default ContactNavbar;
