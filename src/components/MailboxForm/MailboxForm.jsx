import React, { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setboxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create New Mailbox</h2>
        <label htmlFor="owner-input">Box Owner:</label>
        <input
          type="text"
          value={boxOwner}
          onChange={(e) => setboxOwner(e.target.value)}
          required
        />
        <label htmlFor="size-select">Box Size:</label>
        <select
          id="size-select"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button type="submit">Create Mailbox</button>
      </form>
    </>
  );
};

export default MailboxForm;
