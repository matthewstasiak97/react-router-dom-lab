import React from "react";
import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>All Mailboxes</h2>
      <ul>
        {mailboxes.map((box) => (
          <li key={box._id} className="mail-box">
            <Link to={`/mailboxes/${box._id}`}>Box #{box._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
