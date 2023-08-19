import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../../redux/types";
import { editContact } from "../../redux/actions";

interface EditPopupProps {
  contact: Contact;
  onClose: () => void;
}

const EditPopup: React.FC<EditPopupProps> = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof inputValues
  ) => {
    setInputValues({ ...inputValues, [field]: e.target.value });
  };

  const handleSubmit = () => {
    const editedContact: Contact = {
      ...contact,
      ...inputValues,
    };
    dispatch(editContact(editedContact));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 border border-black-600">
          Edit Contact
        </h2>
        <input
          type="text"
          value={inputValues.name}
          onChange={(e) => handleInputChange(e, "name")}
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="email"
          value={inputValues.email}
          onChange={(e) => handleInputChange(e, "email")}
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="number"
          value={inputValues.phone}
          onChange={(e) => handleInputChange(e, "phone")}
          className="border rounded-lg p-2 mb-4"
        />
        <div className="flex justify-end">
          <ActionButton text="Save" onClick={handleSubmit} color="green" />
          <ActionButton text="Cancel" onClick={onClose} color="red" />
        </div>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  color: "green" | "red";
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 text-white px-4 py-2 rounded-lg hover:bg-${color}-600 border border-black-600`}
    >
      {text}
    </button>
  );
};

export default EditPopup;
