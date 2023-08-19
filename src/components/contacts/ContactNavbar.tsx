import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ContactNavbar = (props: Props) => {
  return (
    <nav className="bg-teal-700 p-4 flex justify-between items-center shadow-md">
      <div className="text-white font-semibold text-xl">Contact Manager</div>
      <div className="space-x-4">
        <Link to={"/add-contact"} className="text-white hover:text-red-700">
          Add Contact
        </Link>
        <Link to={"/contact-list"} className="text-white hover:text-red-700">
          View Contacts
        </Link>
      </div>
    </nav>
  );
};

export default ContactNavbar;
