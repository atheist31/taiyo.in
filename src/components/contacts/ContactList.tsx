import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../../redux/types";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import EditPopup from "./EditPopup";
import { deleteContact } from "../../redux/actions";
import ContactNavbar from "./ContactNavbar";

const ContactList: React.FC = () => {
  const { contacts } = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
  };

  const handleCloseEdit = () => {
    setEditingContact(null);
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ContactNavbar />
      <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-6">Contact List</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {contacts.map((contact: Contact) => (
            <li
              key={contact.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div className="mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/107496019?v=4"
                  alt=""
                  className="w-full h-100 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold capitalize">
                  Name: {contact.name}
                </h3>
                <p className="text-gray-600 text-base">
                  Email: {contact.email}
                </p>
                <p className="text-gray-600 text-base">
                  Contact Number: {contact.phone}
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-4 justify-center">
                <button
                  onClick={() => handleEditClick(contact)}
                  className="text-green-400 border border-black-600 hover:text-green-700 bg-white p-2 rounded-md shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(contact.id)}
                  className="text-red-400 border border-black-600 hover:text-red-700 bg-white p-2 rounded-md shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {editingContact && (
          <EditPopup contact={editingContact} onClose={handleCloseEdit} />
        )}
      </div>
    </>
  );
};

export default ContactList;

